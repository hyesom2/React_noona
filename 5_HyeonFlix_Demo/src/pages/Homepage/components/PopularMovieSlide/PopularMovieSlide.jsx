import React from "react";
// > css (styled-components)
import * as s from "./PopularMovieSlide.style.js";
// > hooks
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
// > slider
import MovieSlider from '../../../../common/MovieSlider/MovieSlider.jsx';
import { responsive } from '../../../../constants/SliderResponsive';

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError) {
    return console.log(error.message)
  }

  return (
    <s.Container>
      <MovieSlider title="인기 영화" movies={ data.results } responsive={ responsive } />
    </s.Container>
  )
}

export default PopularMovieSlide;
