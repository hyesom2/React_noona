import React from 'react';
// > css (styled-components)
import * as s from './Banner.style.js';
// > hook
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if(isLoading){
    <h1>Loading...</h1>
  }
  if(isError) {
    <h1>{ error.message }</h1>
  }

  const banner_background_url = `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data?.results[1].poster_path}`;

  return (
    <s.Container style={{ backgroundImage: `url(${banner_background_url})` }}>
      <s.Banner_Info>
        <h1 className="banner_info_title">{ data?.results[1].title }</h1>
        <ul className="banner_info_list">
          <li className="banner_info_item">{ data?.results[1].release_date }</li>
          <li className="banner_info_item">{ data?.results[1].vote_average }</li>
          <li className="banner_info_item">{ data?.results[1].original_language }</li>
        </ul>
        <p className="banner_info_desc">
          {
            data?.results[1].overview.length >= 200
            ?
            data?.results[1].overview.slice(0, 199) + "..."
            :
            data?.results[1].overview
          }
        </p>
      </s.Banner_Info>
    </s.Container>
  )
}

export default Banner;
