import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const ContactForm = ({ setOpen }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();
  const addContact = (e) => {
    e.preventDefault();
    // dispatch({ type:"ADD_CONTACT", payload:{name: name, phoneNumber: phoneNumber} }) // key:value가 같은 경우 아래와 같이 쓸 수 O (ES6)
    dispatch({ type:"ADD_CONTACT", payload:{ name, phoneNumber } });
    setOpen(false);
  }

  return (
    <Container>
      <Form onSubmit={ addContact }>
        <label for="name">이름</label>
        <input type="text" id="name" placeholder="이름을 입력하세요." onChange={ (e) => setName(e.target.value) } required />
        <label for="phone">연락처</label>
        <input type="number" id="phone" placeholder="연락처를 입력하세요." onChange={ (e) => setPhoneNumber(e.target.value) } required />
        <button type="submit">추가</button>
      </Form>
    </Container>
  )
}

export default ContactForm;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: #fff;
  width: 300px;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;
  }

  input {
    margin-bottom: 20px;
  }

  button {
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    height: 40px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    transition: opacity 300ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;