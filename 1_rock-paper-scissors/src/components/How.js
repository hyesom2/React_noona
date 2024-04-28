import React from 'react';
import '../css/how.css';

const How = (props) => {
  return (
    <div className="how-wrap">
      <img src="https://i.namu.wiki/i/Oxg73MRzvQD9DSPoTjU4IFRVensknbLhJoziNhKQ5KCge_QuCZkfDQor6sn10ejQ0TA0pKKFta6uFcHZids62w.webp" alt="게임설명(출처-나무위키)" />
      <button type="button" onClick={ props.modalHandler }> X </button>
    </div>
  )
}

export default How;
