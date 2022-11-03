import React, { useEffect, useState } from 'react';
import * as S from './MyPointStyled';
import * as GS from '~/components/templates/Styled';

import Refund from 'Asset/image/refund.png';

import { Paging } from '~/components/paging/Paging';

export const MyPoint = () => {
  const pointType = {
    EARNING: 0,
    USING: 1,
  };
  const [viwPointType, setViewPointType] = React.useState(pointType.EARNING);
  const [page, setPage] = React.useState(0);
  const [maxPage, setMaxPage] = React.useState(3);
  const [number, setNumber] = React.useState(0);
  const [size, setSize] = React.useState(5);

  const arrPointHistory = [
    { id: 10, type: '질문채택', point: 200, time: '1초 전' },
    { id: 9, type: '질문채택', point: 200, time: '1분 전' },
    { id: 8, type: '질문채택', point: 200, time: '2분 전' },
    { id: 7, type: '질문채택', point: 200, time: '3분 전' },
    { id: 6, type: '질문채택', point: 200, time: '4분 전' },
    { id: 5, type: '질문채택', point: 200, time: '7분 전' },
    { id: 4, type: '질문채택', point: 200, time: '1시간 전' },
    { id: 3, type: '질문채택', point: 200, time: '2시간 전' },
    { id: 2, type: '질문채택', point: 200, time: '5일 전' },
    { id: 1, type: '질문채택', point: 200, time: '3주 전' },
  ];

  return (
    <S.Wrapper>
      <S.TitleText>나의 포인트</S.TitleText>

      <GS.Divider width={'2px'} style={{ margin: '12px 0 ' }} />

      <S.PointWrapper>
        <GS.FL>
          <S.PointText>200P</S.PointText>
        </GS.FL>
        <GS.FR>
          <S.ImageBtn src={Refund} onClick={() => alert('아직')}>
            환급하기
          </S.ImageBtn>
        </GS.FR>
      </S.PointWrapper>

      <S.PointInfoText>*포인트 이용 주의사항</S.PointInfoText>

      <GS.Divider width={'2px'} style={{ margin: '12px 0 ' }} />

      <S.PointTableHeaderWrapper>
        <S.PointTableHeaderText
          active={viwPointType == pointType.EARNING}
          onClick={() => setViewPointType(pointType.EARNING)}>
          적립내역
        </S.PointTableHeaderText>
        <S.PointTableHeaderDivider>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </S.PointTableHeaderDivider>
        <S.PointTableHeaderText
          active={viwPointType == pointType.USING}
          onClick={() => setViewPointType(pointType.USING)}
          ion>
          사용내역
        </S.PointTableHeaderText>
      </S.PointTableHeaderWrapper>

      <S.PointTable>
        <S.PointTableRow column>
          <S.Id>번호</S.Id>
          <S.Type>유형</S.Type>
          <S.Point>포인트</S.Point>
          <S.Time>시간</S.Time>
        </S.PointTableRow>
        {arrPointHistory.map((pointHistory, i) => {
          return (
            <S.PointTableRow key={i} last={i == arrPointHistory.length - 1}>
              <S.Id>{pointHistory.id}</S.Id>
              <S.Type>{pointHistory.type}</S.Type>
              <S.Point>{pointHistory.point > 0 ? `+${pointHistory.point}P` : `-${pointHistory.point}P`}</S.Point>
              <S.Time>{pointHistory.time}</S.Time>
            </S.PointTableRow>
          );
        })}
      </S.PointTable>

      <S.Container>
        <Paging
          page={page}
          setPage={setPage}
          maxPage={maxPage}
          setMaxPage={setMaxPage}
          size={size}
          number={number}
          setNumber={setNumber}
        />
      </S.Container>
    </S.Wrapper>
  );
};
