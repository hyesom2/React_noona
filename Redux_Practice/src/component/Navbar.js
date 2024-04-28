import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.id);
  const auth = useSelector((state) => state.auth);
  const cartCount = useSelector((state) => state.count);
  const login = () => {
    dispatch({ type: "LOGIN", payload:{ id: "김현주", pw: "12345" }});
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Container>
      <h1>REDUX연습</h1>
      <ul>
        {
          auth === true
          ?
          <li>
            { id }님 어서오세요!
          </li>
          :
          null
        }
        {
          auth === false
          ?
          <li onClick={ login }>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </li>
          :
          <li onClick={ logout }>
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </li>
        }
        <li>
          <FontAwesomeIcon icon={faCartShopping} />
          <span>장바구니({ cartCount })</span>
        </li>
      </ul>
    </Container>
  )
}

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffaaaa;
  width: 100%;
  height: 100px;
  padding: 20px;

  h1 {
    font-size: 24px;
    white-space: nowrap;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }

  li {
    padding: 0 10px;
    cursor: pointer;

    span {
      margin-left: 4px;
    }
  }
`;
