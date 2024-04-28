import React from 'react';
// css (styled-components)
import * as s from "./Paginate.style.js";
// > pagination
import ReactPaginate from 'react-paginate';

const Paginate = ({ data, page, setPage }) => {
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  console.log(data);

  return (
    <s.Container>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={ Math.ceil(data?.total_results / data?.total_pages) }
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

export default Paginate;
