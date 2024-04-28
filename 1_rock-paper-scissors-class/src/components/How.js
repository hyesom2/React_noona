import React, { Component } from 'react'
import '../css/how.css';

export default class How extends Component {
  render() {
    return (
      <div className="how-wrap">
        <img src="https://i.namu.wiki/i/Oxg73MRzvQD9DSPoTjU4IFRVensknbLhJoziNhKQ5KCge_QuCZkfDQor6sn10ejQ0TA0pKKFta6uFcHZids62w.webp" alt="게임설명(출처-나무위키)" />
        <button 
          type="button" 
          onClick={ () => this.props.modalClose() }> X </button>
      </div>
    )
  }
}