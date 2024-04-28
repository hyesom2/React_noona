import styled from "styled-components";

export const Rank_Badge = styled.div`
  position: absolute;
  top: 10px; // > movie_card의 padding
  left: 10px; // > movie_card의 padding
  border-bottom: 11px solid transparent;
  border-top: 0px solid #b9090B;
  border-left: 22px solid #b9090B;
  border-right: 22px solid #b9090B;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 65px;
  z-index: 100;

  strong {
    font-size: 13px;
  }

  span {
    font-size: 20px;
    font-weight: bold;
  }

  &::after {
    content: "";
  }
`;