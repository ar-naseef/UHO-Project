import React from 'react';

import LeftPanel from '../leftPanel/leftPanel';

import bg from '../../assets/background1.png';
import puzzleEnd from '../../assets/puzzle-complete.png';
import quizEnd from '../../assets/quiz-complete.png';

export default function lowScoreScreen(props) {
  return (
    <div className="columns is-mobile winScreen">
      <LeftPanel className="column" screen="win" />
			<div className="column winRightPanel">
				{props.win === "puzzle" ? (
					<div>
						<div className="winMessage">
							{props.message}
						</div>

						<div className="timeoutIamge">
							<img className="bg1" alt="timeout" src={bg} />
							<img className="puzzleEnd" alt="timeout" src={puzzleEnd} />
						</div>

						<div className="winTickMark">
							<span className="tickMark2">&#10004;</span>
						</div>
					</div>
				) : (
					<div>
						<div className="winMessage">
							{props.message}
						</div>

						<div className="winScore">
							{props.score}/10
						</div>

						<div className="timeoutIamge">
							<img className="bg1" alt="timeout" src={bg} />
							<img className="quizEnd" alt="timeout" src={quizEnd} />
						</div>

						<div className="winTickMark">
							<span className="tickMark2">&#10004;</span>
						</div>
					</div>
				)}

				<div className="bottomButton">
					<a className="continueBtn" href="/thanks">CONTINUE</a>
				</div>
			</div>
    </div>
  )
}
