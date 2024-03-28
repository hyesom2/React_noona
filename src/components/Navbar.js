import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faEllipsis, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../css/navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menulist = ['Women', 'Men', 'Baby', 'Kids', 'H&M HOME', 'Sport', 'Sale', '지속가능성'];
  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate("/login");
  }
  const goToHomePage = () => {
    navigate("/");
  }
  return (
    <div className="navContainer">
      <div className="navbarWrap">
        <ul className="service-list">
          <li className="service-item">
            고객서비스
          </li>
          <li className="service-item">
            뉴스레터
          </li>
          <li className="service-item">
            매장찾기
          </li>
          <li className="service-item">
            <FontAwesomeIcon icon={faEllipsis} />
          </li>
        </ul>
        <div className="logo" onClick={ () => goToHomePage() }>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png" alt="" />
        </div>
        <ul className="info-list">
          <li className="info-item" onClick={ () => goToLoginPage() }>
            <FontAwesomeIcon icon={ faUser } />
            <span>로그인</span>
          </li>
          <li className="info-item">
            <FontAwesomeIcon icon={faHeart} /><span>즐겨찾기</span>
          </li>
          <li className="info-item">
            <FontAwesomeIcon icon={faBagShopping} /><span>쇼핑백(0)</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul className="navbar-list">
          {
            menulist.map((item, index) => (
              <li key={index} className="navbar-item">
                { item }
              </li>
            ))
          }
        </ul>
        <form className="form-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="제품 검색" />
        </form>
      </div>
    </div>
  )
}

export default Navbar;
