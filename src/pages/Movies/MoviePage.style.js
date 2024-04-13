import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 0 60px;

  @media screen and (max-width: 1023px) {
    padding-bottom: 58px;
  }
`;

export const searchedMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const Filter = styled.div`
  position: absolute;
  top: 10px;
  right: 60px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;