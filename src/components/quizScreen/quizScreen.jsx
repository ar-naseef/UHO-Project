// imports
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// local imports
import questions from '../../assets/questions';

class quizScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentQuestion: questions[0],
			answers: questions[0].answers,
			questionCount: 0,
			answered: false,
			correctAnswers: 0
		}
	}

	componentDidMount() {
    this.props.startTimer();
	}

	answerQuestion = (i) => {

		if (!this.state.answered) {

			let correctAnswers = this.state.correctAnswers;
			let questionCount = this.state.questionCount;

			if(this.state.answers[i].correct) {
				correctAnswers++;
			}

			this.setState({
				answered: true,
				correctAnswers
			}, () => {
				setTimeout(() => {

					if (questionCount < 9) {
						questionCount++;
						this.setState({
							answered: false,
							questionCount,
							currentQuestion: questions[questionCount],
							answers: questions[questionCount].answers,
						})
					} else {
						console.log("finished..");
						console.log(this.state.correctAnswers, " - correct ans")
						this.props.setCorrectAnswers(this.state.correctAnswers);
						this.props.history.push({
							pathname: '/quiz/end'
						})
					}
				}, 1000)
			})
		}
	}

  render() {

		const getAnswers = () => {
			return this.state.answers.map((ans, i) => (
				<div onClick={(e) => {
					this.answerQuestion(i);
				}} key={i}>
					<div className="dot">
						<div className={`innerDot ${this.state.answered ? `${ans.correct ? 'green' : 'red'}` : 'blue'}`}></div>
					</div>
					<div>
						<div className="answer">
							{ans.ans}
						</div>
					</div>
					<br />
				</div>
			))
		}

    return (
      <div className="questionDiv">
        <div>
					<span className="categoryTag">Category</span>
					<div className="category">{this.state.currentQuestion.category}</div>
				</div>

				<div className="question">
					{this.state.questionCount+1}. {this.state.currentQuestion.question}
				</div>

				<div className="answers">
					{getAnswers()}
				</div>

				<div className="explanation">
					{this.state.currentQuestion.explanation}
				</div>
      </div>
    )
  }
}

export default withRouter(quizScreen);