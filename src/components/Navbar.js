import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faEllipsis, faMagnifyingGlass, faBars, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menulist = {
    women: {
      name: "Women",
      img: "https://image.hm.com/content/dam/abtestdepartmentimages/Ladies1.png?imwidth=150",
    },
    men: {
      name: "Men",
      img: "https://image.hm.com/content/dam/abtestdepartmentimages/Men1.png?imwidth=150",
    },
    baby: {
      name: "Baby",
      img: "https://image.hm.com/content/dam/abtestdepartmentimages/Baby1.png?imwidth=150",
    },
    kids: {
      name: "Kids",
      img: "https://image.hm.com/content/dam/abtestdepartmentimages/Kids1.png?imwidth=150",
    },
    home: {
      name: "'H&M HOME",
      img: "https://image.hm.com/content/dam/abtestdepartmentimages/Home1.png?imwidth=150",
    },
    sport: {
      name: "Sport",
      img: "https://image.hm.com/content/dam/abtestdepartmentimages/Sport1.png?imwidth=150",
    },
    sale: {
      name: "Sale",
      img: "https://image.hm.com/content/dam/abtestdepartmentimages/Sale1.png?imwidth=150",
    },
    지속가능성: {
      name: "지속가능성",
      img: "https://image.hm.com/content/dam/abtestdepartmentimages/Sustainability1.png?imwidth=150"
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);
  // const authenticate = useSelector((state) => state.auth.authenticate);
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch({ type: "LOGOUT", payload: {authenticate: authenticate} })
  }
  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate("/login");
  };
  const goToHomePage = () => {
    navigate("/");
  };
  const search = (event) => {
    if( event.key === "Enter") {
      event.preventDefault();
      // 1. 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      // 2. url을 바꿔준다.
      navigate(`/?q=${keyword}`);
    }
  };
  const mobileMenuOpen = () => {
    setMenuOpen(true);
  }

  return (
    <NavbarContainer>
      <NavbarTop>
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
        <Logo onClick={ () => goToHomePage() }>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png" alt="" />
        </Logo>
        <InfoList>
          {
            authenticate === true 
            ?
            <li className="info-item" onClick={ Logout }>
              <FontAwesomeIcon icon={ faUser } /><span>로그아웃</span>
            </li>
            :
            <li className="info-item" onClick={ () => goToLoginPage() }>
              <FontAwesomeIcon icon={ faUser } /><span>로그인</span>
            </li>
          }
          <li className="info-item">
            <FontAwesomeIcon icon={faHeart} /><span>즐겨찾기</span>
          </li>
          <li className="info-item">
            <FontAwesomeIcon icon={faBagShopping} /><span>쇼핑백(0)</span>
          </li>
        </InfoList>
      </NavbarTop>
      <NavbarBottom>
        <ul className="navbar-list">
          {
            Object.values(menulist).map((item, index) => (
              <li key={index} className="navbar-item">
                { item.name }
              </li>
            ))
          }
        </ul>
        <SearchForm>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input type="text" placeholder="제품 검색" onKeyPress={ (event) => search(event) } />
        </SearchForm>
      </NavbarBottom>
      <MobileNavbar>
        <Left>
          <MenuButton onClick={ () => mobileMenuOpen() }>
            <FontAwesomeIcon icon={faBars} size="xl" />
          </MenuButton>
          <Logo onClick={ () => goToHomePage() }>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png" alt="" />
          </Logo>
        </Left>
        <Right>
          <InfoList>
            {
              authenticate === true 
              ?
              <li className="info-item" onClick={ () => setAuthenticate(false) }>
                <FontAwesomeIcon icon={ faUser } /><span>로그아웃</span>
              </li>
              :
              <li className="info-item" onClick={ () => goToLoginPage() }>
                <FontAwesomeIcon icon={ faUser } /><span>로그인</span>
              </li>
            }
            <li className="info-item">
              <FontAwesomeIcon icon={faHeart} />
            </li>
            <li className="info-item">
              <FontAwesomeIcon icon={faBagShopping} />
            </li>
          </InfoList>
        </Right>
      </MobileNavbar>
      <MobileSidebar className={ menuOpen === true ? "is-open" : null}>
        <ul className="navbar-list">
          {
            Object.values(menulist).map((item, index) => (
              <li key={index} className="navbar-item">
                <img src={item.img} alt="" />
                { item.name }
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
              </li>
            ))
          }
          <li>고객서비스</li>
          <li>뉴스레터</li>
          <li>매장찾기</li>
          <li>ANDRIOD 다운로드</li>
          <li>IOS 다운로드</li>
        </ul>
      </MobileSidebar>
      <Overlay className={ menuOpen === true ? "is-open" : null } onClick={ () => { setMenuOpen(false) }} />
    </NavbarContainer>
  )
}

export default Navbar;

const NavbarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 32px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const NavbarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 32px;

  .service-list {
    display: flex;
  }
  .service-item {
    margin-right: 10px;
    padding: 0 8px;
    cursor: pointer;
  }
  .service-item:last-child {
    margin-right: 0;
  }
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavbarBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .navbar-list {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .navbar-item {
    padding: 0 16px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.h1`
  width: 100px;
  height: 40px;
  margin-bottom: 0;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;

    img {
      height: 24px;
    }
  }
`;

const InfoList = styled.ul`
  display: flex;
  justify-content: flex-end;

  .info-item {
    margin-right: 10px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    span {
      margin-left: 6px;
    }
  }
`;

const MobileNavbar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 0 12px;
  background-color: #fff;
  z-index: 99;
  overscroll-y: auto;
  overscroll-behavior: contain;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const Left = styled.div`
  display: flex;
`;
const Right = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`;

const MobileSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 85%;
  height: 100vh;
  padding: 16px 0;
  transform: translateX(-100%);
  background-color: #fff;
  transition: transform 300ms ease-in-out;
  overscroll-y: auto;
  overscroll-behavior: contain;
  
  &.is-open {
    transform: translateX(0);
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 64px;
    padding: 8px 24px;

    img {
      display: block;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin-right: 16px;
    }

    .arrow-icon {
      position: absolute;
      top: 50%;
      right: 24px;
      transform: translateY(-50%);
    }
  }
`;

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);

  &.is-open {
    display: block;
  }
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 0 8px;

  .search-icon {
    margin-right: 8px;
  }
`;