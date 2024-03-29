import React from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container>
      <LoginTop>
        <h1>로그인</h1>
        <p>다양한 할인 혜택과 이벤트, 보너스 쿠폰을 놓치지 마세요</p>
        <KakaoLogin><FontAwesomeIcon icon={faComment} /><span>카카오로 로그인</span></KakaoLogin>
        <span>또는</span>
      </LoginTop>
      <LoginForm onSubmit={ (event) => loginUser(event) }>
        <label>아이디</label>
        <input type="email" />
        <label>비밀번호</label>
        <input type="password" />
        <button type="submit" className="login-button">로그인</button>
      </LoginForm>
    </Container>
  )
}

export default Login;

const Container = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

const LoginTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login-title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  
  p {
    font-size: 13px;
    margin: 16px 0 32px 0;
  }
  
  span {
    font-size: 13px;
    margin: 16px 0;
  }  
`;

const KakaoLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FEE500;
  width: 320px;
  height: 56px;
  cursor: pointer;
  
  span {
    font-size: 16px;
    margin-left: 6px;
  }

  &:hover {
    background-color: #F0D700;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    font-size: 16px;
  }
  
  input {
    padding: 8px;
    background-color: #fff;
    width: 320px;
    height: 48px;
    border: 1px solid #d0d0d0;
  }
  
  .login-button {
    margin-top: 20px;
    width: 320px;
    height: 48px;
    background-color: #000;
    color: #fff;
  }
`;
