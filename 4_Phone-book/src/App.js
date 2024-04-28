import React, { useState } from 'react';
import styled from 'styled-components';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

// 1. 연락처등록하는 폼
// 2. 연락처리스트와 search창
// 3. 리스트에 유저이름과 전화번호를 추가할 수 있다.
// 4. 리스트에 item이 몇개있는지 보인다.
// 5. 사용자가 유저를 이름검색으로 찾을 수 있다.

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Header>
        <h1>My Contact</h1>
        <Img />
      </Header>
      <AddButton onClick={() => setOpen(true)}>+</AddButton>
      {
        open === true 
        ?
        <>
          <ContactForm setOpen={ setOpen } />
          <Overlay onClick={() => setOpen(false)} />
        </>
        :
        null
      }
      <ContactList />
    </Container>
  )
}

export default App;

const Container = styled.div`
  position: relative;
  width: 414px;
  height: 600px;
  border: 1px solid #eee;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 20px 15px 20px;

  h1 {
    font-size: 24px;
  }
`;

const Img = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url("https://ugc.production.linktr.ee/NOBNEZcTEODmfUKpUIlR_%E1%84%80%E1%85%AA%E1%86%A8%E1%84%8E%E1%85%A5%E1%86%AF%E1%84%8B%E1%85%B5%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const AddButton = styled.button`
  position: absolute;
  right: 15px;
  bottom: 45px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  font-size: 40px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
`;