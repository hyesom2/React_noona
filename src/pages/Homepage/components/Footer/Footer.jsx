import React from 'react';
import style from './Footer.module.css';
// > icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className={`${style.container}`}>
      <div className={`${style.sns_group}`}>
        <FontAwesomeIcon className={`${style.icon_sns}`} icon={faSquareFacebook} />
        <FontAwesomeIcon className={`${style.icon_sns}`} icon={faSquareInstagram} />
        <FontAwesomeIcon className={`${style.icon_sns}`} icon={faTwitter} />
        <FontAwesomeIcon className={`${style.icon_sns}`} icon={faYoutube} />
      </div>
      <div className={`${style.footer_menu}`}>
        <ul className={`${style.footer_menu_list}`}>
          <li className={`${style.footer_menu_item}`}>자주 묻는 질문</li>
          <li className={`${style.footer_menu_item}`}>투자 정보(IR)</li>
          <li className={`${style.footer_menu_item}`}>개인정보 처리방침</li>
          <li className={`${style.footer_menu_item}`}>속도 테스트</li>
        </ul>
        <ul className={`${style.footer_menu_list}`}>
          <li className={`${style.footer_menu_item}`}>고객 센터</li>
          <li className={`${style.footer_menu_item}`}>입사 정보</li>
          <li className={`${style.footer_menu_item}`}>쿠키 설정</li>
          <li className={`${style.footer_menu_item}`}>법적 고지</li>
        </ul>
        <ul className={`${style.footer_menu_list}`}>
          <li className={`${style.footer_menu_item}`}>계정</li>
          <li className={`${style.footer_menu_item}`}>넷플릭스 지원 디바이스</li>
          <li className={`${style.footer_menu_item}`}>회사 정보</li>
          <li className={`${style.footer_menu_item}`}>오직 넷플릭스에서</li>
        </ul>
        <ul className={`${style.footer_menu_list}`}>
          <li className={`${style.footer_menu_item}`}>미디어 센터</li>
          <li className={`${style.footer_menu_item}`}>이용 약관</li>
          <li className={`${style.footer_menu_item}`}>문의하기</li>
        </ul>
      </div>
      <div className={`${style.copyright}`}>
        <p>© Copyright 2024-04-06~ (KimHyeonJu)</p>
        <p>https://github.com/hyesom2/5_Netflix_Demo</p>
        <p>상업적 용도가 아닌 개인 프로젝트 입니다.</p>
      </div>
    </div>
  )
}

export default Footer;
