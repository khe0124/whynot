import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 78px 0 117px 0;
  display: flex;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const MenuWrapper = styled.div`
  flex: 2.75;
  height: 100%;
  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  flex: 7.25;
  height: 100%;
`;
