import React, { useEffect, useState } from 'react';
import * as S from './MyPageStyled';
import * as GS from '~/components/templates/Styled';

import { ThreeRowTemplate } from '~/components/templates/ThreeRowTemplate';
import { SideBar } from './components/sideBar/SideBar';

import MyPageContent from '~/model/constants/MyPageContent';

import ProfileDefault from 'Asset/image/profile_default.png';

import { useNavigate } from 'react-router';
import { MyPoint } from './components/myPoint/MyPoint';
import { MyQuestion } from './components/myQuestion/MyQuestion';
import { checkSession } from '~/network/BaseService';

import { ROUTE_MY_PAGE, ROUTE_MY_POINT, ROUTE_MY_UPLOADED_QUESTION, ROUTE_MY_ANSWERED_QUESTION } from '~/router';

export const MyPage = ({ windowSize }) => {
  const [pageContent, setPageContent] = React.useState(MyPageContent.MY_POINT);
  const [isLoading, setLoading] = React.useState(false);
  const [initDelay, setInitDelay] = React.useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!checkSession()) {
      navigate('/', { replace: true });
    }

    window.scrollTo(0, 0);

    if (String(window.location.pathname) == ROUTE_MY_PAGE) {
      window.location.href = ROUTE_MY_POINT;
    }

    switch (String(window.location.pathname)) {
      case ROUTE_MY_PAGE:
        setPageContent(MyPageContent.MY_POINT);
        break;
      case ROUTE_MY_UPLOADED_QUESTION:
        setPageContent(MyPageContent.MY_UPLOADED_QUESTION);
        break;
      case ROUTE_MY_ANSWERED_QUESTION:
        setPageContent(MyPageContent.MY_ANSWERED_QUESTION);
        break;
      case ROUTE_MY_POINT:
        setPageContent(MyPageContent.MY_POINT);
        break;
    }

    // 처음에 MyPoint 같이 겹쳐서 뜨는거 안보여줄려고 최초 로딩시에 약간의 지연 추가
    setTimeout(() => {
      setInitDelay(false);
    }, 10);
  }, []);

  return (
    <ThreeRowTemplate
      profileImg={ProfileDefault}
      hasFloating={false}
      isLoading={isLoading}
      hasHeaderUnderline={true}
      pageContent={pageContent}
      setPageContent={setPageContent}
      windowSize={windowSize}>
      {initDelay ? (
        <GS.Container />
      ) : (
        <S.Wrapper>
          <S.MenuWrapper>
            <SideBar pageContent={pageContent} setPageContent={setPageContent} />
          </S.MenuWrapper>
          <S.ContentWrapper>
            {pageContent == MyPageContent.MY_POINT && <MyPoint />}
            {(pageContent == MyPageContent.MY_UPLOADED_QUESTION ||
              pageContent == MyPageContent.MY_ANSWERED_QUESTION) && <MyQuestion pageContent={pageContent} />}
          </S.ContentWrapper>
        </S.Wrapper>
      )}
    </ThreeRowTemplate>
  );
};
