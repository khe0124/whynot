import styled from 'styled-components';

export const Container = styled.div``;

export const ModalWrapper = styled.div`
  height: 60vh;
  width: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  overflow-x: hidden;
  text-align: center;
  z-index: 999;
  box-shadow: none;
  border-radius: 5px;

  ${(props) =>
    props.open
      ? props.wide
        ? `width: 80vw;
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;`
        : `width: 30vw;
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;`
      : ``}
`;

export const ModalBtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
`;

export const ModalBtn = styled.a`
  flex: 1;
  width: 8vw;
  height: 48px;
  line-height: 48px;
  margin: 4px;
  bottom: 84px;
  background-color: ${(props) => (props.ok ? `#ed3f3e` : `#000`)};
  border-radius: 17px;
  text-align: center;
  &:hover {
    box-shadow: 4px 4px 12px -6px rgba(0, 0, 0, 0.2);
    opacity: 0.9;
  }

  @media only screen and (max-width: 1280px) {
    width: 25vw;
    height: 48px;
    line-height: 48px;
    border-radius: 12px;
  }
`;

export const ModalText = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (max-width: 750px) {
    font-size: 12px;
    font-weight: 500;
  }
`;

export const ModalImg = styled.img`
  top: 88px;
  width: 320px;
`;

export const ModalTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  white-space: pre-line;
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  bottom: 184px;
  padding: 18px;

  @media only screen and (max-width: 750px) {
    font-size: 13px;
    font-weight: 500;
  }

  ${(props) => props.hasStar && `bottom:220px;`}
`;

export const ModalStarWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 48px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 168px;
  padding: 18px;
`;

export const ModalStar = styled.img`
  cursor: pointer;
  width: 37px;
  margin: 4px;
  bottom: 18px;
`;
