import React, { useEffect, useRef } from 'react';
import * as S from './HomeStyled';
import * as GS from '~/components/templates/Styled';
import { ROUTE_QUESTION_VIEW } from '~/router';
import Banner2d from 'Asset/image/banner/banner2d.png';
import Banner3d from 'Asset/image/banner/banner3d.png';
import Java from 'Asset/image/category_java.png';
import Js from 'Asset/image/category_js.png';
import PhotoShop from 'Asset/image/category_photoshop.png';
import ProfileSignIn from 'Asset/image/profile_sign_in.png';
import ProfileDefault from 'Asset/image/profile_default.png';
import DevelopmentBanner from 'Asset/image/development_banner.png';
import DesignBanner from 'Asset/image/design_banner.png';
import Fire from 'Asset/image/fire.png';
import InDesign from 'Asset/image/category_indesign.png';
import SortType from '~/model/constants/SortType';
import { ThreeRowTemplate } from '~/components/templates/ThreeRowTemplate';
import { Paging } from '~/components/paging/Paging';
import { checkSession } from '~/network/BaseService';
import { QuestionService } from '~/network/service/QuestionService';
import { useSelector, useDispatch } from 'react-redux';
import { setQuestion, addQuestion, QUESTION_MAIN } from '~/store/QuestionSlice';

const arrCategoryItem = new Array(12).fill(0);

const getCateogoryItems = (array, predicate) =>
  array.map((categoryItem, i) => (
    <GS.CategoryItem
      style={{
        float: 'left',
        margin: '2px',
      }}
      key={i}
      src={predicate(i)}
    />
  ));

