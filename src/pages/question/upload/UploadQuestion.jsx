import React, { useEffect, useRef } from 'react';
import * as S from './UploadQuestionStyled';
import * as GS from '~/components/templates/Styled';
import { ThreeRowTemplate } from '~/components/templates/ThreeRowTemplate';

import Categories from '~/model/constants/Categories';

import Banner3d from 'Asset/image/banner/banner3d.png';
import ArrowBlackFillBottom from 'Asset/image/arrow_black_fill_bottom.png';
import ArrowBlackFillTop from 'Asset/image/arrow_black_fill_top.png';
import Js from 'Asset/image/category_js.png';
import Java from 'Asset/image/category_java.png';
import PhotoShop from 'Asset/image/category_photoshop.png';
import InDesign from 'Asset/image/category_indesign.png';
import ProfileDefault from 'Asset/image/profile_default.png';

import { useNavigate } from 'react-router';

import DeviceWidth from '~/model/constants/DeviceWidth';
import { Editor } from '~/pages/question/components/Editor';
import { Modal } from '~/components/modal/Modal';

import { QuestionService } from '~/network/service/QuestionService';
import HttpStatus from '~/model/constants/HttpStatus';
import { checkSession, deleteSession } from '~/network/BaseService';
import { contextType } from 'react-quill';

import { useSelector, useDispatch } from 'react-redux';
import { openModal, CREATE_QUESTION_CONFIRM } from '~/store/ModalSlice';

