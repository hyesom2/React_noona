import React, { useState } from 'react';
import { useMovieSearchQuery } from '../../hooks/useMovieSearch';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../common/MovieCard/MovieCard';
// > styled-components
import * as s from './MoviePage.style.js';
// > pagination
import ReactPaginate from 'react-paginate';

const MoviePage = () => {
  const [page, setPage] = useState(1);
  const [query] = useSearchParams();
  const keyword = query.get("query");
  const { data } = useMovieSearchQuery({ keyword, page });
  console.log(data);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <s.Container>
      <div className="searched">
        {
          data?.results.map((movie, index) => (
            <MovieCard movie={ movie } key={ index } />
          ))
        }
      </div>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={ data?.total_results / data?.total_pages }
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={page - 1}
      />
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