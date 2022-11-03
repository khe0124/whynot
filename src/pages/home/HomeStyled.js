import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 78px 0 117px 0;
  text-align: center;
`;

export const CategoryWrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 280px;
  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;

export const Category = styled.div`
  display: inline-block;
  width: 30%;
  height: 174px;
  margin: 36px 36px;
  background: #f5f5f5;
  border-radius: 18px;
  box-shadow: 6px 6px 6px -6px rgba(0, 0, 0, 0.1);
`;

export const CategoryText = styled.a`
  position: absolute;
  cursor: auto;
  font-size: 22px;
  font-weight: 400;
  font-family: 'SB Aggro';
  color: #000;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  left: ${(props) => (props.left ? `${props.left}` : `0`)};
  bottom: 6%;
  width: 30%;
  margin-left: 7%;
`;

export const ImageBox = styled.img`
  display: block;
  width: 35%;
  height: 100px;
  top: 15%;
  left: 3.5%;
`;

export const ImageBoxBanner = styled.img``;

export const CategoryItemBox = styled.div`
  position: absolute;
  width: 55%;
  height: 100px;
  right: 2.5%;
  top: 15%;
  padding: 2px;
  overflow: hidden;
`;

export const Extend = styled.a`
  line-height: 48px;
  position: absolute;
  font-size: 12px;
  font-weight: 400;
  text-decoration: underline;
  color: #000;
  right: 5%;
  bottom: 0;
`;

export const Question = styled.div`
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 65%;
  top: 40px;
  padding-bottom: 24px;
  @media only screen and (max-width: 1280px) {
    width: 85%;
    top: 18px;
    padding-bottom: 12px;
  }
`;

export const QuestionHeader = styled.div`
  height: 48px;
  margin: 0 12px;
`;

export const QuestionHeaderText = styled.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  font-weight: 700;
  font-size: 20px;
  @media only screen and (max-width: 750px) {
    font-weight: 400;
    font-family: 'SB Aggro';
  }
`;

export const QuestionHeaderSort = styled.div`
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: 16px;
  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const QuestionHeaderSortText = styled.a`
  ${(props) =>
    props.active
      ? `position: relative;
      opacity: 1;
      font-size: 14.5px;
      &:hover {
        opacity: 0.75;
      }`
      : `
      position: relative;
      opacity: 0.35;
      font-size: 14px;
      &:hover {
        opacity: 0.75;
      }`}
`;

export const QuestionHeaderSortDivider = styled.div`
  display: inline-block;
  position: relative;
  opacity: 0.35;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
