// imports
import React, { Component } from 'react';
import { Route, BrowserRouter, HashRouter } from 'react-router-dom';
import iNoBounce from 'inobounce';

// styles
import './App.css';
import 'bulma/css/bulma.css';

// components
import PuzzleParent from './components/puzzleParent/puzzleParent';
import QuizParent from './components/quizParent/quizParent';
import WinScreen from './components/winScreen/winScreen';
import HomeScreen from './components/homeScreen/homeScreen';
import TimeOut from './components/timeOut/timeOut';
import Thanks from './components/thanks/thanks';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      correctAnswers: 0,
      timerSec: 90
    }

    // console.log(iNoBounce);
    iNoBounce.enable();
    this.timeOut = null
  }

  startTimer = (t=90) => {

    clearInterval(this.timeOut);
		this.setState({
			timerSec: t
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
      <HashRouter>
        <div className="App">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/puzzle" exact render={() => <PuzzleParent startTimer={this.startTimer} timerSec={this.state.timerSec} />} />
          <Route path="/quiz" exact render={() => <QuizParent startTimer={this.startTimer} timerSec={this.state.timerSec} setCorrectAnswers={this.setCorrectAnswers} />} />
          <Route path="/puzzle/end" exact render={() => <WinScreen win="puzzle" message="Puzzle Completed"/>} />
          <Route path="/quiz/end" exact render={() => <WinScreen win="quiz" message="congratulations" score={this.state.correctAnswers} />} />
          <Route path="/timeout" exact render={() => <TimeOut message="Times up!" />} />
          <Route path="/thanks" render={() => <Thanks />} exact />
        </div>
      </HashRouter>
    );
  }
}

export default App;