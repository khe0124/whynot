import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: 78px;
  background: #fff;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 99;
  ${(props) => props.hasHeaderUnderline && `border-bottom: 1px solid #000`}
`;

export const Logo = styled(Link)`
  position: absolute;
  background-color: #000;
  text-align: center;
  width: 80px;
  height: 32px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-image: url(${(props) => props.src});
  background-size: 80px 32px;
  background-repeat: no-repeat;
  background-position: center center;

  &:hover {
    box-shadow: 4px 4px 8px -4px rgba(0, 0, 0, 0.25);
  }
`;

export const MenuBox = styled.div`
  float: left;

  div {
    display: inline-block;
    line-height: 78px;
    font-size: 16px;
    margin-right: 24px;
    font-weight: 600;
  }

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;

export const Arrow = styled.img`
  display: inline-block;
  top: 10px;
  left: -6px;
`;

export const SearchBox = styled.div`
  float: left;
  position: absolute;
  text-align: center;
  line-height: 78px;
  width: 380px;
  margin: 0 auto;
  left: 50%;
  top: 48%;
  transform: translate(-70%, -50%);

  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 40px;
  border-radius: 20px;
  background-color: #f5f5f5;
  font-size: 14px;
  padding: 20px;
  border: none;
  outline: none;
  box-shadow: 6px 6px 6px -6px rgba(0, 0, 0, 0.1);
  font-weight: 400;

  &:hover {
    box-shadow: 2px 2px 12px -2px rgba(0, 0, 0, 0.15);
    background-color: #f2f2f2;
  }

  &:focus {
    box-shadow: 2px 2px 16px -2px rgba(0, 0, 0, 0.2);
  }
`;

export const SearchIcon = styled.a`
  position: absolute;
  right: 6px;
  top: 0;
  width: 40px;
  height: 40px;
  transform: translateY(-70%);

  &:hover {
    opacity: 0.75;
  }
`;

export const SearchIconImg = styled.img`
  height: 30px;
  width: 30px;
`;

export const UserBox = styled.div`
  float: right;
  line-height: 78px;
`;

export const Point = styled.div`
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  color: #ea3e43;
  font-family: 'SB Aggro';
  margin-right: 6px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const AlarmNew = styled.div`
  display: inline-block;
  position: absolute;
  top: 25px;
  right: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: #e93e43;
  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const UserBoxImg = styled.img`
  transform: translateY(30%);
  margin: 0 auto;
  width: 32px;
  height: 32px;
  cursor: pointer;
  @media only screen and (max-width: 750px) {
    cursor: pointer;
  }
`;

export const AlarmCard = styled.div`
  font-family: sans-serif;
  position: relative;
  border-bottom: #3e3e3e 0.8px solid;
  height: 44px;
`;

export const AlarmCardTextBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const AlarmTitle = styled.div`
  line-height: 20px;
  margin-top: 14px;
  padding: 0 4px;
  height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: 400;
  color: #000;
`;

export const AlarmTime = styled.div`
  line-height: 18px;
  padding: 0 4px;
  height: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 11px;
  font-weight: 400;
  color: #2e2e2e;
`;

export const AlarmCardImgBox = styled.div`
  display: inline-block;
  position: absolute;
  line-height: 0px;
  top: -2px;
  right: 0;
`;

export const SideNav = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  text-align: center;
  z-index: 999;
  box-shadow: none;

  ${(props) =>
    props.open &&
    `width: 60vw;
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;`}
`;

export const SideNavMenuItem = styled.div`
  text-decoration: none;
  font-size: 16px;
  color: #1e1e1e;
  font-weight: 400;
  margin-top: -8px;
  font-family: 'SB Aggro';
  transition: 0.2s;
`;

export const SideNavLogo = styled.img`
  padding-top: 24px;
  width: 120px;
`;
