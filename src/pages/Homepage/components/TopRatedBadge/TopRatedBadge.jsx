import React from "react";
// > css (styled-components)
import * as s from "./TopRatedBadge.style.js";

const TopRatedBadge = ({ index }) => {
  return (
    <s.Rank_Badge>
      <strong>TOP</strong>
      <span>{ index + 1 }</span>
    </s.Rank_Badge>
  )
}

export default TopRatedBadge;
