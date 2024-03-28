import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import { styled } from 'styled-components';
import '../css/login.css';
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
      <div className="login">
        <h1 className="login-title">로그인</h1>
        <p>다양한 할인 혜택과 이벤트, 보너스 쿠폰을 놓치지 마세요</p>
        <KakaoLogin><FontAwesomeIcon icon={faComment} /><span>카카오로 로그인</span></KakaoLogin>
        <span>또는</span>
      </div>
      <form className="form-login" onSubmit={ (event) => loginUser(event) }>
        <label>아이디</label>
        <input type="email" />
        <label>비밀번호</label>
        <input type="password" />
        <button type="submit" className="login-button">로그인</button>
      </form>
    </Container>
  )
}

export default Login;

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