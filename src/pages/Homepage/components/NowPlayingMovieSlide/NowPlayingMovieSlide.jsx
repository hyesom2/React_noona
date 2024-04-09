import React from 'react';
// > css
import './NowPlayingMovieSlide.style.css';
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
    <div className="now_playing_slide">
      <MovieSlider title="Now Playing Movies" movies={ data.results } responsive={ responsive }/>
    </div>
  )
}

export default NowPlayingMovieSlide;
