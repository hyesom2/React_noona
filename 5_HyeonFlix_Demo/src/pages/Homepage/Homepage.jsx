import React from 'react';
// > css
import * as s from './Homepage.style.js';
// > components
import Banner from './components/Banner/Banner';
import TopRatedMovieSlide from './components/TopRatedMovieSlide/TopRatedMovieSlide';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import NowPlayingMovieSlide from './components/NowPlayingMovieSlide/NowPlayingMovieSlide';
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide';
import Footer from './components/Footer/Footer';

const Homepage = () => {
  return (
    <>
      <s.Container>
        <Banner />
        <s.SlideWrap>
          <TopRatedMovieSlide />
          <PopularMovieSlide />
          <NowPlayingMovieSlide />
          <UpcomingMovieSlide />
        </s.SlideWrap>
      </s.Container>
      <Footer />
    </>
  )
}

export default Homepage;

// 1. 배너 제작 => popular movie 들고와서 첫번째 item을 보여준다. => api로 보여준다.
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie
// Homepage 안의 components => 홈페이지 안에서만 쓰이는 컴포넌트들