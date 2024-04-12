import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    margin-bottom: 20px;

    &_title {
      font-size: 26px;
      line-height: 1;
      color: #E5E5E5;
      margin-bottom: 20px;
    }

    &_icon {
      font-size: 26px;
      cursor: pointer;
    }
  }
`;

export default GlobalStyle;