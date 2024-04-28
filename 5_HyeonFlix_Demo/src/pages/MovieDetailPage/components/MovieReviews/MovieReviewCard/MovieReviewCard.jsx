import React from "react";
// > css (styled-components)
import * as s from "./MovieReviewCard.style.js";
// > react-router-dom
import { Link } from "react-router-dom";
import RatingStar from '../../../../../common/RatingStar/RatingStar.jsx';

const MovieReviewCard = ({ review }) => {
  const avatar_basic_url = `https://media.themoviedb.org/t/p/w45_and_h45_face`;

  return (
    <s.Container>
      <s.Header>
        {
          review.author_details.avatar_path === null
          ?
          <div className="user_avatar">
            <img src="https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png" alt="" />
          </div>
          :
          <div className="user_avatar">
            <img src={ `${avatar_basic_url}` + review.author_details.avatar_path } alt="" />
          </div>
        }
        <div className="user_info">
          <strong className="user_name">{ review.author_details.username }</strong>
          <div className="rating">
            <RatingStar rating={ review.author_details.rating } />
            <span>
              {
                review.author_details.rating === null
                ?
                "0"
                :
                `${review.author_details.rating}`
              } 점
            </span>
          </div>
        </div>
      </s.Header>
      <s.Content>
        {
          review.content.length >= 500
          ?
          <div>
            {
              review.content.slice(0, 500)
            }
            <Link to={ review.url } target="_blank" > ... </Link>
          </div>
          :
          `${ review.content }`
        }
      </s.Content>
      <s.Footer>
        <span className="date created_date">작성일 : { review.created_at }</span>
        <span className="date updated_date">수정일 : { review.updated_at }</span>
      </s.Footer>
    </s.Container>
  )
}

export default MovieReviewCard
