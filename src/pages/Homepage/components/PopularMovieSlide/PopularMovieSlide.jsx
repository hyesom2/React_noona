import React from 'react';
// > css
import './PopularMovieSlide.style.css';
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
    <div className="popular_slide">
      <MovieSlider title="Popular Movies" movies={ data.results } responsive={ responsive } />
    </div>
  )
}

export default PopularMovieSlide;
