import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 78px 0 240px 0;
  text-align: center;
  height: 100%;

  @media only screen and (max-width: 750px) {
    padding: 78px 0 140px 0;
  }
`;

export const Question = styled.div`
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  margin-top: 42px;
  width: 65%;

  @media only screen and (max-width: 1280px) {
    margin-top: 22px;
    width: 85%;
  }
`;

export const QuestionHeader = styled.div`
  height: 56px;
  margin: 12px 0 12px 12px;
  * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media only screen and (max-width: 750px) {
    height: 36px;
  }
`;

export const QuestionHeaderText = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 700;
  font-size: 24px;
`;

export const FilterWrapper = styled.div`
  margin: 20px 0;
  height: 56px;
  line-height: 56px;

  @media only screen and (max-width: 1280px) {
    height: 36px;
    line-height: 36px;
  }
`;

export const FilterSelect = styled.select`
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: ${(props) => props.width};
  height: 56px;
  border: 1px solid #000;
  padding-left: ${(props) => (props.hasImg ? `60px` : `24px`)};
  font-size: 18px;
  background: url(${(props) => props.src}) calc(100% - 8px) center no-repeat;
  background-size: 32px;

  @media only screen and (max-width: 1280px) {
    width: 100%;
    height: 36px;
    font-size: 16px;
    padding-left: 24px;
    padding-top: 2px;
  }
`;

export const FilterCategoryImg = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);

  @media only screen and (max-width: 1280px) {
    width: 24px;
    height: 24px;
    display: none;
  }
`;

export const FilterCategoryOption = styled.option``;

export const CategoryItem = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fefefe;
  border-radius: 12px;
  box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.25);
  background-image: url(${(props) => props.src});
  background-size: 18px 18px;
  background-repeat: no-repeat;
  background-position: center center;

  ${(props) =>
    props.disableSelect &&
    `-ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: auto;`}

  @media only screen and (max-width: 1280px) {
    width: 24px;
    height: 24px;
    border-radius: 8px;
  }
`;

export const TitleWrapper = styled.div`
  margin: 24px 0;
  height: 56px;
  line-height: 56px;
  @media only screen and (max-width: 1280px) {
    top: 8px;
  }
`;

export const TitleInput = styled.input`
  position: fixed;
  padding: 0 18px;
  width: 100%;
  height: 56px;
  font-size: 18px;
  border: 0.1px solid #bebebe;
  background-color: #f6f6f8;
  @media only screen and (max-width: 1280px) {
    font-size: 16px;
  }
`;

export const ImageBtn = styled.a`
  display: inline-block;
  width: 128px;
  height: 56px;
  border: 1px solid #000;
  padding-left: 38px;
  font-size: 16px;
  background: url(${(props) => props.src}) 16px center no-repeat;
  background-size: 32px;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const EditToolWrapper = styled.div`
  margin: 24px 0;
  height: 56px;
  line-height: 56px;
`;

export const EditTool = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #fefefe;
  border-radius: 12px;
  box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.25);
  background-image: url(${(props) => props.src});
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid;

  ${(props) =>
    props.disableSelect &&
    `-ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: auto;`}
`;

export const ContentWrapper = styled.div`
  margin: 24px 0;
  height: 640px;
  @media only screen and (max-width: 1280px) {
    height: 360px;
  }
`;

export const UploadBtn = styled.a`
  float: right;
  width: 160px;
  height: 56px;
  line-height: 56px;
  font-size: 20px;
  font-weight: 700;
  background-color: #ed3f3e;
  border-radius: 17px;
  color: #fff;

  &:hover {
    box-shadow: 4px 4px 12px -6px rgba(0, 0, 0, 0.2);
    opacity: 0.9;
  }

  @media only screen and (max-width: 1280px) {
    width: 120px;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    border-radius: 12px;
  }

  @media only screen and (max-width: 750px) {
    width: 100px;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    border-radius: 12px;
  }
`;
