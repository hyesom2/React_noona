import React from 'react';
// > css
import './TrendingMovie.style.css';
// > hooks
import { useTrendingMovieQuery } from '../../../../hooks/useTrendingMovies';
// > slider
import MovieSlider from '../../../../common/MovieSlider/MovieSlider.jsx';
import { responsive } from '../../../../constants/SliderResponsive.js';

const TrendingMovieSlide = () => {
  const { data, isLoading, isError, error } = useTrendingMovieQuery();
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError) {
    return console.log(error.message)
  }

  return (
    <div className="trending_slide">
      <MovieSlider title="Trending Movies" movies={ data.results } responsive={ responsive } />
    </div>
  )
}

export default TrendingMovieSlide;
