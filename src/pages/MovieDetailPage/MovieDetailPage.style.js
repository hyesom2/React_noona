import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 48px;

  @media screen and (max-width: 1023px) {
    padding-bottom: 58px;
  }
`;

export const Movie_Detail_Banner = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 480px;
  padding: 0 60px;

  .detail_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    object-fit: cover;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 480px;
    background: linear-gradient(to bottom, transparent, #141414);
    z-index: 99;
  }

  @media screen and (max-width: 1023px) {
    height: 400px;
    padding: 0 40px;

    &::before {
      height: 400px;
    }
  }

  @media screen and (max-width: 767px) {
    height: 350px;
    padding: 0 20px;

    &::before {
      height: 350px;
    }
  }
`;

export const Movie_Detail_Banner_Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  z-index: 100;

  .banner_info_poster {
    width 200px;
    height: 300px;
    margin-right: 20px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .banner_info {
    &_title {
      font-size: 40px;
      margin-bottom: 10px;
    }

    &_tagline {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1023px) {
    justify-content: center;
  }

  @media screen and (max-width: 767px) {
    .banner_info_poster {
      display: none;
    }
  }
`;

export const Info_Button_List = styled.ul`
  display: flex;
  margin-top: 10px;

  .info_button_item {
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }

    &.plus_button,
    &.up_button {
      display: block;
      width: 40px;
      height: 40px;
      border: 1px solid #fff;
      border-radius: 50%;
      
      button {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        padding: 12px;
      }

      &:hover {
        background-color: #fff;
        transition: all 300ms ease-in-out;
        overflow: hidden;
        
        button {
          color: #000;
          border-radius; 50%;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  .play_icon {
    margin-right: 12px;
  }

  &.play_button {
    display: block;
    width: 120px;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    transition: all 300ms ease-in-out;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

/* movie detail info */
export const Movie_Detail_Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  margin-bottom: 48px;

  .movie_info {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: auto;
    margin-right: 60px;

    .overview {
      font-size: 16px;
    }
  }

  .movie_info_list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 300px;
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
    flex-direction: column;
    padding: 0 40px;
    margin-bottom: 35px;

    .movie_info {
      width: 100%;
      margin-right: 0;
      margin-bottom: 10px;

      .overview {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 0 20px;
  }

  .movie_info_item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }

    .title::after {
      content: ":";
      margin: 0 6px;
    }

    .genres{
      margin-right: 6px;

      &:last-child {
        margin-right: 0;
      }
    }

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;