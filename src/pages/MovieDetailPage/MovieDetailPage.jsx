import React from 'react';
// > css
import './MovieDetailPage.style.css';
// > router
import { useParams } from 'react-router-dom';
// > 
import { useMovieDetailQuery } from '../../hooks/useMovieDetails';

const MovieDetailPage = () => {
  const movie_background_url = `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/`;
  const { id } = useParams();
  const { data } = useMovieDetailQuery(id);
  console.log(data);

  return (
    <div>
      <div className="movie_detail_banner">
        <img src={ `${movie_background_url}` + data?.backdrop_path } alt="" />
        <div className="movie_detail_banner_info">
          <h1>{ data?.title }</h1>
          <ul>
            <li>
              <button type="button">play아이콘 Play</button>
            </li>
            <li>
              <button type="button">+</button>
            </li>
            <li>
              <button type="button">따봉아이콘</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailPage;
