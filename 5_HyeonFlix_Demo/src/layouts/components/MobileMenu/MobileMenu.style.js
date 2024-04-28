import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media screen and (max-width: 1023px) {
    position: fixed;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 58px;
    background-color: #000;
    z-index: 9999;
  }
`;

export const MobileMenuList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  .mobile_menu_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`