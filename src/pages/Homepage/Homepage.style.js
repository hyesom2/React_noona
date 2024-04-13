import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: auto;
  padding-bottom: 58px;
`;

export const SlideWrap = styled.div`
  padding: 0 60px;

  @media screen and (max-width: 1023px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 767px) {
    padding: 0 30px;
  }
`;