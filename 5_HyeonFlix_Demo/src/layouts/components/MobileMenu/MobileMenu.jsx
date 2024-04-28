import React from 'react';
// > css (styled-components)
import * as s from './MobileMenu.style.js';
// > icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faVideo, faUser } from '@fortawesome/free-solid-svg-icons';
// > react-router
import { Link } from 'react-router-dom';


const MobileMenu = () => {
  return (
    <s.Container>
      <s.MobileMenuList>
        <Link to="/">
          <li className="mobile_menu_item">
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </li>
        </Link>
        <Link to="/movies">
          <li className="mobile_menu_item">
            <FontAwesomeIcon icon={faVideo} />
            <span>Movies</span>
          </li>
        </Link>
        <Link to="/tv_shows">
          <li className="mobile_menu_item">
            <FontAwesomeIcon icon={faVideo} />
            <span>Tv Shows</span>
          </li>
        </Link>
        <Link to="https://github.com/hyesom2/5_HyeonFlix_Demo">
          <li className="mobile_menu_item">
            <FontAwesomeIcon icon={faUser} />
            <span>GitHub</span>
          </li>
        </Link>
      </s.MobileMenuList>
    </s.Container>
  )
}

export default MobileMenu;
