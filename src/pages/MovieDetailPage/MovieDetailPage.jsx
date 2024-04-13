import React from 'react';
// > css (styled-components)
import * as s from './MovieDetailPage.style.js';
// > icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// > router
import { useParams } from 'react-router-dom';
// > hook
import { useMovieDetailQuery } from '../../hooks/useMovieDetails';
// > components
import MoviePreview from './components/MoviePreview/MoviePreview';
import MovieRecommendationSlide from './components/MovieRecommendationSlide/MovieRecommendationSlide';
import MovieReviews from './components/MovieReviews/MovieReviews.jsx';

const MovieDetailPage = () => {
  const movie_background_url = `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/`;
  const movie_poster_url = `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/`;
  const { id } = useParams();
  const { data } = useMovieDetailQuery(id);

  return (
    <s.Container>
      <s.Movie_Detail_Banner>
        <img src={ `${movie_background_url}` + data?.backdrop_path } alt="" className="detail_bg" />
        <s.Movie_Detail_Banner_Info>
          <div className="banner_info_poster">
            <img src={ `${movie_poster_url}` + data?.poster_path } alt="" className="poster_img" />
          </div>
          <div className="banner_info">
            <span className="banner_info_age">{ data?.adult ? "18+" : "18 under" }</span>
            <h1 className="banner_info_title">{ data?.title }</h1>
            <span className="banner_info_tagline">{ data?.tagline ? `- ${ data?.tagline } -`: null }</span>
            <s.Info_Button_List>
              <li className="info_button_item">
                <s.Button type="button" className="play_button">
                  <FontAwesomeIcon icon={faPlay} className="play_icon" />
                  Play
                </s.Button>
              </li>
              <li className="info_button_item plus_button">
                <s.Button type="button">
                  <FontAwesomeIcon icon={faPlus} className="" />
                </s.Button>
              </li>
              <li className="info_button_item up_button">
                <s.Button type="button">
                  <FontAwesomeIcon icon={faThumbsUp} className="" />
                </s.Button>
              </li>
            </s.Info_Button_List>
          </div>
        </s.Movie_Detail_Banner_Info>
      </s.Movie_Detail_Banner>
      <s.Movie_Detail_Info>
        <div className="movie_info">
          <p className="overview">{ data?.overview }</p>
        </div>
        <ul className="movie_info_list">
          <li className="movie_info_item">
          <strong className="title">장르</strong>           
          {
            data?.genres.map((genre, index) => (
              <span key={ index } className="genres">{ genre.name }</span>
            ))
          }
          </li>
          <li className="movie_info_item"><strong className="title">평점</strong><span>{ data?.vote_average }점</span></li>
          <li className="movie_info_item"><strong className="title">개봉일</strong><span>{ data?.release_date }</span></li>
          <li className="movie_info_item"><strong className="title">상영시간</strong><span>{ data?.runtime }분</span></li>
        </ul>
      </s.Movie_Detail_Info>
      <MoviePreview />
      <MovieRecommendationSlide />
      <MovieReviews />
    </s.Container>
  )
}

export default MovieDetailPage;
