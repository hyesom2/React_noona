import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  padding: 64px 8px;
`;

export const Search_Form_Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;

  .back-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
`;

export const Search_Form = styled.form`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 40px;
  padding: 0 20px;
  background-color: #323232;
  border-radius: 4px;
  
  &:active,
  &:focus {
    border: 2px solid #B9090B;
  }

  .search_input {
    flex-grow: 1;
    padding: 0 20px; 
  }

  .search_button {
    flex-grow: 0;
    background-color: inherit;
    color: #fff;
  }

  .icon-search {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }
`;
