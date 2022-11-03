import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Wrapper = styled.div`
  padding: 68px 24px 0px 24px;
  text-align: start;
  height: 100%;
  color: #a0a0a0;

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
    font-weight: 400;
    font-family: 'SB Aggro';
  }
`;

export const PointWrapper = styled.div`
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  width: 100%;
  padding: 52px 0;
  color: #000;
  @media only screen and (max-width: 750px) {
    padding: 28px 0;
  }
`;

export const PointText = styled.div`
  display: inline-block;
  font-size: 51px;
  font-weight: 400;
  left: 18px;
  top: 2px;
  color: #ed3f3e;
  font-family: 'SB Aggro';
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  @media only screen and (max-width: 750px) {
    font-size: 38px;
    top: 6px;
    font-family: 'SB Aggro';
  }
`;

export const ImageBtn = styled.a`
  display: inline-block;
  width: 128px;
  height: 56px;
  border: 1px solid #000;
  padding-left: 50px;
  line-height: 56px;
  font-size: 16px;
  background: url(${(props) => props.src}) 10px center no-repeat;
  background-size: 32px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  @media only screen and (max-width: 750px) {
    font-weight: 400;
    font-family: 'SB Aggro';
    padding-left: 48px;
  }
`;

export const PointInfoText = styled.div`
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 56px;
  left: 18px;
  color: #a0a0a0;
  @media only screen and (max-width: 750px) {
    margin-bottom: 28px;

    font-weight: 400;
    font-family: 'SB Aggro';
  }
`;

export const PointTableHeaderWrapper = styled.div`
  height: 48px;
  margin: 0 12px;
  padding: 24px 0 20px 0;
  font-size: 18px;
  font-weight: 700;
  color: #a0a0a0;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const PointTableHeaderText = styled.a`
  ${(props) => (props.active ? `color: #000; font-size: 14.5px;` : `font-size: 14px;`)}
  &:hover {
    color: #434343;
  }
  @media only screen and (max-width: 750px) {
    font-weight: 400;
    font-family: 'SB Aggro';
  }
`;

export const PointTableHeaderDivider = styled.div`
  display: inline-block;
  opacity: 0.35;
  font-size: 14px;
`;

export const PointTable = styled.div`
  width: 100%;
  top: 16px;
  color: #000;
`;

export const PointTableRow = styled.div`
  display: flex;
  height: 56px;
  border-top: 1px solid #000;
  ${(props) => props.last && `border-bottom: 1px solid #000;`}
  ${(props) =>
    props.column &&
    `* {
    @media only screen and (max-width: 750px) {
      font-weight: 400;
      font-family: 'SB Aggro';
    }
  }`}
`;

export const Id = styled.div`
  flex: 1;
  line-height: 56px;
  text-align: center;
  font-size: 12px;
`;

export const Type = styled.div`
  flex: 3;
  line-height: 56px;
  text-align: center;
  font-size: 12px;
`;

export const Point = styled.div`
  flex: 5;
  line-height: 56px;
  text-align: center;
  font-size: 12px;
`;

export const Time = styled.div`
  flex: 1;
  line-height: 56px;
  text-align: center;
  font-size: 12px;
`;
