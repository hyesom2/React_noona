import React, { useState } from 'react';
// > css (styled-components);
import * as s from './MovieRecommendationSlide.style.js';
// > hook
import { useMovieRecommendationQuery } from '../../../../hooks/useMovieRecommendation.js';
// > slider
import MovieSlider from '../../../../common/MovieSlider/MovieSlider.jsx';
import { responsive } from '../../../../constants/SliderResponsive.js';
import Header from '../../../../Global/components/Header.jsx';

const MovieRecommendation = () => {
  const { data, isLoading, isError, error } = useMovieRecommendationQuery();
  const [open, setOpen] = useState(false);

  if(isLoading) {
    return <h1>Loading...</h1>
  }
  if(isError) {
    alert(error.message);
  }

  return (
    <s.Container>
      <Header title="추천 영화" open={ open } setOpen={ setOpen } />
      {
        open === true
        ?
        <MovieSlider movies={ data?.results } responsive={ responsive }/>
        :
        null
      }
    </s.Container>
  )
}

export default MovieRecommendation;