export const Home = ({ windowSize }) => {
  const dispatch = useDispatch();
  const questionList = useSelector((state) => state.question.main);
  const pageSetting = useSelector((state) => state.question.pageSetting);

  const homeDevCategoryRef = useRef(null);
  const homeDesignCategoryRef = useRef(null);

  const [isLoading, setLoading] = React.useState(false);

  const [isOpenHomeDev, setOpenHomeDev] = React.useState(false);
  const [isOpenHomeDesign, setOpenHomeDesign] = React.useState(false);

  const [sortType, setSortType] = React.useState(SortType.CREATED);
  const [listSize, setListSize] = React.useState(0);

  const [questions, setQuestions] = React.useState([]);
  const [viewPage, setViewPage] = React.useState(0);
  const [apiPage, setApiPage] = React.useState(1);
  const [lastApiPage, setLastApiPage] = React.useState(0);

  const getAnswerAscQuestionList = async (page) => {
    //setLoading(true);
    const res = await QuestionService.getQuestionList({
      page,
      perPage: pageSetting.apiPageSize,
      sort: SortType.ANSWER,
    });

    if ('data' in res) {
      if ('pageInfo' in res.data && 'posts' in res.data) {
        dispatch(
          setQuestion({
            type: QUESTION_MAIN,
            sort: SortType.ANSWER,
            apiPage: page,
            list: res.data.posts,
            lastApiPage: res.data.pageInfo.lastPage,
            viewPage: (page - 1) * pageSetting.pageNumberSize + 1,
          }),
        );

        const newList = questions.concat(res.data.posts);
        if (page == 1) {
          setQuestions(res.data.posts);
        } else {
          setQuestions(newList);
        }
        setApiPage(page);
        setViewPage((page - 1) * pageSetting.pageNumberSize + 1);
        setLastApiPage(res.data.pageInfo.lastPage);
        setListSize(newList.length);
      }
    }
    //setLoading(false);
  };

  const getCreatedDescQuestionList = async (page) => {
    //setLoading(true);
    const res = await QuestionService.getQuestionList({
      page,
      perPage: pageSetting.apiPageSize,
      sort: SortType.CREATED,
    });
    if ('data' in res) {
      if ('pageInfo' in res.data && 'posts' in res.data) {
        dispatch(
          setQuestion({
            type: QUESTION_MAIN,
            sort: SortType.CREATED,
            apiPage: page,
            list: res.data.posts,
            lastApiPage: res.data.pageInfo.lastPage,
            viewPage: (page - 1) * pageSetting.pageNumberSize + 1,
          }),
        );

        const newList = questions.concat(res.data.posts);
        if (page == 1) {
          setQuestions(res.data.posts);
          console.log('asdfasdas');
        } else {
          setQuestions(newList);
        }
        setApiPage(page);
        setViewPage((page - 1) * pageSetting.pageNumberSize + 1);
        setLastApiPage(res.data.pageInfo.lastPage);
        setListSize(newList.length);
      }
    }
    //setLoading(false);
  };

  const getPointDescQuestionList = async (page) => {
    //setLoading(true);
    const res = await QuestionService.getQuestionList({
      page,
      perPage: pageSetting.apiPageSize,
      sort: SortType.POINT,
    });
    if ('data' in res) {
      if ('pageInfo' in res.data && 'posts' in res.data) {
        dispatch(
          setQuestion({
            type: QUESTION_MAIN,
            sort: SortType.POINT,
            apiPage: page,
            list: res.data.posts,
            lastApiPage: res.data.pageInfo.lastPage,
            viewPage: (page - 1) * pageSetting.pageNumberSize + 1,
          }),
        );

        const newList = questions.concat(res.data.posts);
        if (page == 1) {
          setQuestions(res.data.posts);
        } else {
          setQuestions(newList);
        }
        setApiPage(page);
        setViewPage((page - 1) * pageSetting.pageNumberSize + 1);
        setLastApiPage(res.data.pageInfo.lastPage);
        setListSize(newList.length);
      }
    }
    //setLoading(false);
  };

  const developmentCategories = getCateogoryItems(arrCategoryItem, (i) => (i % 2 == 0 ? Js : Java));
  const designCategories = getCateogoryItems(arrCategoryItem, (i) => (i % 2 == 0 ? PhotoShop : InDesign));

  const onClickPage = (page) => {
    setViewPage(page);
    switch (sortType) {
      case SortType.ANSWER:
        dispatch(
          setQuestion({
            type: QUESTION_MAIN,
            sort: SortType.ANSWER,
            viewPage: page,
          }),
        );
        break;
      case SortType.CREATED:
        dispatch(
          setQuestion({
            type: QUESTION_MAIN,
            sort: SortType.CREATED,
            viewPage: page,
          }),
        );
        break;
      case SortType.POINT:
        dispatch(
          setQuestion({
            type: QUESTION_MAIN,
            sort: SortType.POINT,
            viewPage: page,
          }),
        );
        break;
    }
  };

  const onClickPrev = () => {
    if (viewPage % pageSetting.pageNumberSize == 0) {
      onClickPage(viewPage - pageSetting.pageNumberSize);
    } else {
      onClickPage(viewPage - (viewPage % pageSetting.pageNumberSize));
    }
  };

  const onClickNext = () => {
    // 이미 로드하였을 경우
    if (apiPage > Math.floor(viewPage / pageSetting.pageNumberSize) + 1) {
      setViewPage((apiPage - 1) * pageSetting.pageNumberSize + 1);
      return;
    }

    // 로드하지 않았을 경우
    switch (sortType) {
      case SortType.ANSWER:
        getAnswerAscQuestionList(apiPage + 1);
        break;
      case SortType.CREATED:
        getCreatedDescQuestionList(apiPage + 1);
        break;
      case SortType.POINT:
        getPointDescQuestionList(apiPage + 1);
        break;
    }
  };

  useEffect(() => {
    switch (sortType) {
      case SortType.ANSWER:
        if (questionList.answer.list.length == 0) {
          getAnswerAscQuestionList(1);
          return;
        }
        setQuestions(questionList.answer.list);
        setApiPage(questionList.answer.apiPage);
        setViewPage(questionList.answer.viewPage);
        setLastApiPage(questionList.answer.lastApiPage);
        setListSize(questionList.answer.list.length);
        break;
      case SortType.CREATED:
        if (questionList.created.list.length == 0) {
          getCreatedDescQuestionList(1);
          return;
        }
        setQuestions(questionList.created.list);
        setApiPage(questionList.created.apiPage);
        setViewPage(questionList.created.viewPage);
        console.log('questionList.created.viewPage', questionList.created.viewPage);
        setLastApiPage(questionList.created.lastApiPage);
        setListSize(questionList.created.list.length);
        break;
      case SortType.POINT:
        if (questionList.point.list.length == 0) {
          getPointDescQuestionList(1);
          return;
        }
        setQuestions(questionList.point.list);
        setApiPage(questionList.point.apiPage);
        setViewPage(questionList.point.viewPage);
        setLastApiPage(questionList.point.lastApiPage);
        setListSize(questionList.point.list.length);
        break;
    }
  }, [sortType]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (homeDevCategoryRef.current && !homeDevCategoryRef.current.contains(e.target)) {
        setOpenHomeDev(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [homeDevCategoryRef]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (homeDesignCategoryRef.current && !homeDesignCategoryRef.current.contains(e.target)) {
        setOpenHomeDesign(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [homeDesignCategoryRef]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThreeRowTemplate
      isLoading={isLoading}
      profileImg={checkSession() ? ProfileDefault : ProfileSignIn}
      windowSize={windowSize}>
      <S.Wrapper>
        <GS.Banner2d>
          <GS.Banner2dImage src={Banner2d} />
        </GS.Banner2d>

        <S.CategoryWrapper>
          <S.Category>
            <S.CategoryText>개발</S.CategoryText>
            <S.ImageBox src={DevelopmentBanner} />
            <S.CategoryItemBox>{developmentCategories}</S.CategoryItemBox>
            <S.Extend>
              <GS.WhiteTooltip ref={homeDevCategoryRef} onClick={() => setOpenHomeDev(!isOpenHomeDev)}>
                <GS.UnderLine>전체보기</GS.UnderLine>
                {isOpenHomeDev && (
                  <GS.WhiteTooltipTopContentWrapper onClick={(e) => e.stopPropagation()}>
                    <GS.WhiteTooltipTopContent>{developmentCategories}</GS.WhiteTooltipTopContent>
                  </GS.WhiteTooltipTopContentWrapper>
                )}
              </GS.WhiteTooltip>
            </S.Extend>
          </S.Category>

          <S.Category>
            <S.CategoryText left={'3px'}>디자인</S.CategoryText>
            <S.ImageBox src={DesignBanner} />
            <S.CategoryItemBox>{designCategories}</S.CategoryItemBox>
            <S.Extend>
              <GS.WhiteTooltip ref={homeDesignCategoryRef} onClick={() => setOpenHomeDesign(!isOpenHomeDesign)}>
                <GS.UnderLine>전체보기</GS.UnderLine>
                {isOpenHomeDesign && (
                  <GS.WhiteTooltipTopContentWrapper onClick={(e) => e.stopPropagation()}>
                    <GS.WhiteTooltipTopContent>{designCategories}</GS.WhiteTooltipTopContent>
                  </GS.WhiteTooltipTopContentWrapper>
                )}
              </GS.WhiteTooltip>
            </S.Extend>
          </S.Category>
        </S.CategoryWrapper>

        <S.Question>
          <S.QuestionHeader>
            <S.QuestionHeaderText>코칭을 기다리는 관심질문</S.QuestionHeaderText>
            <S.QuestionHeaderSort>
              <S.QuestionHeaderSortText
                active={sortType == SortType.CREATED}
                onClick={() => setSortType(SortType.CREATED)}
                ion>
                최신순
              </S.QuestionHeaderSortText>
              <S.QuestionHeaderSortDivider>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </S.QuestionHeaderSortDivider>
              <S.QuestionHeaderSortText
                active={sortType == SortType.ANSWER}
                onClick={() => setSortType(SortType.ANSWER)}>
                코칭적은순
              </S.QuestionHeaderSortText>
              <S.QuestionHeaderSortDivider>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </S.QuestionHeaderSortDivider>
              <S.QuestionHeaderSortText active={sortType == SortType.POINT} onClick={() => setSortType(SortType.POINT)}>
                포인트높은순
              </S.QuestionHeaderSortText>
            </S.QuestionHeaderSort>
          </S.QuestionHeader>
          <GS.Divider width={'2.5px'} />
          {questions.length == 0 && (
            <GS.NoContent fontSize="18px">
              <GS.NoContentImg src={Banner3d} />
              <GS.NoContentText>아직 질문목록이 없어요 ㅜㅜ</GS.NoContentText>
            </GS.NoContent>
          )}
          {questions.map((question, i) => {
            if (i > viewPage * pageSetting.pageNumberSize - 1 || i <= (viewPage - 1) * pageSetting.pageNumberSize - 1) {
              return;
            }

            let contentList = question.content.match('(?<=<p>)(.*?)(?=</p>)');
            let content = '';
            if (contentList.length > 0) {
              content = contentList[0];
              if (content.indexOf('<') != -1) {
                content = content.substring(0, content.indexOf('<'));
              }
            }
            return (
              <GS.QuestionCard key={i}>
                <GS.QuestionCardHeaderWrapper>
                  <GS.CategoryItem
                    size={'36px'}
                    style={{
                      float: 'left',
                    }}
                    src={Java}
                    disableSelect={true}
                  />
                  <GS.QuestionCardPoint>{question.point}P</GS.QuestionCardPoint>
                  <GS.QuestionCardCoachingWrapper>
                    <GS.QuestionCardCoaching hasFire={question.fire != 0}>
                      코칭 {question.coachingCount}
                    </GS.QuestionCardCoaching>

                    <GS.Container style={{ display: 'inline' }}>
                      {new Array(question.fire).fill(0).map((fire, i) => {
                        return <GS.QuestionCardFire key={i} src={Fire}></GS.QuestionCardFire>;
                      })}
                    </GS.Container>
                  </GS.QuestionCardCoachingWrapper>
                </GS.QuestionCardHeaderWrapper>
                <GS.QuestionCardContentWrapper>
                  {question.thumbnail && <GS.QuestionCardImgBox to={ROUTE_QUESTION_VIEW} src={question.thumbnail} />}
                  <GS.QuestionCardTextBox hasImg={question.thumbnail && true}>
                    <GS.QuestionCardTitle to={`${ROUTE_QUESTION_VIEW}/${question.postId}`}>
                      {question.title}
                    </GS.QuestionCardTitle>
                    <GS.QuestionCardContent to={`${ROUTE_QUESTION_VIEW}/${question.postId}`}>
                      {content}
                    </GS.QuestionCardContent>
                    <GS.QuestionCardTime>{question.createdAt.substring(0, 16)}</GS.QuestionCardTime>
                  </GS.QuestionCardTextBox>
                </GS.QuestionCardContentWrapper>
              </GS.QuestionCard>
            );
          })}
        </S.Question>

        <Paging
          currentPage={viewPage}
          lastApiPage={lastApiPage}
          listSize={listSize}
          pageNumberSize={pageSetting.pageNumberSize}
          apiPageSize={pageSetting.apiPageSize}
          onClickPage={onClickPage}
          onClickNext={onClickNext}
          onClickPrev={onClickPrev}
        />
      </S.Wrapper>
    </ThreeRowTemplate>
  );
};

export default Home;
