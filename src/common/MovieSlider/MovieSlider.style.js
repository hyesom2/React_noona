import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 40px;

  .movie_slider_title {
    font-size: 26px;
    color: #E5E5E5;
    margin-bottom: 10px;
  }

  .slide_container {
    width: 100%;
  }

  .react-multi-carousel-item {
    width: 270px;
  }
  
  @media screen and (max-width: 1023px) {
    .react-multi-carousel-item {
      width: 200px;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
`;