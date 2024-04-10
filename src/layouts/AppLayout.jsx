import React, { useEffect, useState } from 'react';
// > css (styled-components)
import * as s from './AppLayout.style.js';
// > icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// > react-router
import { Outlet, Link, useNavigate } from 'react-router-dom';
// > components
import SearchForm from './components/SearchForm/SearchForm';
import MobileMenu from './components/MobileMenu/MobileMenu';

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
  const [widthSize, setWidthSize] = useState(window.innerWidth);
  const handleResize = () => {
    setWidthSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <s.Container>
        <s.Left_Menu>
          <Link to="/">
            {
              widthSize <= 1023
              ?
              <h1 className="logo">
                <img src={ process.env.PUBLIC_URL + '/images/HYEONFLIX_logo_m.png' } alt="로고" />
              </h1>
              :
              <h1 className="logo">
                <img src={ process.env.PUBLIC_URL + '/images/HYEONFLIX_logo.png' } alt="로고" />
              </h1>
            }
          </Link>
          <s.Left_Menu_List>
            <li className="left_menu_item">
              <Link to="/">Home</Link>
            </li>
            <li className="left_menu_item">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="left_menu_item">
              <Link to="/tv_shows">TV Shows</Link>
            </li>
            <li className="left_menu_item">
              <Link to="/my_list">My List</Link>
            </li>
          </s.Left_Menu_List>
        </s.Left_Menu>
        <s.Right_Menu>
          {
            login === true
            ?
            <s.Right_Menu_List>
              {
                SearchFormOpen === true 
                ?
                <li className="right_menu_item">
                  <form className="search_form" onSubmit={ searchByKeyword }>
                    <input className="search_input" type="text" placeholder="search" value={ keyword } onChange={ (event) => setKeyword(event.target.value) } />
                  </form>
                </li>
                :
                null
              }
              <li className="right_menu_item">
                {
                  SearchFormOpen && widthSize <= 1023
                  ?
                  <SearchForm setSearchFormOpen={ setSearchFormOpen } />
                  :
                  null
                }
                <FontAwesomeIcon className="menu_icon" icon={faMagnifyingGlass} onClick={ () => setSearchFormOpen(true) } />
              </li>
              <li className="right_menu_item">
                <FontAwesomeIcon className="menu_icon" icon={faBell} />
              </li>
              <li className="right_menu_item">
                <div className="user_profile">
                  <img src={ process.env.PUBLIC_URL + '/images/Netflix-avatar.png' } alt="유저 프로필" />
                  <FontAwesomeIcon className="icon_arrow" icon={faCaretDown} />
                </div>              
              </li>
            </s.Right_Menu_List>
            :
            <s.Right_Menu_List>
              <li className="right_menu_item">
                <span>무제한으로 즐기는 시리즈와 영화</span>
              </li>
              <li className="right_menu_item">
                <s.Button type="button" className="sign">지금 가입하기</s.Button>
              </li>
              <li className="right_menu_item">
                <s.Button type="button" className="login" onClick={() => setLogin(true)}>로그인</s.Button>
              </li>
            </s.Right_Menu_List>
          }
        </s.Right_Menu>
      </s.Container>
      <Outlet />
      <MobileMenu />
    </>
  )
}

export default AppLayout;
