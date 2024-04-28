import styled from "styled-components";

export const Container = styled.div`
  background-color: #141414;
  padding: 20px 200px;

  @media screen and (max-width: 1023px) {
    padding: 10px 20px 68px 20px;
  }
`;

export const SnsGroup = styled.div`
  margin-bottom: 20px;

  .icon_sns {
    font-size: 24px;
    color: #808080;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  .footer_menu_list {}
  .footer_menu_item {
    font-size: 13px;
    color: #808080;
    margin-bottom: 15px;

    &:last-child {
      marin-bottom: 0;
    }

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: #808080;

  p {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;