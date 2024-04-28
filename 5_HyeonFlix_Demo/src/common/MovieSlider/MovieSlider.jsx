import React from 'react';
// > css (styled-components)
import * as s from "./MovieSlider.style.js";
// > react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// > components
import MovieCard from '../MovieCard/MovieCard';

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <s.Container>
      <h1 className="movie_slider_title">{ title }</h1>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        showDots={false}
        arrows
        autoPlaySpeed={3000}
        // centerMode
        // containerClass="container"
        className="slide_container"
        itemClass="movie_slide_item"
        draggable
        focusOnSelect={false}
        infinite
        // autoPlay
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {
          movies && movies.map((movie, index) => (
            <MovieCard movie={movie} title={ title } index={ index } key={ index } />
          ))
        }
      </Carousel>
    </s.Container>
  )
}

export default MovieSlider;
