import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Banner3dAsset from 'Asset/image/banner/banner3d.png';
import DeviceWidth from '~/model/constants/DeviceWidth';

export const Container = styled.div``;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #fff;
  opacity: 0.5;
  z-index: 999;
`;

export const LoadingImg = styled.img`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 114px;
  height: 114px;
  src: ${(props) => props.src};
`;

export const Divider = styled.div`
  width: 100%;
  margin: auto;
  height: ${(props) => props.width};
  background-color: #000;
`;

export const CenterHorizontal = styled.div`
  left: 50%;
  transform: translateX(-50%);
`;

export const CenterVertical = styled.div`
  top: 50%;
  transform: translateY(-50%);
`;

export const Center = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Clear = styled.div`
  &:after {
    content: '';
    clear: both;
    display: block;
    width: 100%;
    height: 0px;
    overflow: hidden;
  }
`;

export const Row = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  height: 100%;
`;

export const Imx = styled.div`
  margin: 0px 20px;
  height: 100%;
  padding-left: 172px;
`;

export const UnderLine = styled.div`
  text-decoration: underline;
`;

export const FL = styled.div`
  float: left;
`;

export const FR = styled.div`
  float: right;
`;

export const DisableSelect = `
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const BackgroundShadow = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 200;
`;

/* --- banner3d --- */
export const Banner3d = styled.div`
  width: 100%;
  height: 10.5vw;
  background: #000;
  text-align: center;
`;

export const Banner3dImage = styled.img`
  top: 55%;
  transform: translateY(-50%);
  left: 22%;
  width: 12vw;
`;

/* --- banner3d end --- */

/* --- banner2d --- */

export const Banner2d = styled.div`
  width: 100%;
  height: 15vw;
  background: #000;
  text-align: center;
`;

export const Banner2dImage = styled.img`
  top: 50%;
  transform: translateY(-50%);
  left: 12%;
  width: 15vw;
`;
/* --- banner2d end --- */

export const CategoryItem = styled.a`
  width: 44px;
  height: 44px;
  background-color: #fefefe;
  border-radius: 12px;
  box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.25);
  background-image: url(${(props) => props.src});
  background-size: 22px 22px;
  background-repeat: no-repeat;
  background-position: center center;
  margin: ${(props) => props.margin};

  ${(props) =>
    props.disableSelect &&
    `-ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: auto;`}

  ${(props) => props.selectItem && `display: inline-block;`}
  ${(props) => props.size && `width: ${props.size}; height: ${props.size};`}
`;

export const CategoryItemSmall = styled.div`
  width: 32px;
  height: 32px;
  background-color: #fefefe;
  border-radius: 12px;
  box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.25);
  background-image: url(${(props) => props.src});
  background-size: 16px 16px;
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

/* --- WhiteTooltip --- */
export const WhiteTooltip = styled.div`
  display: inline-block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  cursor: pointer;
  &:hover {
  }
`;

export const WhiteTooltipContentWrapper = styled.div`
  display: inline-block;
  position: absolute;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  border: #343434 solid 1.5px;
  font-size: 16px;
  text-align: left;
  margin-top: 8px;
  top: 75%;
  left: ${(props) => (props.isAlarm ? '50%' : '30%')};
  width: ${(props) => (props.isAlarm ? '280px' : '240px')};
  margin-left: ${(props) => (props.isAlarm ? '-140px' : '-120px')};
  z-index: 10;
  cursor: auto;

  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 6px 12px 6px;
    border-color: #ffffff transparent;
    display: block;
    z-index: 1;
    top: -9px;
    left: 50%;
    margin-left: -6px;
  }

  &:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 6px 12px 6px;
    border-color: #343434 transparent;
    display: block;
    z-index: 0;
    left: 50%;
    top: -12px;
    margin-left: -6px;
  }
`;

export const WhiteTooltipContent = styled.div`
  display: inline-block;
  width: 100%;
`;

export const WhiteTooltipTopContentWrapper = styled.div`
  display: inline-block;
  position: absolute;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  border: #343434 solid 1.5px;
  font-size: 16px;
  text-align: left;
  margin-top: 4px;
  bottom: 100%;
  left: 50%;
  width: 240px;
  margin-left: -120px;
  z-index: 10;
  cursor: auto;

  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 12px 6px 0 6px;
    border-color: #ffffff transparent transparent transparent;
    display: block;
    z-index: 1;
    bottom: -9px;
    left: 50%;
    margin-left: -6px;
  }

  &:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 12px 6px 0 6px;
    border-color: #343434 transparent transparent transparent;
    display: block;
    z-index: 0;
    left: 50%;
    bottom: -12px;
    margin-left: -6px;
  }
`;

export const WhiteTooltipTopContent = styled.div`
  display: inline-block;
  width: 100%;
  top: 4px;
`;

/* --- WhiteTooltip end --- */

/* --- QuestionCard --- */
export const QuestionCard = styled.div`
  width: 100%;
  height: 192px;
  border-bottom: #000 1px solid;
  padding: 12px;
  @media only screen and (max-width: 750px) {
    height: 172px;
  }
