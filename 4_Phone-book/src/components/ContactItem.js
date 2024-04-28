import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const ContactItem = ({ item }) => {
  return (
    <Container>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
      <Info>
        <h1 className="name">{ item.name }</h1>
        <p className="phone">{ item.phoneNumber }</p>
      </Info>
      <FontAwesomeIcon className="more" icon={faEllipsis} />
    </Container>
  )
}

export default ContactItem;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  
  img {
    display: block;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .more {
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  .name {
    font-size: 14px;
    font-weight: bold;
  }
  
  .phone {
    font-size: 13px;
  }
`;