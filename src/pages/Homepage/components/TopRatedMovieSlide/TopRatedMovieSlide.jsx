import React from 'react';
// > css
import './TopRatedMovieSlide.style.css';
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
    <div className="top_rated_slide">
      <MovieSlider title="Top Rated Movies" movies={ data.results } responsive={ responsive } />
    </div>
  )
}

export default TopRatedMovieSlide;
