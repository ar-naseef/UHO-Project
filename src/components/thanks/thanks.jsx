import React from 'react';
import { withRouter } from 'react-router-dom';

import logo from '../../assets/who-logo.png';
import bg from '../../assets/background2.png';
import thanksText from '../../assets/thank.png';

class thanks extends React.Component {

	componentDidMount() {
		setTimeout(() => {
			this.props.history.push({
				pathname: "/"
			})
		}, 3500);
	}

  render() {
		return (
			<div>
				<div className="logoImgThanks">
					<figure className="image">
						<img alt="logo" src={logo} />
					</figure>
				</div>
	
				<div className="timeoutIamge">
					<img className="bg2" alt="thanks" src={bg} />
					<img className="thanksText" alt="thanks" src={thanksText} />
				</div>
				
			</div>
		)
	}
}

export default withRouter(thanks);