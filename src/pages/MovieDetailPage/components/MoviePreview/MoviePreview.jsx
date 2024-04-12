import React, { useState } from "react";
// > css (styled-components)
import * as s from './MoviePreview.style.js';
// > hook
import { useMoviePreviewQuery } from '../../../../hooks/useMoviePreview.js';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import Header from '../../../../Global/components/Header.jsx';

const MoviePreview = () => {
  const { id } = useParams();
  const { data } = useMoviePreviewQuery(id);
  const [open, setOpen] = useState(true);

  const opts = {
    width: '250',
    height: '150',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <s.Container>
      <Header title="예고편 미리보기" open={ open } setOpen={ setOpen } />
      {
        open === true 
        ?
        <div className="player_wrap">
          {
            data?.results.length >= 5
            ?
            data?.results.slice(0, 5).map((player, index) => (
              <div className="player" key={index}>
                <YouTube videoId={ player.key } opts={opts} />
                <span>{ player.name }</span>
              </div>
            ))
            :
            data?.results.map((player, index) => (
              <div className="player" key={index}>
                <YouTube videoId={ player.key } opts={opts} />
                <span>{ player.name }</span>
              </div>
            ))
          }
        </div>
        :
        null
      }
    </s.Container>
  )
}

export default MoviePreview;
