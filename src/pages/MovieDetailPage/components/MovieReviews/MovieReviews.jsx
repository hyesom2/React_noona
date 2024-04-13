import React, { useState } from "react";
// > css (styled-components)
import * as s from "./MovieReviews.style.js";
// > react-router-dom
import { useParams } from "react-router-dom";
// > hook
import { useMovieReviewsQuery } from "../../../../hooks/useMovieReviews.js";
import MovieReviewCard from "./MovieReviewCard/MovieReviewCard.jsx";
import Header from '../../../../Global/components/Header.jsx';

const MovieReviews = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const { data:review } = useMovieReviewsQuery(id);
  console.log(review);

  return (
    <s.Container>
      <s.Header className="header">
        <Header title="영화 리뷰" open={ open } setOpen={ setOpen }/>
      </s.Header>
      <div>
        {
          open === true 
          ?
            review.results.length === 0
            ?
            <span>작성된 리뷰가 없습니다.</span>
            :
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
