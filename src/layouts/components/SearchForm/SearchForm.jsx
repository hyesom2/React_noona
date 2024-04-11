import React from 'react';
import * as s from './SearchForm.style.js';
// > icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchForm = ({ setSearchFormOpen, searchByKeyword, keyword, setKeyword }) => {

  return (
    <s.Container>
      <s.Search_Form_Header>
        <FontAwesomeIcon className="back-icon" icon={faAngleLeft} onClick={ () => setSearchFormOpen(false) } />
        <s.Search_Form onSubmit={ searchByKeyword }>
          <FontAwesomeIcon className="icon-search" icon={faMagnifyingGlass} />
          <input className="search_input" type="text" placeholder="search" value={ keyword || "" } onChange={ (event) => setKeyword(event.target.value) } />
          <button className="search_button" type="submit">검색</button>
        </s.Search_Form>
      </s.Search_Form_Header>
    </s.Container>
  )
}

export default SearchForm;
