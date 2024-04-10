import React, { useState } from 'react';
import './AppLayout.style.css';
// > icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// > react-router
import { Outlet, Link, useNavigate } from 'react-router-dom';
// > responsive
import { Desktop, Mobile } from '../hooks/responsive';
// > components
import SearchForm from './SearchForm/SearchForm';

const AppLayout = () => {
  const [login, setLogin] = useState(false); // 임시로
  const [SearchFormOpen, setSearchFormOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchByKeyword = (event) => {
    event.preventDefault(); // refresh 막기
    navigate(`/movies?query=${keyword}`); // 검색하면 url 변경
    setKeyword(""); // keyword 초기화
  }

  return (
    <>
      <Desktop>
        <div className="container_desktop">
            <div className="left-menu">
                <Link to="/" className="link">
                  <h1 className="pc-logo">
                    HyeonFlix
                    {/* <img src={ process.env.PUBLIC_URL + '/images/NetflixLogo.png' } alt="netflix 로고" /> */}
                  </h1>
                </Link>
              <ul className="left-menu-list">
                  <li className="left-menu-item is-active">
                    <Link to="/" className="link">HOME</Link>
                  </li>
                <li className="left-menu-item">
                  <Link to="/movies" className="link">MOVIES</Link>
                </li>
              </ul>
            </div>
            <div className="right-menu">
              {
                login === true
                ?
                <ul className="right-menu-list">
                  {
                    SearchFormOpen === true 
                    ?
                    <li className="right-menu-item search-form">
                      <form onSubmit={ searchByKeyword }>
                        <input type="text" placeholder="search" className="search_input" value={ keyword } onChange={ (event) => setKeyword(event.target.value) } />
                      </form>
                    </li>
                    :
                    null
                  }
                  <li className="right-menu-item">
                    <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} onClick={ () => setSearchFormOpen(true) } />
                  </li>
                  <li className="right-menu-item">
                    <FontAwesomeIcon className="icon" icon={faBell} />
                  </li>
                  <li className="right-menu-item">
                    <div className="user-profile">
                      <img src={ process.env.PUBLIC_URL + '/images/Netflix-avatar.png' } alt="유저 프로필" />
                      <FontAwesomeIcon className="icon-arrow" icon={faCaretDown} />
                    </div>              
                  </li>
                </ul>
                :
                <ul className="right-menu-list">
                  <li className="right-menu-item">
                    무제한으로 즐기는 시리즈와 영화
                  </li>
                  <li className="right-menu-item">
                    <button type="button" className="button-sign">지금 가입하기</button>
                  </li>
                  <li className="right-menu-item">
                    <button type="button" className="button-login" onClick={() => setLogin(true)}>로그인</button>
                  </li>
                </ul>
              }
            </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="container_mobile">
          <Link to="/">
            <h1 className="mobile-logo">
              H
              {/* <img src={ process.env.PUBLIC_URL + '/images/NetflixLogo_mobile.png' } alt="" /> */}
            </h1>
          </Link>
          {
            login === true 
            ?
            <ul className="right-menu-list">
              <li className="right-menu-item">
                <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} onClick={ () => setSearchFormOpen(true) } />
              </li>
              <li className="right-menu-item">
                <div className="user-profile">
                  <img src={ process.env.PUBLIC_URL + '/images/Netflix-avatar.png' } alt="유저 프로필" />
                  <FontAwesomeIcon className="icon-arrow" icon={faCaretDown} />
                </div>              
              </li>
            </ul>
            :
            <ul className="right-menu-list">
              <li className="right-menu-item">
                <button type="button" className="button-sign">지금 가입하기</button>
              </li>
              <li className="right-menu-item">
                <button type="button" className="button-login" onClick={() => setLogin(true)}>로그인</button>
              </li>
            </ul>
          }
        </div>
        {
        SearchFormOpen === true
        ?
        <SearchForm setSearchFormOpen={ setSearchFormOpen } />
        :
        null
      }
      </Mobile>
      <Outlet />
    </>
  )
}

export default AppLayout;