export const UploadQuestion = ({ windowSize }) => {
  const isModal = useSelector((state) => state.modal.open);
  const dispatch = useDispatch();

  const getMiddleCategoires = (largeCategory) => {
    return largeCategory['middle'];
  };

  const getLargeCategoryName = (largeCategory) => {
    return largeCategory['name'];
  };

  const getMiddleCategoryName = (largeCategory, middleCategory) => {
    let middleCategories = largeCategory['middle'];
    return middleCategories[middleCategory];
  };

  const getMiddleCategorByIndex = (largeCategory, i) => {
    let middleCategories = largeCategory['middle'];
    let middleCategory = Object.keys(middleCategories)[i];
    return middleCategory;
  };

  const getDefaultLargeCategory = () => {
    let defaultLargeCategoryKey = Object.keys(Categories)[0];
    return Categories[defaultLargeCategoryKey];
  };

  const getDefaultMiddleCategory = (largeCategory) => {
    // 서브카테고리 목록 Object
    let middleCategories = largeCategory['middle'];

    // 서브카테고리 목록의 첫번째 Object key
    let defaultMiddleCategoryKey = Object.keys(middleCategories)[0];
    return defaultMiddleCategoryKey;
  };

  const pointList = [100, 200, 300, 400, 500, 1000];
  const navigate = useNavigate();

  const largeCategorySelectRef = useRef();
  const middleCategorySelectRef = useRef();
  const pointSelectRef = useRef();

  const [isLoading, setLoading] = React.useState(false);
  const [isOpenLargeCategory, setOpenLargeCategory] = React.useState(false);
  const [isOpenMiddleCategory, setOpenMiddleCategory] = React.useState(false);
  const [isOpenPoint, setOpenPoint] = React.useState(false);
  const [isOpenModal, setOpenModal] = React.useState(false);

  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [largeCategory, setLargeCategory] = React.useState(getDefaultLargeCategory());
  const [middleCategory, setMiddleCategory] = React.useState(getDefaultMiddleCategory(getDefaultLargeCategory()));
  const [point, setPoint] = React.useState(pointList[0]);
  const [thumbnail, setThumbnail] = React.useState();

  useEffect(() => {
    if (!checkSession()) {
      navigate('/', { replace: true });
    }
  }, []);

  const getCategoryImg = (largeCategory, middleCategory) => {
    if (largeCategory == Categories['DEV']) {
      switch (middleCategory) {
        case Categories['DEV']['middle']['Java']:
          return Java;
        case Categories['DEV']['middle']['JavaScript']:
          return Js;
      }
    } else {
      switch (middleCategory) {
        case Categories['DESIGN']['middle']['PhotoShop']:
          return PhotoShop;
        case Categories['DESIGN']['middle']['InDesign']:
          return InDesign;
      }
    }
  };

  const useOutside = (ref) => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        switch (ref) {
          case largeCategorySelectRef:
            if (isOpenLargeCategory) {
              setOpenLargeCategory(false);
            }
            break;
          case middleCategorySelectRef:
            if (isOpenMiddleCategory) {
              setOpenMiddleCategory(false);
            }
            break;
          case pointSelectRef:
            if (isOpenPoint) {
              setOpenPoint(false);
            }
            break;
        }
      }
    }

    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    });
  };

  const validate = () => {
    if (!title || title.length < 4) {
      alert('제목을 4글자 이상 입력해주세요.');
      return false;
    }
    if (!content) {
      alert('내용을 입력해주세요.');
      return false;
    }
    if (!point) {
      alert('내용을 입력해주세요.');
      return false;
    }
    if (!largeCategory) {
      alert('첫번째 카테고리를 입력해주세요.');
      return false;
    }
    if (!middleCategory) {
      alert('두번째 카테고리를 입력해주세요.');
      return false;
    }

    return true;
  };

  const createQuestion = async () => {
    let imgToken = '<img src="';

    let imgTagCount = content.split(imgToken).length - 1;
    let preContent = content;
    let resultContent = '';

    let imgDataList = [];
    let multipartList = [];

    for (let i = 0; i < imgTagCount; i++) {
      let imgTagIndex = preContent.indexOf(imgToken);
      if (imgTagIndex == -1) {
        continue;
      }

      let imgAfterString = preContent.substring(imgTagIndex + imgToken.length, preContent.length);
      let imgSrcLength = imgAfterString.indexOf('">');
      imgDataList.push(imgAfterString.substring(0, imgSrcLength));

      resultContent += preContent.substring(0, imgTagIndex + imgToken.length);
      preContent = preContent.substring(imgTagIndex + imgToken.length + imgSrcLength, preContent.length);

      if (i == imgTagCount - 1) {
        resultContent += preContent;
      }
    }

    const formData = new FormData();
    formData.append('thumbnail', thumbnail);

    // add params
    formData.append(
      'data',
      new Blob(
        [
          JSON.stringify({
            title,
            content,
            point,
            largeCategory: largeCategory.name,
            middleCategory: middleCategory,
          }),
        ],
        {
          type: 'application/json',
        },
      ),
    );

    const res = await QuestionService.createQuestion({
      formData,
    });

    if (!res) {
      alert('결과를 받아오지 못했습니다.');
      return;
    }

    if (res.status == HttpStatus.OK) {
      navigate('/', { replace: true });
    } else if (res.status == HttpStatus.UNAUTHORIZED) {
      deleteSession();
      alert('세션에 연결된 로그인 정보가 없습니다.\n로그인을 진행해주세요.');
      navigate('/', { replace: true });
    } else {
      alert(res.message);
    }
  };

  useOutside(largeCategorySelectRef);
  useOutside(middleCategorySelectRef);
  useOutside(pointSelectRef);

  const LargeCategorySelect = () => {
    return (
      <GS.Container>
        <GS.CustomSelect
          ref={largeCategorySelectRef}
          src={isOpenLargeCategory ? ArrowBlackFillTop : ArrowBlackFillBottom}
          width={'160px'}
          onClick={() => setOpenLargeCategory(!isOpenLargeCategory)}>
          {getLargeCategoryName(largeCategory)}
        </GS.CustomSelect>
        {isOpenLargeCategory && (
          <GS.Container>
            {Object.keys(Categories).map((categoryKey, i) => {
              let category = Categories[categoryKey];
              return (
                <GS.Container key={i}>
                  <GS.CustomSelectItem
                    width={'160px'}
                    index={i}
                    onClick={() => {
                      setLargeCategory(category);
                      setMiddleCategory(getDefaultMiddleCategory(category));
                      setOpenLargeCategory(false);
                    }}>
                    {getLargeCategoryName(category)}
                  </GS.CustomSelectItem>
                </GS.Container>
              );
            })}
          </GS.Container>
        )}
      </GS.Container>
    );
  };

  const MiddleCategorySelect = () => {
    return (
      <GS.Container>
        <GS.CustomSelect
          hasImg
          ref={middleCategorySelectRef}
          src={isOpenMiddleCategory ? ArrowBlackFillTop : ArrowBlackFillBottom}
          width={'280px'}
          onClick={() => {
            setOpenMiddleCategory(!isOpenMiddleCategory);
          }}>
          {getMiddleCategoryName(largeCategory, middleCategory)}
          <GS.FilterCategoryImg>
            <GS.CategoryItem selectItem size={'40px'} src={getCategoryImg(largeCategory, middleCategory)} />
          </GS.FilterCategoryImg>
        </GS.CustomSelect>
        {isOpenMiddleCategory && (
          <GS.Container>
            {Object.keys(getMiddleCategoires(largeCategory)).map((middleCategoryKey, i) => {
              let _middleCategory = getMiddleCategoires(largeCategory)[middleCategoryKey];
              return (
                <GS.Container key={i}>
                  <GS.CustomSelectItem
                    hasImg
                    width={'280px'}
                    index={i}
                    onClick={() => {
                      setMiddleCategory(_middleCategory);
                      setOpenMiddleCategory(false);
                    }}>
                    {getMiddleCategoryName(largeCategory, _middleCategory)}
                    <GS.FilterCategoryImg>
                      <GS.CategoryItem selectItem size={'40px'} src={getCategoryImg(largeCategory, _middleCategory)} />
                    </GS.FilterCategoryImg>
                  </GS.CustomSelectItem>
                </GS.Container>
              );
            })}
          </GS.Container>
        )}
      </GS.Container>
    );
  };

  const PointSelect = () => {
    return (
      <GS.Container>
        <GS.CustomSelect
          ref={pointSelectRef}
          src={isOpenPoint ? ArrowBlackFillTop : ArrowBlackFillBottom}
          width={'160px'}
          onClick={() => setOpenPoint(!isOpenPoint)}>
          {point}P
        </GS.CustomSelect>
        {isOpenPoint && (
          <GS.Container>
            {pointList.map((point, i) => {
              return (
                <GS.Container key={i}>
                  <GS.CustomSelectItem
                    width={'160px'}
                    index={i}
                    onClick={() => {
                      setPoint(point);
                      setOpenPoint(false);
                    }}>
                    {pointList[i]}P
                  </GS.CustomSelectItem>
                </GS.Container>
              );
            })}
          </GS.Container>
        )}
      </GS.Container>
    );
  };

  return (
    <ThreeRowTemplate hasFloating={false} isLoading={isLoading} profileImg={ProfileDefault} windowSize={windowSize}>
      <S.Wrapper>
        <GS.Banner3d>
          <GS.Banner3dImage src={Banner3d} />
        </GS.Banner3d>
        <S.Question>
          <S.QuestionHeader>
            <S.QuestionHeaderText>질문하기</S.QuestionHeaderText>
          </S.QuestionHeader>

          <GS.Divider width="2px" />

          {windowSize.width > DeviceWidth.HALF ? (
            <S.FilterWrapper>
              <GS.FL style={{ marginRight: '8px' }}>
                <LargeCategorySelect />
              </GS.FL>

              <GS.FL>
                <MiddleCategorySelect />
              </GS.FL>

              <GS.FR>
                <PointSelect />
              </GS.FR>
            </S.FilterWrapper>
          ) : (
            <GS.Container style={{ top: '12px', textAlign: 'start' }}>
              <LargeCategorySelect />
              <MiddleCategorySelect />
              <PointSelect />
            </GS.Container>
          )}

          <S.TitleWrapper>
            <GS.FL>
              <S.TitleInput placeholder="제목을 입력해주세요." onChange={(e) => setTitle(e.target.value)} />
            </GS.FL>
          </S.TitleWrapper>

          <Editor windowSize={windowSize} content={content} setContent={setContent} setThumbnail={setThumbnail} />

          <S.UploadBtn
            onClick={() => {
              if (validate()) {
                dispatch(
                  openModal({
                    type: CREATE_QUESTION_CONFIRM,
                    modalContent: {
                      img: Banner3d,
                      title: `코칭이 하나라도 붙으면 수정이나 삭제가 불가능합니다.\n업로드 하시겠어요?`,
                    },
                  }),
                );
              }
            }}>
            업로드
          </S.UploadBtn>
        </S.Question>
      </S.Wrapper>
    </ThreeRowTemplate>
  );
};
