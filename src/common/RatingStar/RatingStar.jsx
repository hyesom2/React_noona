import React from "react";
// > css (styled-components)
import * as s from "./RatingStar.style.js";
// > icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingStar = ({ rating }) => {
  return (
    <s.Container>
      {
        rating >= 9 
        ?
        <div className="star-group">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        :
        rating >= 7
        ?
        <div className="star-group">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        :
        rating >= 5
        ?
        <div className="star-group">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        :
        rating >= 3
        ?
        <div className="star-group">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        :
        rating >= 1
        ?
        <div className="star-group">
          <FontAwesomeIcon icon={faStar} />
        </div>
        :
        <div className="star-group zero">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
      }
    </s.Container>
  )
}

export default RatingStar;