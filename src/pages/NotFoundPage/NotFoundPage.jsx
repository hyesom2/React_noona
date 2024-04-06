import React from 'react';
import style from './NotFoundPage.module.css';
// > react-router
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className={`${style.container}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/error-bg.png'})` }}>
      <h1 className={`${style.error_title}`}>
        길을 잃으셨나요?
      </h1>
      <p className={`${style.error_desc}`}>죄송합니다. 해당 페이지를 찾을 수 없습니다.<br />홈페이지로 이동해 다양한 콘텐츠를 만나보세요.</p>
      <button type="button" className={`${style.home_button}`}>
        <Link to="/">
          Netflix 홈
        </Link>
      </button>
      <div className={`${style.error_code}`}>
        <span>오류코드:<strong>NSES-404</strong></span>
      </div>
    </div>
  )
}

export default NotFoundPage;
