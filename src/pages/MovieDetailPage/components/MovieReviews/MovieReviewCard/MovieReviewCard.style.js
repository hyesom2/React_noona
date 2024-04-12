import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: 10px;

  .user_avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;

    > img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .user_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .user_name {
      font-size: 16px;
    }

    .rating {
      display: flex;
      align-items: center;

      span {
        margin-left: 10px;
      }
    }
  }
`;

export const Content = styled.div`
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 10px;
`;

export const Footer = styled.footer`
  display: flex;
  padding-left: 10px;

  .date {
    font-size: 12px;
    margin-right: 10px;
  }
`;