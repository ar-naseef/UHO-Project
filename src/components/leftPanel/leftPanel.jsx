import React from 'react';

import logo from '../../assets/who-logo.png';

export default class leftPanel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			timerSec: 90
		}
	}

	componentDidMount() {
		this.startTimer();
	}

	startTimer = () => {
		this.setState({
			timerSec: 90
		}, () => {
			setInterval(() => {
				this.setState({
					timerSec: this.state.timerSec-1
				})
			}, 999);
		})
	}

  render() {
		return (
			<div className="leftPanel">
				<div className="logoImg">
					<figure className="image">
						<img alt="logo" src={logo} />
					</figure>
				</div>
				
				<div className="leftText">
					<p>
						Bringing remember for supplied her why was confined. Midd leton nsive belie ving add.
					</p>
					<br />
					<p>
						Wea ther adapt ed prepare oh is calling. These wrong of he which there smile to my front.
					</p>
				</div>
	
				{this.props.screen === "game" ? (
					<div className="tickMark">
						{/* <i class="fas fa-check"></i> */}
					</div>
				) : (
					<div></div>
				)}
	
				{this.props.screen === "game" ? (
					<div className="timerDiv">
						{`0${Math.floor(this.state.timerSec/60)}`}:{this.state.timerSec%60 < 10 ? `0${this.state.timerSec%60}` : this.state.timerSec%60}
					</div>
				) : (
					<div></div>
				)}
			</div>
		)
	}
}
