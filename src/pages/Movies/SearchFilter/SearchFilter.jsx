import React from "react";
// > css (styled-components)
import * as s from "./SearchFilter.style.js";
// > components
import Header from "../../../Global/components/Header.jsx";

const SearchFilter = ({ genreData, setSortCategory, setGenreCategory, setSortOpen }) => {
  const sortReset = () => {
    setSortCategory("");
    setGenreCategory("");
  }
  return (
    <s.Container>
      <s.ButtonGroup>
        <span type="button" onClick={ () => setSortOpen(false) }>X</span>
        <span type="button" onClick={ () => sortReset() }>초기화</span>
      </s.ButtonGroup>
      <Header title="장르별 정렬" />
      <ul className="sort_list">
        {
          genreData?.map((genre) => (
            <li key={ genre.id } onClick={ () => setGenreCategory(genre.id) } className="sort_item">{ genre.name }</li>
          ))
        }
      </ul>
      <Header title="인기순 정렬"/>
      <ul className="sort_list">
        <li onClick={ () => setSortCategory("popular_asc")} className="sort_item">인기 낮은 순</li>
        <li onClick={ () => setSortCategory("popular_desc")} className="sort_item">인기 높은 순</li>
      </ul>
    </s.Container>
  )
}

export default SearchFilter;
