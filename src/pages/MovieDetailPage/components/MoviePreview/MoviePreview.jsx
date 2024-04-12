import React from 'react';
// > css (styled-components)
import * as s from './MoviePreview.style.js';
// > hook
import { useMoviePreviewQuery } from '../../../../hooks/useMoviePreview.js';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';

const MoviePreview = () => {
  const { id } = useParams();
  const { data } = useMoviePreviewQuery(id);

  const opts = {
    width: '250',
    height: '150',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <s.Container>
      <h1 className="preview_title">예고편 미리보기</h1>
      <div className="player_wrap">
        {
          data?.results.map((player) => (
            <div className="player">
              <YouTube videoId={ player.key } opts={opts} />
              <span>{ player.name }</span>
            </div>
          ))
        }
      </div>
    </s.Container>
  )
}

export default MoviePreview;
