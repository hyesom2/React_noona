import React from 'react';
import './SearchForm.style.css';
// > icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchForm = ({ setSearchFormOpen }) => {
  return (
    <div className="container">
      <div className="search_form_header">
        <FontAwesomeIcon icon={faAngleLeft} onClick={ () => setSearchFormOpen(false) } className="back-icon" />
        <div className="search_form">
          <FontAwesomeIcon className="icon-search" icon={faMagnifyingGlass} />
          <input type="text" placeholder="search" />
        </div>
      </div>
    </div>
  )
}

export default SearchForm;
