import React from 'react';
import { Link } from 'react-router-dom';

import LeftPanel from '../leftPanel/leftPanel';
import bg from '../../assets/background1.png';
import timer from '../../assets/timeup.png';

export default function timeOut(props) {
  return (
    <div className="columns is-mobile winScreen">
      <LeftPanel className="column" screen="timeout" />
			<div className="column winRightPanel">
				<div>
					<div className="timeOutMessage">
						{props.message}
					</div>

					<div className="timeoutIamge">
						<img className="bg1" alt="timeout" src={bg} />
						<img className="timer" alt="timeout" src={timer} />
					</div>
				</div>

				<div className="bottomButton">
					<Link className="continueBtn" to="/thanks">CONTINUE</Link>
				</div>
			</div>
    </div>
  )
}
