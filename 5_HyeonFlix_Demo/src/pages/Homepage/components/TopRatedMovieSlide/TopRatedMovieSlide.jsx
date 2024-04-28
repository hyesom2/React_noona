import React from 'react';
// > css (styled-components)
import * as s from './TopRatedMovieSlide.style.js';
// > hooks
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';
// > slider
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/SliderResponsive';

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError) {
    return console.log(error.message)
  }

  return (
    <s.Container>
      <MovieSlider title="TOP 20 영화들" movies={ data.results } responsive={ responsive } />
    </s.Container>
  )
}

export default TopRatedMovieSlide;
