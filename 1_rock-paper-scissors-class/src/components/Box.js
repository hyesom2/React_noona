import React, { Component } from 'react'
import '../css/box.css';

export default class Box extends Component {
  constructor() {
    super();
    this.result = "";
  }

  computerResult = () => {
    if(this.props.title === "Computer" && this.props.result !== "Tie!!" && this.props.result !== ""){
      this.result = this.props.result === "✨Win✨" ? "Lose😭" : "✨Win✨";
    } else {
      this.result = this.props.result;
    }
  }

  render() {
    this.computerResult();

    return (
      <div className={ `box ${this.result === "✨Win✨" ? "win" : this.result === "Lose😭" ? "lose" : "tie"}` }>
        <h1>{ this.props.title }</h1>
        <img src={ this.props.item && this.props.item.img } alt="" />
        <strong>{ this.result }</strong>
      </div>
    )
  }
}
