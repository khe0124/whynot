import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Wrapper = styled.div`
  padding: 68px 24px 0px 24px;
  text-align: start;
  height: 100%;

  @media only screen and (max-width: 750px) {
    padding: 36px 24px 0px 24px;
  }
`;

export const TitleText = styled.div`
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  left: 18px;
  color: #000;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  @media only screen and (max-width: 750px) {
    font-family: 'SB Aggro';
    font-weight: 400;
  }
`;