`;

export const QuestionCardHeaderWrapper = styled.div`
  width: 100%;
  height: 44px;
  top: 6px;
  @media only screen and (max-width: 750px) {
    height: 32px;
  }
`;

export const QuestionCardPoint = styled.div`
  line-height: 39px;
  margin-left: 24px;
  font-size: 15px;
  font-weight: 700;
  color: #ea3e43;
  float: left;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  @media only screen and (max-width: 750px) {
    line-height: 32px;
    top: 4px;
    margin-left: 16px;
    font-size: 14px;
    font-weight: 400;
    font-family: 'SB Aggro';
  }
`;

export const QuestionCardCoachingWrapper = styled.div`
  float: right;
`;

export const QuestionCardCoaching = styled.div`
  top: ${(props) => (!props.hasFire ? '12px' : '-6px')};
  bottom: 1px;
  height: 44px;
  display: inline;
  font-size: 15px;
  font-weight: 600;
  margin-right: 12px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const QuestionCardFire = styled.img`
  margin: 0 auto;
  width: 24px;
  height: 32px;
  top: 4px;
  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const QuestionCardContentWrapper = styled.div`
  position: absolute;
  float: left;
  text-align: start;
  width: 95%;
  top: 74px;
  height: 120px;
  @media only screen and (max-width: 750px) {
    top: 64px;
  }
`;

export const QuestionCardImgBox = styled(Link)`
  display: inline-block;
  width: 120px;
  height: 80px;
  border: 0.8px solid #d3d3d3;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 4px 4px 4px -4px rgba(0, 0, 0, 0.15);
  background-image: url(${(props) => props.src});
  background-size: 120px 80px;
  background-repeat: no-repeat;
  background-position: center center;

  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const QuestionCardTextBox = styled.div`
  vertical-align: top;
  padding: 0;
  position: relative;
  display: inline-block;
  width: calc(100% - 154px);
  height: 80px;
  left: ${(props) => props.hasImg && `24px`};
  top: 1px;

  @media only screen and (max-width: 750px) {
    width: 79vw;
    left: 0;
  }
`;

export const QuestionCardTitle = styled(Link)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 750px) {
    font-weight: 400;
    font-family: 'SB Aggro';
  }
`;

export const QuestionCardContent = styled(Link)`
  top: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  font-size: 13px;
  &:hover {
    text-decoration: underline;
  }
`;

export const QuestionCardTime = styled.div`
  top: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 11px;
  opacity: 0.6;
`;

/* --- QuestionCard End --- */

/* --- CustomSelect --- */
export const CustomSelect = styled.div`
  cursor: pointer;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  width: ${(props) => props.width};
  height: 56px;
  line-height: 56px;
  border: 1px solid #000;
  text-align: start;
  padding-left: ${(props) => (props.hasImg ? `60px` : `24px`)};
  font-size: 18px;
  background: url(${(props) => props.src}) calc(100% - 8px) center no-repeat;
  background-size: 32px;

  @media only screen and (max-width: 980px) {
    width: 100%;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    padding-left: 24px;
    margin-top: 4px;
  }

  ${(props) =>
    props.src &&
    `&:hover {
      color: #4e4e4e;
    box-shadow: 4px 4px 12px -6px rgba(0, 0, 0, 0.2);
  }`}
`;

export const CustomSelectItem = styled(CustomSelect)`
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  border-top: none;
  z-index: 1;
  background-color: #fff;
  top: ${(props) => props.index && `${props.index * 56}px`};

  &:hover {
    color: #4e4e4e;
  }

  @media only screen and (max-width: 980px) {
    top: ${(props) => props.index && `${props.index * 36}px`};
    margin-top: 0px;
  }
`;

export const FilterCategoryImg = styled.div`
  position: absolute;
  width: 44px;
  height: 100%;
  line-height: 56px;
  left: 4px;
  top: 0;
  z-index: 1;

  @media only screen and (max-width: 980px) {
    width: 24px;
    height: 24px;
    display: none;
  }

  a {
    top: 6px;
  }
`;

/* --- CustomSelect End --- */

/* --- NoContent Start --- */
export const NoContent = styled.div`
  width: 240px;
  text-align: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  left: 50%;
  transform: translateX(-50%);
  margin-top: 36px;
  background: url(Banner3dAsset) 10px center no-repeat;
  background-size: 32px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const NoContentText = styled.div`
  margin-top: -18px;
  font-family: 'SB Aggro';
  font-weight: 400;
`;

export const NoContentImg = styled.img`
  display: inline;
  left: 50%;
  transform: translateX(-50%);
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;
export const FloatingBtnText = styled.div`
  cursor: pointer;
  position: absolute;
  color: #fff;
  top: 50%;
  left: 30%;
  transform: translate(-25%, -50%);
  font-size: 24px;
  font-family: 'SB Aggro';
  @media only screen and (max-width: 750px) {
    font-size: 16px;
    left: 25%;
  }
`;

/* --- NoContent End --- */
