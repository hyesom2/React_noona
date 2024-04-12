import React, { useState } from "react";
// > css (styled-components)
import * as s from "./MovieReviews.style.js";
// > icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
// > react-router-dom
import { useParams } from "react-router-dom";
// > hook
import { useMovieReviewsQuery } from "../../../../hooks/useMovieReviews.js";
import MovieReviewCard from "./MovieReviewCard/MovieReviewCard.jsx";

const MovieReviews = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const { data:review } = useMovieReviewsQuery(id);

  return (
    <s.Container>
      <s.Header>
        <h1 className="title">영화 리뷰</h1>
        {
          open === true 
          ?
          <div>
            <FontAwesomeIcon icon={faMinus} className="icon" onClick={ () => setOpen(false) } />
          </div>
          :
          <div>
            <FontAwesomeIcon icon={faPlus} className="icon" onClick={ () => setOpen(true) }/>
          </div>
        }
      </s.Header>
      <div>
        {
          open === true 
          ?
          review?.results.map((review_item, index) => (
            <MovieReviewCard review={ review_item } key={ index }/> 
          ))
          :
          null
        }
      </div>
    </s.Container>
  )
}

export default MovieReviews;
