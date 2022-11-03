import React, { useEffect, useState } from 'react';
import * as S from './PagingStyled';

export const Paging = ({
  listSize,
  apiPageSize,
  lastApiPage,
  currentPage,
  pageNumberSize,
  onClickPage,
  onClickNext,
  onClickPrev,
}) => {
  let pageNumbers = [];
  // console.log('lastApiPage', lastApiPage);
  // console.log('listSize', listSize);
  // console.log('pageNumberSize', pageNumberSize);
  // console.log('currentPage', currentPage);
  // console.log(
  //   Math.floor((currentPage - 1) / pageNumberSize) * pageNumberSize + pageNumberSize >= lastApiPage * pageNumberSize,
  // );

  if (listSize > 0) {
    for (let i = 0; i < pageNumberSize; i++) {
      let pageNumber = Math.floor((currentPage - 1) / pageNumberSize) * pageNumberSize + i + 1;

      if (Math.floor(listSize / pageNumberSize) + 1 >= pageNumber) {
        pageNumbers.push(pageNumber);
      }
    }

    if (listSize % pageNumberSize == 0 && listSize % apiPageSize != 0) {
      pageNumbers.pop();
    }
  }

  return (
    <S.Paging>
      <S.PagingBtn disable={currentPage <= pageNumberSize || listSize == 0} onClick={onClickPrev} left>
        &#60;&nbsp;&nbsp;이전
      </S.PagingBtn>
      {pageNumbers.map((number, i) => (
        <S.Container key={number} style={{ display: 'inline' }}>
          <S.PagingNumber active={currentPage == number}>
            <S.Container onClick={() => onClickPage(number)}>{number}</S.Container>
          </S.PagingNumber>
          &nbsp;&nbsp;
        </S.Container>
      ))}
      <S.PagingBtn
        disable={
          listSize == 0 ||
          Math.floor((currentPage - 1) / pageNumberSize) * pageNumberSize + pageNumberSize >=
            lastApiPage * pageNumberSize
        }
        onClick={onClickNext}>
        다음&nbsp;&nbsp;&#62;
      </S.PagingBtn>
    </S.Paging>
  );
};
