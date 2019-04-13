import React from 'react';
import { Link } from 'react-router-dom';

import LeftPanel from '../leftPanel/leftPanel';

import bg from '../../assets/background1.png';
import puzzleEnd from '../../assets/puzzle-complete.png';
import quizEnd from '../../assets/quiz-complete.png';

export default function winScreen(props) {
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
							{props.score>3 ? props.message : ""}
						</div>

						<div className={`winScore ${props.score > 3 ? "" : "redFont"}`}>
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
					<Link className="continueBtn" to="/thanks">CONTINUE</Link>
				</div>
			</div>
    </div>
  )
}
