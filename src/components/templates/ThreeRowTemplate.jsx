import React, { useState } from 'react';
import { Header } from '~/components/header/Header';
import { Footer } from '~/components/footer/Footer';
import { Floating } from '~/components/floating/Floating';
import LoadingGIF from 'Asset/image/loading.gif';

import * as S from './Styled';

export const ThreeRowTemplate = ({
  children,
  isLoading = false,
  errors,
  hasFloating = true,
  profileImg,
  hasHeaderUnderline = false,
  pageContent,
  setPageContent,
}) => {
  const [isVisibleFloating, setVisibleFloating] = React.useState(true);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Container style={{ minHeight: '100vh' }}>
      <Header
        profileImg={profileImg}
        hasHeaderUnderline={hasHeaderUnderline}
        pageContent={pageContent}
        setPageContent={setPageContent}
        setVisibleFloating={setVisibleFloating}
      />
      {children}
      <Footer />
      {hasFloating && <Floating isVisible={isVisibleFloating} />}
    </S.Container>
  );
};

export const Loading = () => {
  return (
    <S.LoadingWrapper>
      <S.LoadingImg src={LoadingGIF}></S.LoadingImg>
    </S.LoadingWrapper>
  );
};
