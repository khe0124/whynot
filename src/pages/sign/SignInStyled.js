import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  text-align: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
`;

export const Box = styled.div`
  top: 50%;
  transform: translateY(-50%);
`;

export const Logo = styled.img`
  margin-top: 120px;
  width: 194px;
  height: 78px;
  src: ${(props) => props.src};

  &:hover {
    box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.2);
  }
`;

export const FormWrapper = styled.div`
  left: 50%;
  transform: translateX(-50%);
  height: 400px;
`;

export const FormBox = styled.div`
  left: 50%;
  transform: translateX(-50%);
  top: 90px;
  width: 480px;
  height: 112px;
`;

export const Title = styled.div`
  float: left;
  height: 56px;
  line-height: 56px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Text = styled.div`
  float: left;
  font-size: 16px;
  left: 8px;
`;

export const InputValidationWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 480px;
  height: 56px;
  line-height: 56px;
`;

export const Input = styled.input`
  width: 480px;
  height: 56px;
  padding: 12px;
  font-size: 18px;
  background-color: #f6f6f8;
  border: 0.1px solid #343434;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.2);
  }
`;

export const Validation = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 12px;
  width: 32px;
  height: 32px;
  src: ${(props) => props.src};
`;

export const OptionBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 480px;
  height: 24px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const CheckBox = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url(${(props) => props.src});
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const CheckBoxText = styled.a`
  position: absolute;
  margin-left: 4px;
  margin-top: 1px;
  width: 64px;
  line-height: 24px;
  font-size: 12px;
`;

export const FindPasswordText = styled.a`
  position: absolute;
  right: 2px;
  width: 64px;
  line-height: 24px;
  font-size: 12px;
  text-decoration: underline;
`;

export const ActionBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(-56px - 72px);
  width: 480px;
  height: 56px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const SignInBtn = styled.a`
  position: absolute;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  right: 0;
  width: 228px;
  height: 56px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #ed3f3e;
  border-radius: 17px;
  color: #fff;
  line-height: 56px;
`;

export const SignUpBtn = styled(Link)`
  position: absolute;
  left: 0;
  width: 228px;
  height: 56px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #000;
  border-radius: 17px;
  color: #fff;
  line-height: 56px;
  &:hover {
    box-shadow: 2px 2px 16px -4px rgba(0, 0, 0, 0.25);
    opacity: 0.9;
  }
`;

export const WhiteTooltipTopContentWrapper = styled.div`
  display: inline-block;
  position: absolute;
  padding: 12px;
  background: #ffffff;
  border-radius: 10px;
  border: #343434 solid 1.5px;
  font-size: 16px;
  text-align: left;
  bottom: 98%;
  right: 0;
  left: 272.5px;
  width: 360px;
  height: 48px;
  z-index: 10;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
  height: 48px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  line-height: 46px;
  text-align: center;
`;

export const WhiteTooltipText = styled.div`
  font-size: 12px;
`;
