import React from "react";
// > css (styled-components)
import * as s from "./UpcomingMovieSlide.style.js";
// > hooks
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies';
// > slider
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/SliderResponsive';

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
  if(isLoading) {
    return <h1>{ isLoading }</h1>
  }
  if(isError) {
    return console.log(error);
  }

  return (
    <s.Container>
      <MovieSlider title="개봉 예정 영화" movies={ data.results } responsive={ responsive } />
    </s.Container>
  )
}

export default UpcomingMovieSlide;
