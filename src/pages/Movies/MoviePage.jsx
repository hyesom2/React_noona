import React, { useState, useEffect } from 'react';
// > css (styled-components)
import * as s from './MoviePage.style.js';
// > icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
// > hooks
import { useMovieSearchQuery } from '../../hooks/useMovieSearch';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre.js';
import { useSearchParams } from 'react-router-dom';
// > components
import MovieCard from '../../common/MovieCard/MovieCard.jsx';
import Paginate from '../../common/Paginate/Paginate.jsx';
import SearchFilter from './SearchFilter/SearchFilter.jsx';

const MoviePage = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [genreCategory, setGenreCategory] = useState("");
  const [sortCategory, setSortCategory] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  
  const [query] = useSearchParams();
  const keyword = query.get("query");
  const { data } = useMovieSearchQuery({ keyword, page });
  const { data:genreData } = useMovieGenreQuery();

  useEffect(() => {
    let movie_data = data?.results || [];

    if(sortCategory) {
      if(sortCategory === "popular_asc") {
        movie_data = movie_data.sort((a, b) => b.popularity - a.popularity);
      }
      if(sortCategory === "popular_desc") {
        movie_data = movie_data.sort((a, b) => a.popularity - b.popularity);
      }
    };

    if(genreCategory) {
      movie_data = movie_data.filter((movie) => 
        movie.genre_ids.includes(genreCategory)
      );
      setFilteredMovies(movie_data);
    }

    // eslint-disable-next-line
  }, [sortCategory, genreCategory, data])

  return (
    <s.Container>
      <s.Filter onClick={ () => setSortOpen(true) }>
        <FontAwesomeIcon icon={faFilter} />
      </s.Filter>
      {
        sortOpen === true
        ?
        <SearchFilter 
          genreData={ genreData } 
          setSortCategory={ setSortCategory } 
          setGenreCategory={ setGenreCategory }
          setSortOpen={ setSortOpen }/>
        :
        null
      }
      <s.searchedMovies> 
        {
          sortCategory === "" && genreCategory === ""
          ?
          data?.results.map((movie, index) => (
            <MovieCard movie={ movie } key={ index } />
          ))
          :
          filteredMovies?.map((movie, index) => (
            <MovieCard movie={ movie } key={ index} />
          ))
        }
      </s.searchedMovies>
      <Paginate data={ data } page={ page } setPage={ setPage }/>
    </s.Container>
  )
}

export default MoviePage;

// 경로 2가지
// 1. navbar에서 click에서 온 경우 => popular movie 보여주기
// 2. keyword를 입력해서 온 경우(검색) => keyword와 관련된 영화들을 보여줌

// 페이지네이션
// 1. 설치
// 2. page, state 만들기
// 3. 페이지네이션 클릭 때마다 page 변경
// 4. page값이 바뀔때마다 useSearchMovie에서 page를 넣어서 fetch