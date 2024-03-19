import React from 'react'
import '../css/box.css';

const Box = (props) => {
  // console.log("props", props);
  // console.log(props.result);
  let result;
  if(props.title === "Computer" && props.result !== "Tie!!" && props.result !== "") {
    result = props.result === "✨Win✨" ? "Lose😭" : "✨Win✨"
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result === "✨Win✨" ? "win" : result === "Lose😭" ? "lose" : "tie"}`}>
      <h1>{ props.title }</h1>
      <img src={ props.item && props.item.img } alt="" />
      <strong>{ result }</strong>
    </div>
  )
}

export default Box;
