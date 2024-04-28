import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import ContactItem from './ContactItem';

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const search_user = useSelector((state) => state.search_user);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if( search_user === "") {
      setFiltered(contactList);
    } else {
      let filteredList = contactList.filter((item) => item.name.includes(search_user));
      setFiltered(filteredList);
    }
  }, [contactList, search_user]);

  return (
    <Container>
      <SearchInput />
      {
        filtered.map((item, index) => (
          <ContactItem item={ item } key={ index }/>
        ))
      }
      {/* {
        contactList.map((item, index) => (
          <ContactItem item={ item } key={ index } />
        ))
      } */}
    </Container>
  )
}

export default ContactList;

const Container = styled.div`
  
`;