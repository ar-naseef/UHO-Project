// imports
import React from 'react';

// components
import QuizScreen from '../quizScreen/quizScreen';
import LeftPanel from '../leftPanel/leftPanel';

export default function quizParent(props) {
  return (
    <div className="columns is-mobile quizParent">
			<LeftPanel className="column" screen="game" timerSec={props.timerSec} />
			<div className="column rightPanel">
					<QuizScreen startTimer={props.startTimer} setCorrectAnswers={props.setCorrectAnswers} />
			</div>
    </div>
  )
}