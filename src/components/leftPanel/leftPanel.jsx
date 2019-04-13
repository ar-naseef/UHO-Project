import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import logo from '../../assets/who-logo.png';

class leftPanel extends React.Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		timerSec: 90
	// 	}
	// }

  render() {
		if(this.props.timerSec <= 0) {
			this.props.history.push({
				pathname: '/timeout'
			})
		}

		return (
			<div className="leftPanel">
				<div className="logoImg">
					<figure className="image">
						<img alt="logo" src={logo} />
					</figure>
				</div>
				
				<div className="leftText">
					<p>
					A Health System with strong and quality Primary Health Care delivers better health outcomes, is cost-efficient and ensures care for all.  Primary Health Care is essential to achieve health-related Sustainable Development Goals (SDGs) and Universal Health Coverage.
					</p>
				</div>
	
				{this.props.screen === "game" || this.props.screen === "timeout" ? (
					<div className="tickMark">
						{/* HOME */}
						<a href="/" className="tickMark3">HOME</a>
					</div>
				) : (
					<div></div>
				)}
	
				{this.props.screen === "game" ? (
					<div className="timerDiv">
						{`0${Math.floor(this.props.timerSec/60)}`}:{this.props.timerSec%60 < 10 ? `0${this.props.timerSec%60}` : this.props.timerSec%60}
					</div>
				) : (
					<div></div>
				)}
			</div>
		)
	}
}

export default withRouter(leftPanel);