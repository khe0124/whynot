import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 78px 0 240px 0;
  text-align: center;

  @media only screen and (max-width: 750px) {
    padding: 78px 0 140px 0;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 192px;
  background: #000;
  text-align: center;
`;

export const BannerImage = styled.img`
  top: 55%;
  transform: translateY(-50%);
  left: 22%;
  width: 192px;
`;

export const Question = styled.div`
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  margin: 42px 0;
  width: 65%;
  @media only screen and (max-width: 1280px) {
    margin-top: 22px;
    width: 85%;
  }
`;

export const QuestionHeader = styled.div`
  height: 144px;
  margin: 18px 0 18px 12px;
`;

export const QuestionInfo = styled.div`
  float: left;
  position: absolute;
  height: 44px;
`;

export const CategoryItem = styled.div`
  width: 38px;
  height: 38px;
  background-color: #fefefe;
  border-radius: 12px;
  box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.25);
  background-image: url(${(props) => props.src});
  background-size: 20px 20px;
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
`;

export const QuestionPoint = styled.div`
  position: absolute;
  margin-left: 18px;
  font-size: 13px;
  font-weight: 700;
  color: #ea3e43;
  float: left;
  left: 38px;
  top: 50%;
  transform: translateY(-50%);
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const QuestionTitle = styled.div`
  float: left;
  overflow: hidden;
  position: absolute;
  text-align: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 77%;
  top: 52%;
  transform: translateY(-50%);
  font-weight: 700;
  font-size: 24px;
`;

export const QuestionWriterProfile = styled.img`
  position: absolute;
  float: left;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const QuestionWriterNickname = styled.a`
  position: absolute;
  float: left;
  bottom: 15px;
  left: 44px;
  font-size: 12px;
`;

export const QuestionTime = styled.a`
  position: absolute;
  float: left;
  bottom: 0;
  left: 44px;
  font-size: 10px;
  opacity: 0.8;
  cursor: auto;
`;

export const QuestionCoachingWrapper = styled.div`
  position: absolute;
  bottom: 4px;
  right: 0;
`;

export const QuestionCoaching = styled.div`
  height: 32px;
  display: inline;
  font-size: 15px;
  font-weight: 600;
  margin-right: 26px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const QuestionFire = styled.img`
  margin: 0 auto;
  width: 24px;
  height: 32px;
  top: 8px;
  right: 18px;
  src: ${(props) => props.src};
  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const QuestionMenu = styled.img`
  right: 4px;
  margin: 0 auto;
  width: 24px;
  top: 6px;
  src: ${(props) => props.src};
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  padding: 24px;
  background-color: #f6f6f8;
  text-align: start;
  overflow-y: scroll;
  margin: 24px 0;
  height: 640px;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  transform: scale(1.01);
  ${(props) =>
    props.isOpen &&
    `-webkit-filter: none; 
    -moz-filter: none; 
    -o-filter: none; 
    -ms-filter: none; 
    filter: none;
    transform: none;`}

  @media only screen and (max-width: 1280px) {
    height: 360px;
  }
`;

export const AnswerFold = styled.div`
  width: 100%;
  height: 44px;
  padding: 18px 0 0px 12px;
  cursor: pointer;
`;

export const AnswerHeader = styled.div`
  height: 44px;
  margin: 12px 0 18px 12px;
`;

export const AnswerTitle = styled.div`
  float: left;
  overflow: hidden;
  position: absolute;
  text-align: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const AnswerCoaching = styled.div`
  position: absolute;
  font-weight: 400;
  font-size: 18px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  left: 86px;
  bottom: -1px;
  width: 72px;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  font-weight: 400;
  background-color: #ed3f3e;
  border-radius: 17px;
  color: #fff;
`;

export const AnswerWriterProfile = styled.img`
  position: absolute;
  float: left;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const AnswerWriterNickname = styled.a`
  position: absolute;
  float: left;
  bottom: 15px;
  left: 44px;
  font-size: 12px;
`;

export const AnswerTime = styled.a`
  position: absolute;
  float: left;
  bottom: 0;
  left: 44px;
  font-size: 10px;
  opacity: 0.8;
  cursor: auto;
`;

export const AnswerArrow = styled.img`
  top: -8px;
  right: 16px;
  margin: 0 auto;
  width: 24px;
  src: ${(props) => props.src};
  cursor: pointer;
`;

export const AnswerMenu = styled.img`
  right: 16px;
  margin: 0 auto;
  width: 24px;
  top: 6px;
  src: ${(props) => props.src};
  cursor: pointer;
`;

export const OpenBtn = styled.a`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 142px;
  height: 56px;
  background-color: #000;
  border-radius: 17px;
  box-shadow: 4px 4px 12px -6px rgba(0, 0, 0, 0.5);
  &:hover {
    opacity: 0.8;
  }
`;

export const OpenText = styled.a`
  position: absolute;
  width: 142px;
  height: 56px;
  line-height: 56px;
  left: 50%;
  top: 50%;
  margin-right: 36px;
  transform: translate(-62%, -50%);
  font-size: 15px;
  color: #fff;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const OpenPointText = styled.a`
  position: absolute;
  width: 142px;
  height: 56px;
  line-height: 56px;
  left: 50%;
  top: 50%;
  transform: translate(-28%, -50%);
  font-size: 15px;
  color: #e95655;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const CoachingBtn = styled.a`
  float: right;
  width: 160px;
  height: 56px;
  line-height: 56px;
  font-size: 15px;
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

export const CoachingSelectBtn = styled.a`
  float: right;
  width: 160px;
  height: 56px;
  line-height: 56px;
  font-size: 15px;
  font-weight: 700;
  background-color: #000;
  border-radius: 17px;
  color: #fff;
  bottom: 10.5px;
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

export const CoachingSelectBtnPointText = styled.a`
  font-size: 15px;
  font-weight: 700;
  color: #e95655;
  margin-left: 12px;

  @media only screen and (max-width: 1280px) {
    line-height: 44px;
    font-size: 13px;
    margin-left: 8px;
  }

  @media only screen and (max-width: 750px) {
    line-height: 32px;
    font-size: 11px;
    margin-left: 6px;
  }
`;
