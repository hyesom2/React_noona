import React from 'react';
// > css
import './MovieCard.style.css';
// > icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
// > react-router
import { Link } from 'react-router-dom';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({ movie }) => {
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

  return (
    <Link to={`/${movie?.id}`}>
      <div className="movie_card">
        <img src={ `${img_base_url}` + movie?.poster_path } alt={ movie?.title } />
        <div className="movie_card_info">
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
        </div>
      </div>
    </Link>
  )
}

export default MovieCard;
