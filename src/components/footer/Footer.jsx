import React, { useEffect } from 'react';
import * as S from './FooterStyled';

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.Footer>
        <S.FooterItem>주소 : 서울특별시 우리집</S.FooterItem>
        <S.FooterItem>상호 : 웨안되</S.FooterItem>
        <S.FooterItem>사업자등록번호 : 146-86-00182</S.FooterItem>
        <S.FooterBtn>개인정보처리방침</S.FooterBtn>
        <S.FooterBtn>이용약관</S.FooterBtn>
        <br />
        <br />
        Copyright Whynot Co., Ltd
      </S.Footer>
    </S.Wrapper>
  );
};
