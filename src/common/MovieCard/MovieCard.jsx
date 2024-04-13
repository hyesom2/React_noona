import React from 'react';
// > css
import * as s from './MovieCard.style.js';
// > icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
// > react-router
import { useNavigate } from 'react-router-dom';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
// > 
import TopRatedBadge from "../../pages/Homepage/components/TopRatedBadge/TopRatedBadge.jsx";

const MovieCard = ({ movie, title, index }) => {
  const img_base_url = `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/`;
  const { data:genreData } = useMovieGenreQuery(); // data:genreData는 data이름을 genreData로 재정의한다는 뜻
  const showGenre = (genreIdList) => {
    if( !genreData ){ return [] };
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };
  const navigate = useNavigate();
  const getMovieDetails = () => {
    navigate(`/movies/${movie?.id}`)
  }

  return (
    <s.Movie_Card onClick={ getMovieDetails }>
      {
        title === "Top Rated Movies"
        ?
        <TopRatedBadge index={ index } />
        :
        null
      }
      <img src={ `${img_base_url}` + movie?.poster_path } alt={ movie?.title } />
      <s.Movie_Card_Info className="movie_card_info">
        <h3 className="movie_title">{ movie?.title }</h3>
        <ul className="movie_genre_list">
          {
            showGenre(movie?.genre_ids).map((genre, index) => (
              <li className="movie_genre_item" key={ index }>{ genre }</li>
            ))
          }
        </ul>
        <p className="movie_release_date">{ movie?.release_date }</p>
        <FontAwesomeIcon icon={faEllipsis} className="icon-more" />
      </s.Movie_Card_Info>
    </s.Movie_Card>
  )
}

export default MovieCard;
