import React, { useEffect, useState } from 'react';
import * as S from './SideBarStyled';

import MyPageContent from '~/model/constants/MyPageContent';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { ROUTE_MY_POINT, ROUTE_MY_UPLOADED_QUESTION, ROUTE_MY_ANSWERED_QUESTION } from '~/router';
import { AuthService } from '~/network/service/AuthService';
import HttpStatus from '~/model/constants/HttpStatus';
import { deleteSession } from '~/network/BaseService';

export const SideBar = ({ pageContent, setPageContent }) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <S.MenuTitleLink
          to={ROUTE_MY_POINT}
          onClick={() => {
            window.scrollTo(0, 0);
            setPageContent(MyPageContent.MY_POINT);
          }}>
          <S.MenuTitleText active={pageContent == MyPageContent.MY_POINT}>나의 포인트</S.MenuTitleText>
        </S.MenuTitleLink>
      </S.MenuWrapper>

      <S.MenuWrapper>
        <S.MenuTitleLink
          to={ROUTE_MY_UPLOADED_QUESTION}
          onClick={() => {
            window.scrollTo(0, 0);
            setPageContent(MyPageContent.MY_UPLOADED_QUESTION);
          }}>
          <S.MenuTitleText
            active={
              pageContent == MyPageContent.MY_UPLOADED_QUESTION || pageContent == MyPageContent.MY_ANSWERED_QUESTION
            }>
            나의 웨안되
          </S.MenuTitleText>
        </S.MenuTitleLink>
        <br />
        <S.MenuItemLink
          to={ROUTE_MY_UPLOADED_QUESTION}
          onClick={() => {
            window.scrollTo(0, 0);
            setPageContent(MyPageContent.MY_UPLOADED_QUESTION);
          }}>
          <S.MenuItemText active={pageContent == MyPageContent.MY_UPLOADED_QUESTION}>내가 올린 질문</S.MenuItemText>
        </S.MenuItemLink>
        <br />
        <S.MenuItemLink
          to={ROUTE_MY_ANSWERED_QUESTION}
          onClick={() => {
            window.scrollTo(0, 0);
            setPageContent(MyPageContent.MY_ANSWERED_QUESTION);
          }}>
          <S.MenuItemText active={pageContent == MyPageContent.MY_ANSWERED_QUESTION}>내가 답한 질문</S.MenuItemText>
        </S.MenuItemLink>
      </S.MenuWrapper>

      <S.MenuWrapper>
        <S.MenuTitle
          onClick={() => {
            alert('아직');
            window.scrollTo(0, 0);
            //setPageContent(MyPageContent.MY_INFO);
          }}>
          <S.MenuTitleText active={pageContent == MyPageContent.MY_INFO}>나의 정보</S.MenuTitleText>
        </S.MenuTitle>
      </S.MenuWrapper>

      <S.MenuWrapper>
        <S.MenuTitle
          onClick={() => {
            alert('아직');
            window.scrollTo(0, 0);
            //setPageContent(MyPageContent.FAQ);
          }}>
          <S.MenuTitleText active={pageContent == MyPageContent.FAQ}> 문의</S.MenuTitleText>
        </S.MenuTitle>
        <br />
        <S.MenuItem
          onClick={() => {
            alert('아직');
            window.scrollTo(0, 0);
            //setPageContent(MyPageContent.FAQ);
          }}>
          <S.MenuItemText active={pageContent == MyPageContent.FAQ}>FAQ</S.MenuItemText>
        </S.MenuItem>
        <br />
        <S.MenuItem
          onClick={() => {
            alert('아직');
            window.scrollTo(0, 0);
            //setPageContent(MyPageContent.INQUIRY);
          }}>
          <S.MenuItemText active={pageContent == MyPageContent.INQUIRY}>1:1 문의</S.MenuItemText>
        </S.MenuItem>
      </S.MenuWrapper>

      <S.MenuWrapper last>
        <S.MenuTitle>
          <S.MenuTitleText active={pageContent == MyPageContent.SIGN_OUT} noCursor>
            기타
          </S.MenuTitleText>
        </S.MenuTitle>
        <br />
        <S.MenuItem
          onClick={async () => {
            if (confirm('정말 로그아웃 하시겠습니까?')) {
              const res = await AuthService.signOut();
              if (!res) {
                alert('결과를 받아오지 못했습니다.');
                return;
              }

              if (res.status == HttpStatus.OK || res.status == HttpStatus.METHOD_NOT_ALLOWED) {
                deleteSession();
                navigate('/', { replace: true });
              } else {
                alert('로그아웃에 실패하였습니다.');
              }
            }
          }}>
          <S.MenuItemText active={false}>로그아웃</S.MenuItemText>
        </S.MenuItem>
      </S.MenuWrapper>
    </S.Wrapper>
  );
};
