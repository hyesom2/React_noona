import React from "react";
// > css (styled-components);
import * as s from "./Footer.style.js";
// > icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <s.Container>
      <s.SnsGroup>
        <FontAwesomeIcon className="icon_sns" icon={faSquareFacebook} />
        <FontAwesomeIcon className="icon_sns" icon={faSquareInstagram} />
        <FontAwesomeIcon className="icon_sns" icon={faTwitter} />
        <FontAwesomeIcon className="icon_sns" icon={faYoutube} />
      </s.SnsGroup>
      <s.FooterMenu>
        <ul className="footer_menu_list">
          <li className="footer_menu_item">자주 묻는 질문</li>
          <li className="footer_menu_item">개인정보 처리방침</li>
          <li className="footer_menu_item">속도 테스트</li>
        </ul>
        <ul className="footer_menu_list">
          <li className="footer_menu_item">고객 센터</li>
          <li className="footer_menu_item">깃허브 정보</li>
          <li className="footer_menu_item">쿠키 설정</li>
          <li className="footer_menu_item">법적 고지</li>
        </ul>
        <ul className="footer_menu_list">
          <li className="footer_menu_item">계정</li>
          <li className="footer_menu_item">현플릭스 지원 디바이스</li>
          <li className="footer_menu_item">개인 정보</li>
          <li className="footer_menu_item">오직 현플릭스에서</li>
        </ul>
        <ul className="footer_menu_list">
          <li className="footer_menu_item">미디어 센터</li>
          <li className="footer_menu_item">이용 약관</li>
          <li className="footer_menu_item">문의하기</li>
        </ul>
      </s.FooterMenu>
      <s.Copyright>
        <p>© Copyright 2024-04-06~ (KimHyeonJu)</p>
        <p>https://github.com/hyesom2/5_HyeonFlix_Demo</p>
        <p>상업적 용도가 아닌 개인 프로젝트 입니다.</p>
      </s.Copyright>
    </s.Container>
  )
}

export default Footer;
