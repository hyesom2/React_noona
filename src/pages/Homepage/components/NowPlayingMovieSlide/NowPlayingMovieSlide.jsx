import React from 'react';
// > css (styled-components)
import * as s from './NowPlayingMovieSlide.style.js';
// > hooks
import { useNowPlayingMoviesQuery } from '../../../../hooks/useNowPlayingMovies';
// > slider
import MovieSlider from '../../../../common/MovieSlider/MovieSlider.jsx';
import { responsive } from '../../../../constants/SliderResponsive.js';

const NowPlayingMovieSlide = () => {
  const { data, isLoading, isError, error } = useNowPlayingMoviesQuery();
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError) {
    return console.log(error.message)
  }

  return (
    <s.Container>
      <MovieSlider title="현재 상영 중인 영화" movies={ data.results } responsive={ responsive }/>
    </s.Container>
  )
}

export default NowPlayingMovieSlide;
