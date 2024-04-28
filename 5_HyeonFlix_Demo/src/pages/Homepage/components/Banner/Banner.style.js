import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 600px;
    background: linear-gradient(to bottom, transparent, #141414);
    z-index: 99;
  }

  @media screen and (max-width: 1023px) {
    height: 500px;

    &::before {
      height: 500px;
    }
  }

  @media screen and (max-width: 767px) {
    height: 400px;

    &::before {
      height: 400px;
    }
  }
`;

export const Banner_Info = styled.div`
  position: absolute;
  top: 50%;
  left: 60px;
  transform: translateY(-50%);
  width: 500px;
  z-index: 100;

  .banner_info_title {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .banner_info_list {
    display: flex;
    margin-bottom: 15px;
  }

  .banner_info_item {
    font-size: 14px;
    color: #E5E5E5;

    &::after {
      content: '|';
      margin: 0 10px;
    }

    &:last-child {
      margin-right: 0;

      &::after {
        content: '';
      }
    }
  }

  .banner_info_desc {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;

    .banner_info_title {
      font-size: 35px;
      margin-bottom: 10px;
    }

    .banner_info_list {
      display: flex;
      margin-bottom: 10px;
    }

    .banner_info_desc {
      font-size: 14px;
    }
  }
`;