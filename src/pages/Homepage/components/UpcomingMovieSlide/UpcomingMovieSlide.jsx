import React from 'react';
// > css
import './UpcomingMovieSlide.style.css';
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
    <div className="upcoming_slide">
      <MovieSlider title="Upcoming Movies" movies={ data.results } responsive={ responsive } />
    </div>
  )
}

export default UpcomingMovieSlide;
