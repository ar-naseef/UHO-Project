// imports
import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// styles
import './App.css';
import 'bulma/css/bulma.css';

// components
import PuzzleParent from './components/puzzleParent/puzzleParent';
import QuizParent from './components/quizParent/quizParent';
import WinScreen from './components/winScreen/winScreen';
import HomeScreen from './components/homeScreen/homeScreen';
import TimeOut from './components/timeOut/timeOut';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      correctAnswers: 0,
      timerSec: 90
    }

    this.timeOut = null
  }

  startTimer = () => {

    clearInterval(this.timeOut);

		this.setState({
			timerSec: 90
		}, () => {
			this.timeOut = setInterval(() => {
				this.setState({
					timerSec: this.state.timerSec-1
				})
			}, 999);
		})
  }

  setCorrectAnswers = (n) => {
    console.log(n)
    this.setState({
      correctAnswers: n
    })
    // console.log("set answers")
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/puzzle" exact render={() => <PuzzleParent startTimer={this.startTimer} timerSec={this.state.timerSec} />} />
          <Route path="/quiz" exact render={() => <QuizParent startTimer={this.startTimer} timerSec={this.state.timerSec} setCorrectAnswers={this.setCorrectAnswers} />} />
          <Route path="/puzzle/end" exact render={() => <WinScreen win="puzzle" message="Puzzle Completed"/>} />
          <Route path="/quiz/end" exact render={() => <WinScreen win="quiz" message="congratulations" score={this.state.correctAnswers} />} />
          <Route path="/timeout" exact render={() => <TimeOut message="Times up!" />} />
          {/* <WinScreen 
            win="quiz"
            message="congratulation"
            score="7"
          /> */}
          {/* <QuizParent /> */}
          {/* <PuzzleParent /> */}
          {/* <HomeScreen /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;