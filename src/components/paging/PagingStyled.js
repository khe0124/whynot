import styled from 'styled-components';

export const Container = styled.div``;

export const Paging = styled.div`
  color: #000;
  margin: 48px 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const PagingNumber = styled.a`
  display: inline-block;
  width: 36px;
  height: 36px;
  left: 6.5px;
  top: 0;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  ${(props) =>
    props.active &&
    `color: #fff;
  background-color: #000;
  border-radius: 10px;`}

  div {
    top: 50%;
    transform: translateY(-50%);
  }

  @media only screen and (max-width: 750px) {
    width: 30px;
    height: 30px;
    font-size: 11px;
    font-weight: 400;
    font-family: 'SB Aggro';
  }
`;

export const PagingBtn = styled.a`
  ${(props) => props.disable && `visibility: hidden;`}
  width: 48px;
  font-size: 12px;
  font-weight: 400;
  opacity: 0.85;
  top: 10px;
  margin: 0px 24px;

  @media only screen and (max-width: 750px) {
    width: 32px;
    font-size: 10px;
    top: 8px;
    font-weight: 400;
    font-family: 'SB Aggro';
    margin: 0px 10px;
  }
`;
