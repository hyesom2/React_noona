import styled from "styled-components";

export const Movie_Card = styled.div`
  position: relative;
  width: 270px;
  height: 300px;
  padding: 10px;
  transition: transform 500ms ease-in-out, opacity 300ms ease-in-out;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transform: scale(1.1);

    .movie_card_info {
      display: block;
    }
  }

  @media screen and (max-width: 1023px) {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Movie_Card_Info = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  
  .movie_title {
    font-size: 18px;
    line-height: 1;
    text-align: center;
    margin-bottom: 10px;
    color: #fff;
  }

  .movie_genre_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .movie_genre_item {
    background-color: #B9090B;
    border-radius: 4px;
    font-size: 12px;
    padding: 2px 4px;
    margin: 0 4px 4px 0;
  }
  .movie_genre_item:last-child {
    margin-right: 0;
  }
  .movie_release_date {
    font-size: 14px;
    color: #E5E5E5;
    margin-bottom: 20px;
  }
  .icon-more {
    font-size: 20px;
  }
`;
