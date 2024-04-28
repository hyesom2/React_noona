import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const searchUser = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_USER", payload: { search }});
  }
  
  return (
    <Container>
      <Form onSubmit={ searchUser }>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        <input type="text" placeholder="Search by name or number" onChange={ (e) => setSearch(e.target.value) } />
      </Form>
    </Container>
  )
}

export default SearchInput;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 20px 10px 20px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #b7b7b7;
  border-radius: 12px;
  padding: 12px;

  .icon {
    margin-right: 16px;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  
  input {
    position: relative;
    border: none;
    width: 100%;
    height: 100%;
  }
`;