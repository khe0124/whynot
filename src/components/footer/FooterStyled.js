import styled from 'styled-components';

export const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 68px;
  color: #fff;
  background-color: #f4f4f4;
  text-align: center;
`;

export const Footer = styled.div`
  top: 52%;
  transform: translateY(-50%);
  font-size: 8px;
  font-weight: 400;
  color: #000;
`;

export const FooterBtn = styled.a`
  top: 50%;
  transform: translateY(-50%);
  text-decoration: underline;
  text-decoration-color: #000;
  color: #000;
  margin-right: 1vw;
`;

export const FooterItem = styled.div`
  display: inline;
  top: 50%;
  transform: translateY(-50%);
  text-decoration-color: #000;
  color: #000;
  margin-right: 1vw;
`;
