import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 60px;

  .player_wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 48px;
  }

  .player {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;

    &_title {
      margin-left: 10px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 1023px) {
    padding: 0 40px;

    .player_wrap {
      margin-bottom: 35px;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 0 20px;

    .player {
      &_title {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;