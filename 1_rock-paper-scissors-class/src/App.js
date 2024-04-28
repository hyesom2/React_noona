import React, { Component } from 'react'
import Box from './components/Box';
import How from './components/How';
import './App.css';

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
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
      userCount: 0,
      computerCount: 0,
      modal: false,
    }
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
    
    this.countHandler(choice[userChoice], computerChoice);
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];

    return choice[final];
  };

  judgement = (user, computer) => {
    if(user.name === computer.name) {
      return "Tie!!"
    } else if(user.name === "Rock") {
      return computer.name === "Scissors" ? "✨Win✨" : "Lose😭"
    } else if(user.name === "Scissors") {
      return computer.name === "Paper" ? "✨Win✨" : "Lose😭"
    } else if(user.name === "Paper") {
      return computer.name === "Rock" ? "✨Win✨" : "Lose😭"
    }
  };

  countHandler = (user, computer) => {
    if(user.name === computer.name) {
      return ( this.state.userCount, this.state.computerCount )
    } else if(user.name === "Rock") {
      return computer.name === "Scissors" ? this.setState({ userCount : this.state.userCount + 1, computerCount : this.state.computerCount }) : this.setState({ userCount : this.state.userCount, computerCount : this.state.computerCount + 1 })
    } else if(user.name === "Scissors") {
      return computer.name === "Paper" ? this.setState({ userCount : this.state.userCount + 1, computerCount : this.state.computerCount }) : this.setState({ userCount : this.state.userCount, computerCount : this.state.computerCount + 1 })
    } else if(user.name === "Paper") {
      return computer.name === "Rock" ? this.setState({ userCount : this.state.userCount + 1, computerCount : this.state.computerCount }) : this.setState({ userCount : this.state.userCount, computerCount : this.state.computerCount + 1 })
    }
  }

  reset = () => {
    this.setState({
      userCount: 0,
      computerCount: 0
    })
  }

  modalOpen = () => {
    this.setState({
      modal: true
    });
  }
  modalClose = () => {
    this.setState({
      modal: false
    })
  }

  render() {
    return (
      <div className="wrap">
        <div className="count">{ this.state.userCount } : { this.state.computerCount }</div>
        <button className="how" type="button" onClick={ () => this.modalOpen() }>게임<br />설명</button>
        <button className="reset" type="button" onClick={() => this.reset() }>RESET</button>
        <div className="box-wrap">
          <Box title="Player" item={ this.state.userSelect } result={ this.state.result } />
          <img className="vs" src={ `${process.env.PUBLIC_URL}images/vs.png` } alt="vs" />
          <Box title="Computer" item={ this.state.computerSelect } result={ this.state.result } />
        </div>
        <div className="button-group">
          <button className="button scissors" type="button" onClick={ () => {this.play("rock") } }>
            <img src={`${process.env.PUBLIC_URL}images/rock.png`} alt="주먹" />
          </button>
          <button className="button scissors" type="button" onClick={ () => this.play("scissors") }>
            <img src={`${process.env.PUBLIC_URL}images/scissors.png`} alt="가위" />
          </button>
          <button className="button scissors" type="button" onClick={ () => this.play("paper") }>
            <img src={`${process.env.PUBLIC_URL}images/paper.png`} alt="보" />
          </button>
        </div>
        {
          this.state.modal === true
          ?
          <div>
            <How modal={ this.state.modal } modalClose={ this.modalClose } />
            <div className="overlay" onClick={ () => this.modalClose() }></div>
          </div>
          :
          null
        }
      </div>
    )
  }
}
