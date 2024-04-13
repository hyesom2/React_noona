import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 60px;

  .preview_title {
    font-size: 24px;
    margin-bottom: 10px;
  }

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
`;