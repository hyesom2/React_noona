import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  height: 100vh;
  padding: 60px 20px;
  background-color: #141414;
  z-index: 100;

  .sort_list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .sort_item {
    white-space: nowrap;
    padding: 10px;
    background-color: #fff;
    color: #000;
    border-radius: 8px;
    margin: 0 10px 10px 0;
    transition: all 300ms ease-in-out;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      cursor: pointer;
      background-color: #B9090B;
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const ButtonGroup = styled.button`
  position: absolute;
  top: 10px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;  
  
  span {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
`;