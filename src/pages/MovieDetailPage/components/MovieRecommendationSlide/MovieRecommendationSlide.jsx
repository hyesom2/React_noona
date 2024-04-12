import React from 'react';
// > css (styled-components);
import * as s from './MovieRecommendationSlide.style.js';
// > hook
import { useMovieRecommendationQuery } from '../../../../hooks/useMovieRecommendation.js';
// > slider
import MovieSlider from '../../../../common/MovieSlider/MovieSlider.jsx';
import { responsive } from '../../../../constants/SliderResponsive.js';

const MovieRecommendation = () => {
  const { data, isLoading, isError, error } = useMovieRecommendationQuery();

  if(isLoading) {
    return <h1>Loading...</h1>
  }
  if(isError) {
    alert(error.message);
  }

  return (
    <s.Container>
      <MovieSlider title="추천 영화" movies={ data?.results } responsive={ responsive }/>
    </s.Container>
  )
}

export default MovieRecommendation;
