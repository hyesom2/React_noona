import React from 'react';
// > css (styled-components)
import * as s from './Banner.style.js';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Desktop, Mobile } from '../../../../hooks/responsive';

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
    <>
      <Desktop>
        <s.Banner style={{ backgroundImage: `url(${banner_background_url})`}}>
          <s.Banner_Info>
            <h1 className="banner_info_title">{ data?.results[1].title }</h1>
            <ul className="banner_info_list">
              <li className="banner_info_item">{ data?.results[1].release_date }</li>
              <li className="banner_info_item">{ data?.results[1].vote_average }</li>
              <li className="banner_info_item">{ data?.results[1].original_language }</li>
            </ul>
            <p className="banner_info_desc">{ data?.results[1].overview}</p>
          </s.Banner_Info>
        </s.Banner>
      </Desktop>
      <Mobile>
        <div className="banner_background_mobile" style={{ backgroundImage: `url(${banner_background_url})`}}>
          <div className="banner_info_mobile">
            <h1 className="banner_info_title_mobile">{ data?.results[1].title }</h1>
            <ul className="banner_info_list_mobile">
              <li>{ data?.results[1].release_date }</li>
              <li>{ data?.results[1].vote_average }</li>
              <li>{ data?.results[1].original_language }</li>
            </ul>
            <p className="banner_info_desc_mobile">{ data?.results[1].overview}</p>
          </div>
        </div>
      </Mobile>
    </>
  )
}

export default Banner;
