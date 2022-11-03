import React, { useEffect, useState } from 'react';
import * as S from './MyQuestionStyled';
import * as GS from '~/components/templates/Styled';

import MyPageContent from '~/model/constants/MyPageContent';

import Banner3d from 'Asset/image/banner/banner3d.png';
import PhotoShop from 'Asset/image/category_photoshop.png';
import InDesign from 'Asset/image/category_indesign.png';

import { Paging } from '~/components/paging/Paging';
import { ROUTE_QUESTION_VIEW } from '~/router';

export const MyQuestion = ({ pageContent, setPageContent }) => {
  const [page, setPage] = React.useState(0);
  const [maxPage, setMaxPage] = React.useState(0);
  const [number, setNumber] = React.useState(0);
  const [size, setSize] = React.useState(5);
  const [questionType, setQuestionType] = React.useState(5);
  const [myUploadedQuestionList, setMyUploadedQuestionList] = React.useState([]);
  const [myAnsweredQuestionList, setMyAnsweredQuestionList] = React.useState([]);

  const arrQuestion = [
    {
      title: '질문제목 질문제목 질문제목 질문제목 질문제목',
      content: '질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용',
      point: 200,
      time: '2시간 전',
      coachingCount: 0,
      thumbnail: Banner3d,
      fire: 0,
    },
    {
      title: '질문제목 질문제목 질문제목 질문제목 질문제목',
      content: '질문내용 질문내용 질문내용 질문내용 질문내용 ',
      point: 50,
      time: '1일 전',
      coachingCount: 5,
      fire: 5,
    },
    {
      title:
        '질문제목 질문제목 질문제목 질문제목 질문제목 질문제목 질문제목 질문제목 질문제목 질문제목 질문제목 질문제목 질문제목 질문제목 질문제목',
      content:
        '질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용',
      point: 400,
      time: '3주 전',
      coachingCount: 18,
      thumbnail: Banner3d,
      fire: 10,
    },
    {
      title: '질문제목 질문제목 질문제목 질문제목 질문제목',
      content:
        '질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용',
      point: 300,
      time: '5주 전',
      coachingCount: 5,
      thumbnail: Banner3d,
      fire: 10,
    },
    {
      title: '질문제목 질문제목 질문제목 질문제목 질문제목',
      content:
        '질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용 질문내용',
      point: 1000,
      time: '1년 전',
      coachingCount: 5,
      thumbnail: Banner3d,
      fire: 10,
    },
  ];

  let selectedQuestionList;
  let noContentText = '';

  switch (pageContent) {
    case MyPageContent.MY_UPLOADED_QUESTION:
      selectedQuestionList = myUploadedQuestionList;
      noContentText = '아직 올린 질문이 없어요 ㅜㅜ';
      break;
    case MyPageContent.MY_ANSWERED_QUESTION:
      selectedQuestionList = myAnsweredQuestionList;
      noContentText = '아직 답한 질문이 없어요 ㅜㅜ';
      break;
  }

  return (
    <S.Wrapper>
      <S.TitleText>
        {pageContent == MyPageContent.MY_UPLOADED_QUESTION ? '내가 올린 질문' : '내가 답한 질문'}
      </S.TitleText>

      <GS.Divider width={'2px'} style={{ marginTop: '12px' }} />
      {selectedQuestionList.length == 0 && (
        <GS.NoContent>
          <GS.NoContentImg src={Banner3d} />
          <GS.NoContentText>{noContentText}</GS.NoContentText>
        </GS.NoContent>
      )}
      {selectedQuestionList.map((question, i) => (
        <GS.QuestionCard key={i}>
          <GS.QuestionCardHeaderWrapper>
            <GS.CategoryItem
              size={'36px'}
              style={{
                float: 'left',
              }}
              src={pageContent == MyPageContent.MY_UPLOADED_QUESTION ? PhotoShop : InDesign}
              disableSelect={true}
            />
            <GS.QuestionCardPoint>{question.point}P</GS.QuestionCardPoint>
            <GS.QuestionCardCoachingWrapper>
              <GS.QuestionCardCoaching hasFire={false}>코칭 {question.coachingCount}</GS.QuestionCardCoaching>
              {/* {new Array(question.fire).fill(0).map((fire, i) => {
                return <S.QuestionCardFire key={i} src={Fire}></S.QuestionCardFire>;
              })} */}
            </GS.QuestionCardCoachingWrapper>
          </GS.QuestionCardHeaderWrapper>
          <GS.QuestionCardContentWrapper>
            {question.thumbnail && <GS.QuestionCardImgBox to={ROUTE_QUESTION_VIEW} src={question.thumbnail} />}
            <GS.QuestionCardTextBox hasImg={question.thumbnail && true}>
              <GS.QuestionCardTitle to={ROUTE_QUESTION_VIEW}>{question.title}</GS.QuestionCardTitle>
              <GS.QuestionCardContent to={ROUTE_QUESTION_VIEW}>{question.content}</GS.QuestionCardContent>
              <GS.QuestionCardTime>{question.time}</GS.QuestionCardTime>
            </GS.QuestionCardTextBox>
          </GS.QuestionCardContentWrapper>
        </GS.QuestionCard>
      ))}

      <S.Container>
        <Paging
          size={size}
          page={page}
          listSize={selectedQuestionList.length}
          setPage={setPage}
          maxPage={maxPage}
          setMaxPage={setMaxPage}
          number={number}
          setNumber={setNumber}
        />
      </S.Container>
    </S.Wrapper>
  );
};
