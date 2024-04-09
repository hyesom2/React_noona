import React from 'react';
// > css
import './PopularMovieSlide.style.css';
// > react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// > hooks
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
// > components
import MovieCard from '../MovieCard/MovieCard';

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
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
    <div className="popular_slide">
      <h1 className="popular_title">Popular Movies</h1>
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
            <MovieCard movie={movie} key={index} />
          ))
        }
      </Carousel>
    </div>
  )
}

export default PopularMovieSlide;
