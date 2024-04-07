import React from 'react';
import './Homepage.style.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import { Desktop } from '../../hooks/responsive';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';

const Homepage = () => {
  return (
    <>
      <div className="homepage_wrapper">
        <Banner />
        <PopularMovieSlide />
      </div>
      <Desktop>
        <Footer />
      </Desktop>
    </>
  )
}

export default Homepage;

// 1. 배너 제작 => popular movie 들고와서 첫번째 item을 보여준다. => api로 보여준다.
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie
// Homepage 안의 components => 홈페이지 안에서만 쓰이는 컴포넌트들