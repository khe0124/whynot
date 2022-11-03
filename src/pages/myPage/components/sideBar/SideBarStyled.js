import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 68px 24px 0px 24px;
  text-align: start;
  height: 100%;
  color: #a0a0a0;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  margin-bottom: ${(props) => (props.last ? '0px' : '56px')};

  * {
    &:hover {
      color: #434343;
    }
  }
`;

export const MenuTitle = styled.a`
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-weight: 700;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const MenuTitleText = styled.p`
  ${(props) => props.active && `color: #000;`}
  ${(props) => props.noCursor && `cursor: auto;`}
`;

export const MenuTitleLink = styled(Link)`
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-weight: 700;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  ${(props) => props.active && `color: #000;`}
  ${(props) => props.noCursor && `cursor: auto;`}
`;

export const MenuItem = styled.a`
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  font-weight: 500;
  left: 16px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  ${(props) => props.active && `color: #000;`}
`;

export const MenuItemText = styled.p`
  ${(props) => props.active && `color: #000;`}
`;

export const MenuItemLink = styled(Link)`
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  font-weight: 500;
  left: 16px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  ${(props) => props.active && `color: #000;`}
`;
