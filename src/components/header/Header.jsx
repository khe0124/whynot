import React, { useRef, useEffect } from 'react';
import * as S from './HeaderStyled';
import * as GS from '../templates/Styled';
import { Link } from 'react-router-dom';
import {
  ROUTE_MY_POINT,
  ROUTE_MY_UPLOADED_QUESTION,
  ROUTE_MY_ANSWERED_QUESTION,
  ROUTE_MY_PAGE,
  ROUTE_SIGN_IN,
} from '~/router';
import ArrowBottom from 'Asset/image/arrow_bottom.png';
import ArrowTop from 'Asset/image/arrow_top.png';
import Alarm from 'Asset/image/alarm.png';
import Search from 'Asset/image/search.png';
import Logo from 'Asset/image/logo.png';
import Java from 'Asset/image/category_java.png';
import Js from 'Asset/image/category_js.png';
import InDesign from 'Asset/image/category_indesign.png';
import PhotoShop from 'Asset/image/category_photoshop.png';
import MenuMobile from 'Asset/image/menu_mobile.svg';
import MyPageContent from '~/model/constants/MyPageContent';

import DeviceWidth from '~/model/constants/DeviceWidth';
import { checkSession } from '~/network/BaseService';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

export const Header = ({ profileImg, hasHeaderUnderline, pageContent, setPageContent, setVisibleFloating }) => {
  const windowSize = useSelector((state) => state.window.windowSize);
  const navRef = useRef();
  const navigate = useNavigate();

  const [isOpenHeaderDev, setOpenHeaderDev] = React.useState(false);
  const [isOpenHeaderDesign, setOpenHeaderDesign] = React.useState(false);
  const [isOpenAlarm, setOpenAlarm] = React.useState(false);
  const [isNewAlarm, setNewAlarm] = React.useState(true);
  const [isSideNavOpen, setSideNavOpen] = React.useState(false);

  const headerDevCategoryRef = useRef(null);
  const headerDesignCategoryRef = useRef(null);
  const headerAlarmRef = useRef(null);

  var arrCategoryItem = new Array(24).fill(0);
  var arrAlarm = [
    { title: '내 질문에 코칭이 달렸습니다.', time: '22.02.25', category: PhotoShop },
    { title: '내 코칭이 열람되었습니다.', time: '22.02.20', category: InDesign },
    { title: '코칭을 채택해주세요.', time: '22.02.15', category: Js },
  ];

  const useOutside = (ref) => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        switch (ref) {
          case navRef:
            if (isSideNavOpen) {
              setSideNavOpen(false);
            }
            break;
          case headerDevCategoryRef:
            if (isOpenHeaderDev) {
              setOpenHeaderDev(false);
            }
            break;
          case headerDesignCategoryRef:
            if (isOpenHeaderDesign) {
              setOpenHeaderDesign(false);
            }
            break;
          case headerAlarmRef:
            if (isOpenAlarm) {
              setOpenAlarm(false);
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

  useEffect(() => {
    setVisibleFloating(!isSideNavOpen);
  }, [isSideNavOpen]);

  useOutside(navRef);
  useOutside(headerDevCategoryRef);
  useOutside(headerDesignCategoryRef);
  useOutside(headerAlarmRef);

  return (
    <S.Wrapper hasHeaderUnderline={hasHeaderUnderline}>
      <GS.Row>
        <GS.Imx>
          <S.Logo
            to="/"
            onClick={() => {
              if (String(window.location.pathname) == '/') {
                window.location.href = '/';
              }
            }}
            src={Logo}
          />
          <GS.Clear>
            <S.MenuBox>
              <GS.WhiteTooltip ref={headerDevCategoryRef} onClick={() => setOpenHeaderDev(!isOpenHeaderDev)}>
                개발
                <S.Arrow src={isOpenHeaderDev ? ArrowTop : ArrowBottom}></S.Arrow>
                {isOpenHeaderDev && (
                  <GS.WhiteTooltipContentWrapper onClick={(e) => e.stopPropagation()}>
                    <GS.WhiteTooltipContent>
                      {arrCategoryItem.map((categoryItem, i) => {
                        var src = Java;
                        if (i % 2 == 0) {
                          src = Js;
                        }
                        return (
                          <GS.CategoryItem
                            style={{
                              float: 'left',
                              margin: '2px',
                            }}
                            key={i}
                            src={src}
                          />
                        );
                      })}
                    </GS.WhiteTooltipContent>
                  </GS.WhiteTooltipContentWrapper>
                )}
              </GS.WhiteTooltip>

              <GS.WhiteTooltip ref={headerDesignCategoryRef} onClick={() => setOpenHeaderDesign(!isOpenHeaderDesign)}>
                디자인
                <S.Arrow src={isOpenHeaderDesign ? ArrowTop : ArrowBottom}></S.Arrow>
                {isOpenHeaderDesign && (
                  <GS.WhiteTooltipContentWrapper onClick={(e) => e.stopPropagation()}>
                    <GS.WhiteTooltipContent>
                      {arrCategoryItem.map((categoryItem, i) => {
                        var src = PhotoShop;
                        if (i % 2 == 0) {
                          src = InDesign;
                        }
                        return (
                          <GS.CategoryItem
                            style={{
                              float: 'left',
                              margin: '2px',
                            }}
                            key={i}
                            src={src}
                          />
                        );
                      })}
                    </GS.WhiteTooltipContent>
                  </GS.WhiteTooltipContentWrapper>
                )}
              </GS.WhiteTooltip>
            </S.MenuBox>

            <S.SearchBox>
              <S.SearchInput />
              <S.SearchIcon>
                <S.SearchIconImg src={Search} />
              </S.SearchIcon>
            </S.SearchBox>

            <S.UserBox>
              {windowSize.width > DeviceWidth.TABLET ? (
                <GS.Container>
                  <Link
                    style={{ marginRight: '36px' }}
                    to={ROUTE_MY_POINT}
                    onClick={() => {
                      if (String(window.location.pathname) == ROUTE_MY_POINT) {
                        window.location.href = ROUTE_MY_POINT;
                      }

                      if (String(window.location.pathname).includes(ROUTE_MY_PAGE)) {
                        setPageContent(MyPageContent.MY_POINT);
                      }
                      window.scrollTo(0, 0);
                    }}>
                    <S.Point>{!checkSession() ? `0 P` : `500 P`}</S.Point>
                  </Link>

                  <GS.WhiteTooltip
                    ref={headerAlarmRef}
                    onClick={() => {
                      if (!checkSession()) {
                        return;
                      }
                      setNewAlarm(false);
                      setOpenAlarm(!isOpenAlarm);
                    }}>
                    <S.UserBoxImg src={Alarm} />
                    {isNewAlarm && checkSession() && <S.AlarmNew />}
                    {isOpenAlarm && (
                      <GS.WhiteTooltipContentWrapper
                        isAlarm={true}
                        onClick={(e) => e.stopPropagation()}
                        style={{ width: '280px', marginLeft: '-140px' }}>
                        <GS.WhiteTooltipContent>
                          {arrAlarm.map((alarm, i) => {
                            return (
                              <S.AlarmCard key={i}>
                                <S.AlarmCardTextBox>
                                  <S.AlarmTitle>{alarm.title}</S.AlarmTitle>
                                  <S.AlarmTime>{alarm.time}</S.AlarmTime>
                                </S.AlarmCardTextBox>
                                <S.AlarmCardImgBox>
                                  <GS.CategoryItemSmall src={alarm.category} />
                                </S.AlarmCardImgBox>
                              </S.AlarmCard>
                            );
                          })}
                        </GS.WhiteTooltipContent>
                      </GS.WhiteTooltipContentWrapper>
                    )}
                  </GS.WhiteTooltip>

                  <Link
                    style={{ marginLeft: '32px' }}
                    to={!checkSession() ? ROUTE_SIGN_IN : ROUTE_MY_UPLOADED_QUESTION}
                    onClick={() => {
                      if (String(window.location.pathname) == ROUTE_MY_UPLOADED_QUESTION) {
                        window.location.href = ROUTE_MY_UPLOADED_QUESTION;
                      }
                      if (String(window.location.pathname).includes(ROUTE_MY_PAGE)) {
                        setPageContent(MyPageContent.MY_UPLOADED_QUESTION);
                      }
                      window.scrollTo(0, 0);
                    }}>
                    <S.UserBoxImg src={profileImg} />
                  </Link>
                </GS.Container>
              ) : (
                <GS.Container ref={navRef} style={{ display: 'inline-block' }}>
                  <S.UserBoxImg
                    src={MenuMobile}
                    onClick={() => {
                      setSideNavOpen(!isSideNavOpen);
                    }}
                  />
                  <S.SideNav open={isSideNavOpen}>
                    <S.SideNavLogo src={Logo} />
                    <Link to={ROUTE_MY_POINT}>
                      <S.SideNavMenuItem
                        onClick={() => {
                          if (String(window.location.pathname) == ROUTE_MY_POINT) {
                            window.location.href = ROUTE_MY_POINT;
                          }

                          if (String(window.location.pathname).includes(ROUTE_MY_PAGE)) {
                            setPageContent(MyPageContent.MY_POINT);
                          }
                          setSideNavOpen(false);
                          window.scrollTo(0, 0);
                        }}>
                        나의 포인트
                      </S.SideNavMenuItem>
                    </Link>

                    <Link to={ROUTE_MY_UPLOADED_QUESTION}>
                      <S.SideNavMenuItem
                        onClick={() => {
                          if (String(window.location.pathname) == ROUTE_MY_UPLOADED_QUESTION) {
                            window.location.href = ROUTE_MY_UPLOADED_QUESTION;
                          }
                          if (String(window.location.pathname).includes(ROUTE_MY_PAGE)) {
                            setPageContent(MyPageContent.MY_UPLOADED_QUESTION);
                          }
                          setSideNavOpen(false);
                          window.scrollTo(0, 0);
                        }}>
                        내가 올린 질문
                      </S.SideNavMenuItem>
                    </Link>

                    <Link to={ROUTE_MY_ANSWERED_QUESTION}>
                      <S.SideNavMenuItem
                        onClick={() => {
                          if (String(window.location.pathname) == ROUTE_MY_ANSWERED_QUESTION) {
                            window.location.href = ROUTE_MY_ANSWERED_QUESTION;
                          }
                          if (String(window.location.pathname).includes(ROUTE_MY_PAGE)) {
                            setPageContent(MyPageContent.MY_ANSWERED_QUESTION);
                          }
                          setSideNavOpen(false);
                          window.scrollTo(0, 0);
                        }}>
                        내가 답한 질문
                      </S.SideNavMenuItem>
                    </Link>
                  </S.SideNav>
                </GS.Container>
              )}
            </S.UserBox>
          </GS.Clear>
        </GS.Imx>
      </GS.Row>

      {isSideNavOpen && <GS.BackgroundShadow />}
    </S.Wrapper>
  );
};
