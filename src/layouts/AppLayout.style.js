import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 68px;
  background-color: #000;
  padding: 20px 60px;

  .logo {
    width: 200px;
    height: 60px;
    margin-right: 45px;
  }

  .logo img {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1023px) {
    height: 54px;
    padding: 10px 20px;

    .logo {
      width: 50px;
      height: 30px;
      margin-right: 0;
    }
  }
`;

export const Left_Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Left_Menu_List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  .left_menu_item {
    font-size: 14px;
    color: #E5E5E5;
    margin-right: 20px;
    transition: font-weight 300ms ease-in-out;

    &:hover {
      font-weight: bold;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const Right_Menu = styled.div`
  display: flex;
`;

export const Right_Menu_List = styled.ul`
  display: flex;

  .right_menu_item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #fff;
    margin-right: 7px;

    &:last-child {
      margin-right: 0;
    }

    .menu_icon {
      font-size: 20px;
      padding: 8px;
      cursor: pointer;
    }

    .icon_arrow {
      font-size: 14px;
    }

    .search_input {
      display: block;
      width: 150px;
      height: 25px;
      background-color: #323232;
      padding: 0 10px;
      border-radius: 4px;
    }

    .user_profile {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      img {
        display: block;
        width: 32px;
        height: 32px;
        border-radius: 2px;
        margin-right: 10px;
      }
    }
  }
  
  @media screen and (max-width: 1023px) {
    .right_menu_item span {
      display: none;
    }
  }
`;

export const Button = styled.button`
  height: 35px;
  padding: 8px 20px;
  border-radius: 2px;
  transition: opacity 300ms ease-in-out, font-weight 300ms ease-in-out;
  color: #fff;

  &:hover {
    font-weight: bold;
    opacity: 0.7;
  }

  &.sign {
    background-color: #B9090B;
  }
  
  &.login {
    background-color: #000;
    border: 1px solid #fff;
  }
`;