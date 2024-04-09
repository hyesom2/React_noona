import React from 'react'
import './TopRatedBadge.style.css';

const TopRatedBadge = ({ index }) => {
  return (
    <div className="top_rated_card">
      <strong>TOP</strong>
      <span>{ index + 1 }</span>
    </div>
  )
}

export default TopRatedBadge;
