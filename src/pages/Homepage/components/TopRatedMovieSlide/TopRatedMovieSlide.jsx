import React from 'react';
// > css
import './TopRatedMovieSlide.style.css';
// > react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// > hooks
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';
// > components
import MovieCard from '../MovieCard/MovieCard';
import TopRatedBadge from '../TopRatedBadge/TopRatedBadge.jsx';

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError) {
    return console.log(error.message)
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  return (
    <div className="top_rated_slide">
      <h1 className="top_rated_title">Top Rated Movies</h1>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        showDots={false}
        arrows
        autoPlaySpeed={3000}
        // centerMode
        // containerClass="container"
        className="slide_container"
        itemClass="slide_item"
        draggable
        focusOnSelect={false}
        infinite
        autoPlay
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {
          data.results && data.results.map((movie, index) => (
            <div className="top_rated_wrap">
              <TopRatedBadge key={index} index={ index }/>
              <MovieCard movie={movie} key={index} />
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default TopRatedMovieSlide;
