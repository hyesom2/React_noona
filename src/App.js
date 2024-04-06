import React from 'react';
// > react-router
import { Routes, Route } from 'react-router-dom';
// > pages
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <AppLayout /> }>
        <Route index element={ <HomePage />} />
        <Route path="/movies">
          {/* 영화 관련 router */}
          <Route index element={ <MoviePage /> } />
          <Route path=":id" element={ <MovieDetailPage /> } />
        </Route>
      </Route>

      <Route path="*" element={ <NotFoundPage />} />
    </Routes>
  )
}

export default App;

// 1. 메인홈페이지 -> /
// 2. 영화 전체를 보여주는 페이지(서치) -> /movies
// 3. 영화 디테일 페이지 -> /movies/:id
// 4. 추천영화 -> /movies/:id/recommendation
// 5. 영화리뷰 -> /movies/:id/reviews