import React from 'react';
// > react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// > components
import MovieCard from '../MovieCard/MovieCard';
import TopRatedBadge from '../../pages/Homepage/components/TopRatedBadge/TopRatedBadge';

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div>
      <h1 className="top_rated_title">{ title }</h1>
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
          title === "Top Rated Movies"
          ?
          movies && movies.map((movie, index) => (
            <>
              <TopRatedBadge index={ index }/>
              <MovieCard movie={movie} key={index} />
            </>
          ))
          :
          movies && movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))
        }
      </Carousel>
    </div>
  )
}

export default MovieSlider;
