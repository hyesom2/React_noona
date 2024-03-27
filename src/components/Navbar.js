import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faEllipsis, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menulist = ['Women', 'Men', 'Baby', 'Kids', 'H&M HOME', 'Sport', 'Sale', '지속가능성'];

  return (
    <div className="navContainer">
      <div className="navbarWrap">
        <ul className="service-list">
          <li className="service-item">
            <Link to="#">고객서비스</Link>
          </li>
          <li className="service-item">
            <Link to="#">뉴스레터</Link>
          </li>
          <li className="service-item">
            <Link to="#">매장찾기</Link>
          </li>
          <li className="service-item">
            <Link to="#"><FontAwesomeIcon icon={faEllipsis} /></Link>
          </li>
        </ul>
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png" alt="" />
        </div>
        <ul className="info-list">
          <li className="info-item">
            <Link to="#">
              <FontAwesomeIcon icon={ faUser } /><span>로그인</span>
            </Link>
          </li>
          <li className="info-item">
            <Link to="#">
              <FontAwesomeIcon icon={faHeart} /><span>즐겨찾기</span>
            </Link>
          </li>
          <li className="info-item">
            <Link to="#">
              <FontAwesomeIcon icon={faBagShopping} /><span>쇼핑백(0)</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul className="navbar-list">
          {
            menulist.map((item, index) => (
              <li key={index} className="navbar-item">
                <Link to="#">
                  { item }
                </Link>
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
