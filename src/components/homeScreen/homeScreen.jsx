import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import logo from '../../assets/who-logo.png';
import puzzleIcon from '../../assets/puzzle-icon.png';
import quizIcon from '../../assets/quiz-icon.png';

export default class homeScreen extends Component {
  render() {
    return (
      <div>
				<div className="homeTop">
					<div className="homeLogo">
						<figure className="image">
							<img alt="logo" src={logo} />
						</figure>
					</div>

					<div className="homeText">
					A Health System with strong and quality Primary Health Care delivers better health outcomes, is cost-efficient and ensures care for all.  Primary Health Care is essential to achieve health-related Sustainable Development Goals (SDGs) and Universal Health Coverage.
					</div>

					<div className="chooseGameText">
						Choose a game
					</div>
				</div>

        <div className="homeBottom">
					<div className="columns is-mobile" style={{
						width: '60%',
						margin: '0 auto'
					}}>
						<Link to="/puzzle" className="column">
							<div className="homeIcon">
								<figure>
									<img src={puzzleIcon} />
								</figure>
							</div>
							<div className="clickableButton">Puzzle</div>
						</Link>
						<Link to="/quiz" className="column">
							<div className="homeIcon">
								<figure>
									<img src={quizIcon} />
								</figure>
							</div>
							<div className="clickableButton">Question</div>
						</Link>
					</div>
				</div>
      </div>
    )
  }
}
