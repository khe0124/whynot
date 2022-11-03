import styled from 'styled-components';

export const Container = styled.div``;

export const FloatingBtn = styled.div`
  position: fixed;
  bottom: 10%;
  right: 5%;
  width: 220px;
  height: 70px;
  background-color: #e03e43;
  border-radius: 15px;
  box-shadow: 4px 4px 8px -4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  z-index: 99;

  &:hover {
    background-color: #ec3e43;
    box-shadow: 4px 4px 8px -4px rgba(0, 0, 0, 0.5);
  }

  @media only screen and (max-width: 750px) {
    width: 140px;
    height: 50px;
  }
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

export const FloatingBtnImg = styled.img`
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  height: 42px;
  src: ${(props) => props.src};
  @media only screen and (max-width: 750px) {
    height: 28px;
  }
`;
