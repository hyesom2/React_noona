import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #EDB314, #D21E10);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  
  @media screen and (max-width: 960px) {}

  @media screen and (max-width: 600px) {}
`;

export const BoxWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;

  @media screen and (max-width: 960px) {
    margin: 60px 0; 
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin: 40px 0;
  }

  .vs {
    width: 300px;
    height: 180px;

    @media screen and (max-width: 960px) {
      width: 200px;
      height: 100px;
    }
    @media screen and (max-width: 600px) {
      width: 170px;
      height: 75px;
      margin: 10px 0;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;

  .button {
    display: block;
    width: 50px;
    height: 50px;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      transition: transform 300ms ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }

    @media screen and (max-width: 960px) {
      width: 60px;
      height: 60px;
    }
    @media screen and (max-width: 600px) {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Count = styled.div`
  font-size: 30px;
  font-weight: bold;

  @media screen and (max-width: 960px) {
    font-size: 40px;
  }
`;

export const How = styled.button`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
  font-weight: bold;
  color: #fff;
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }
  
  @media screen and (max-width: 960px) {
    top: 20%;
  }
  @media screen and (max-width: 600px) {
    top: 5%;
  }
`;

export const Reset = styled.button`
  position: absolute;
  top: 10%;
  right: 10%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  transition: opacity 300ms ease-in-out;

  @media screen and (max-width: 960px) {
    top: 20%;
  }
  @media screen and (max-width: 600px) {
    top: 5%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;