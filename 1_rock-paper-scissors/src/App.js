import React, { useState } from 'react';
// > css
import * as s from './App.styled.js';
// > components
import Box from './components/Box.js';
import How from './components/How.js';

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

    setResult(judgement(choice[userChoice], computerChoice));

    countHandler(choice[userChoice], computerChoice);
  };
  const randomChoice = () => {
    let choiceArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * choiceArray.length);
    let finalItem = choiceArray[randomItem];
    
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
    if(user.name === computer.name) {
      return "Tie!!"
    }
    else if(user.name === "Rock") return computer.name === "Scissors" ? "✨Win✨" : "Lose😭"
    else if(user.name === "Scissors") return computer.name === "Paper" ? "✨Win✨" : "Lose😭"
    else if(user.name === "Paper") return computer.name === "Rock" ? "✨Win✨" : "Lose😭"
  }
  const modalHandler = () => {
    setModal(!modal);
  }
  const resetClicked = () => {
    setUserCount(0); 
    setComputerCount(0); 
    setUserSelect(null);
    setComputerSelect(null);
    setResult("");
  }

  return (
    <s.Container>
      <s.Count>{ userCount } : { computerCount }</s.Count>
      <s.How type="button" onClick={ () => modalHandler() }>게임<br />설명</s.How>
      <s.Reset type="button" onClick={ () => resetClicked() }>RESET</s.Reset>
      <s.BoxWrap>
        <Box title="Player" item={ userSelect } result={ result } />
        <img className="vs" src={ `${process.env.PUBLIC_URL}images/vs.png` } alt="vs" />
        <Box title="Computer" item={ computerSelect } result={ result } />
      </s.BoxWrap>
      <s.ButtonGroup>
        <button className="button scissors" type="button" onClick={ () => play("rock") }>
          <img src={`${process.env.PUBLIC_URL}images/rock.png`} alt="주먹" />
        </button>
        <button className="button scissors" type="button" onClick={ () => play("scissors") }>
          <img src={`${process.env.PUBLIC_URL}images/scissors.png`} alt="가위" />
        </button>
        <button className="button scissors" type="button" onClick={ () => play("paper") }>
          <img src={`${process.env.PUBLIC_URL}images/paper.png`} alt="보" />
        </button>
      </s.ButtonGroup>
      {
        modal 
        ?
        <div>
          <How modal={ modal } modalHandler={ modalHandler } />
          <s.Overlay onClick={ modalHandler } />
        </div>
        :
        null
      }
    </s.Container>
  )
}

export default App;
