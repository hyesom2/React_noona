import React from 'react';
import { useState } from 'react';
import './App.css';
import Box from './components/Box';
import How from './components/How';

const choice = {
  rock: {
    name: "Rock",
    img: `${process.env.PUBLIC_URL}images/rock.png`
  },
  scissors: {
    name: "Scissors",
    img: `${process.env.PUBLIC_URL}images/scissors.png`
  },
  paper: {
    name: "Paper",
    img: `${process.env.PUBLIC_URL}images/paper.png`
  }
}

const App = () => {
  // UI가 바뀌는것을 하려면 state에 넣어주자
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [computerCount, setComputerCount] = useState(0);
  const [modal, setModal] = useState(false);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    // judgement(choice[userChoice], computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    countHandler(choice[userChoice], computerChoice);
  };
  const randomChoice = () => {
    let choiceArray = Object.keys(choice); // Object.key : 객체의 key값만 뽑아서 array로 만들어주는 함수
    // console.log(choiceArray); // ['rock', 'scissors', 'paper']
    let randomItem = Math.floor(Math.random() * choiceArray.length);
    // console.log('randomItem', randomItem);
    let finalItem = choiceArray[randomItem];
    // console.log('final', finalItem);
    
    return choice[finalItem];
  };
  const countHandler = (user, computer) => {
    if(user.name === computer.name) {
      setUserCount(userCount);
      setComputerCount(computerCount);
    }
    else if(user.name === "Rock") return computer.name === "Scissors" ? `${setUserCount(userCount+1)}` : `${setComputerCount(computerCount+1)}`
    else if(user.name === "Scissors") return computer.name === "Paper" ? `${setUserCount(userCount+1)}` : `${setComputerCount(computerCount+1)}`
    else if(user.name === "Paper") return computer.name === "Rock" ? `${setUserCount(userCount+1)}` : `${setComputerCount(computerCount+1)}`
  }
  const judgement = (user, computer) => {
    // console.log("userPick", user, "computerPick", computer);
    
    if(user.name === computer.name) {
      return "Tie!!"
    }
    else if(user.name === "Rock") return computer.name === "Scissors" ? "✨Win✨" : "Lose😭"
    else if(user.name === "Scissors") return computer.name === "Paper" ? "✨Win✨" : "Lose😭"
    else if(user.name === "Paper") return computer.name === "Rock" ? "✨Win✨" : "Lose😭"

    // if(user.name === computer.name) {
    //   return "Tie!!";
    // } else if(user.name === "Rock") {
    //   if(computer.name === "Scissors") {
    //     return "✨Win✨"
    //   } else {
    //     return "Lose😭"
    //   }
    // } else if(user.name === "Scissors") {
    //   if(computer.name === "paper") {
    //     return "✨Win✨"
    //   } else {
    //     return "Lose😭"
    //   }
    // } else if(user.name === "paper") {
    //   if(computer.name === "rock") {
    //     return "✨Win✨"
    //   } else {
    //     return "Lose😭"
    //   }
    // }
    //    승                                패
    // props.title = Player         props.title = Computer
    // props.item.name = 'rock'     props.item.name = 'scissors'
    // props.item.name = 'scissors' props.item.name = 'paper'
    // props.item.name = 'paper'    props.item.name = 'rock'
    //    패                                승
    // props.item.name = 'scissors' props.item.name = 'rock'
    // props.item.name = 'paper'    props.item.name = 'scissors'
    // props.item.name = 'rock'     props.item.name = 'paper'
    //    무승부 : props.item.name 이 동일할 경우
  }
  const modalHandler = () => {
    setModal(!modal);
    console.log(modal);
  }

  return (
    <div className="wrap">
      <div className="count">{ userCount } : { computerCount }</div>
      <button className="how" type="button" onClick={() => modalHandler()}>게임<br />설명</button>
      <button className="reset" type="button" onClick={() => {setUserCount(0); setComputerCount(0);}}>RESET</button>
      <div className="box-wrap">
        <Box title="Player" item={ userSelect } result={ result } />
        <img className="vs" src={`${process.env.PUBLIC_URL}images/vs.png`} alt="vs" />
        <Box title="Computer" item={ computerSelect } result={ result} />
      </div>
      <div className="button-group">
        <button className="button scissors" type="button" onClick={ () => play("rock") }>
          <img src={`${process.env.PUBLIC_URL}images/rock.png`} alt="주먹" />
        </button>
        <button className="button scissors" type="button" onClick={ () => play("scissors") }>
          <img src={`${process.env.PUBLIC_URL}images/scissors.png`} alt="가위" />
        </button>
        <button className="button scissors" type="button" onClick={ () => play("paper") }>
          <img src={`${process.env.PUBLIC_URL}images/paper.png`} alt="보" />
        </button>
      </div>
      {
        modal ?
        <How modal={ modal } modalHandler={ modalHandler } /> :
        null
      }
    </div>
  )
}

export default App;
