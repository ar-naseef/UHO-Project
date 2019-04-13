// imports
import React, { Component } from 'react';

// components
import Pixel from '../puzzlePixel/puzzlePixel';
import { withRouter } from 'react-router-dom';
const assetBaseUrl = "https://s3.ap-south-1.amazonaws.com/who-assets";
const timer = 60;

// import photo1 from '../../assets/1.png';

class puzzleGrid extends Component {

	constructor(props) {
		super(props);
		this.state = {
			gridWidthPx: 35,
			gridHeightPx: 70,
			gridWidth: 3,
			gridHeight: 4,
			image: `${assetBaseUrl}/1.png`,
			selectedImage: 1,
			correctPixelCombination: null,
			shuffledPixels: null,
		}
	}
	
	componentWillMount() {
		let numbersArr = Array.apply(null, {length: this.state.gridHeight * this.state.gridWidth}).map(Number.call, Number);
		this.setState({
			correctPixelCombination: numbersArr,
			shuffledPixels: numbersArr
		});
		this.setShuffledPixels();
	}

	componentDidMount() {
		this.props.startTimer(timer);
	}

	setShuffledPixels = () => {
		this.setState({
			shuffledPixels: this.shufflePixels(Array.apply(null, {length: this.state.gridHeight * this.state.gridWidth}).map(Number.call, Number))
		})
	}

	shufflePixels = (a) => {
		for (let i = a.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[a[i], a[j]] = [a[j], a[i]];
		}
		console.log(a);
		return a;
	}

	checkWin = () => {

		for(let i=0; i<this.state.correctPixelCombination.length; i++) {
			// console.log(this.state.correctPixelCombination[i], this.state.shuffledPixels[i]);
			if ((this.state.correctPixelCombination[i] !== this.state.shuffledPixels[i])) {
				return false
			}
		}
		return true;
	}

	swap = (fromIndex, toIndex) => {
		console.log("fromIndex: ", fromIndex);
		console.log("toIndex: ", toIndex);

		if (fromIndex >= 0 && toIndex >= 0) {
			let shuffledPixels = this.state.shuffledPixels;
			let fromPixID = shuffledPixels.indexOf(fromIndex);
			let toPixelID = shuffledPixels.indexOf(toIndex);
			
			// console.log(fromPixID, toPixelID);
	
			let temp = shuffledPixels[fromPixID];
			shuffledPixels[fromPixID] = shuffledPixels[toPixelID];
			shuffledPixels[toPixelID] = temp
	
			// console.log(shuffledPixels);
			this.setState({
				shuffledPixels
			}, () => {
				if (this.checkWin()) {
					console.log("you win");
					setTimeout(() => {
						this.props.history.push({
							pathname: '/puzzle/end'
						})
					}, 500);
					// alert("you win")
				}
			})
	
			this.render();
		} else {
			return;
		}

		
		
	}

	// onClickPixel = (index, positionXY, position) => {
	// 	let emptyPosition = this.state.shuffledPixels[this.state.gridHeight*this.state.gridWidth-1];
	// 	let { x: emptyX, y: emptyY} = {
	// 		x: emptyPosition % this.state.gridWidth,
	// 		y: Math.floor(emptyPosition / this.state.gridWidth)
	// 	}
	// 	let {x, y} = {
	// 		x: position % this.state.gridWidth,
	// 		y: Math.floor(position / this.state.gridWidth)
	// 	}
	// 	// const {x, y} = positionXY;
	// 	// console.log(index, position);
	// 	// console.log(emptyPosition);
	// 	console.log(x,y);
	// 	console.log(emptyX, emptyY, "empty pixel");
	// 	console.log((x === emptyX || y === emptyY));
	// 	console.log((Math.abs(x-emptyX) === 1 || Math.abs(y-emptyY) === 1));
	// 	console.log((x === emptyX || y === emptyY) && (Math.abs(x-emptyX) === 1 || Math.abs(y-emptyY) === 1));
	// 	if ((x === emptyX || y === emptyY) && (Math.abs(x-emptyX) === 1 || Math.abs(y-emptyY) === 1)) {
	// 		let shuffledPixels = this.state.shuffledPixels;
	// 		shuffledPixels[this.state.gridHeight*this.state.gridWidth-1] = position;
	// 		shuffledPixels[this.state.shuffledPixels.indexOf(position)] = emptyPosition;
	// 		// console.log(shuffledPixels);
	// 		this.setState({
	// 			shuffledPixels
	// 		}, () => {
	// 			if (this.checkWin()) {
	// 				console.log("you win");
	// 				setTimeout(() => {
	// 					this.props.history.push({
	// 						pathname: '/puzzle/end'
	// 					})
	// 				}, 750);
	// 				// alert("you win")
	// 			}
	// 		})
	// 	}
	// }

	setPuzzleImage = (id) => {

		this.props.startTimer(timer);
		const images = [
			`${assetBaseUrl}/1.png`,
			`${assetBaseUrl}/2.png`,
			`${assetBaseUrl}/3.png`,
			`${assetBaseUrl}/4.png`,
			`${assetBaseUrl}/5.png`,
		]

		this.setState({
			selectedImage: id,
			image: images[id-1]
		}, () => {
			this.setShuffledPixels();
		})
	}

  render() {

		const createGrid = () => {

			let randomOrder = this.state.shuffledPixels;
			let pixels = [];
			for (let i=0; i<(this.state.gridHeight * this.state.gridWidth); i++) {
				pixels.push(
					<Pixel
						key={i}
						index={i}
						position={randomOrder[i]}
						gridWidth={this.state.gridWidth}
						gridHeight={this.state.gridHeight}
						gridWidthPx={this.state.gridWidthPx}
						gridHeightPx={this.state.gridHeightPx}
						image={this.state.image}
						onClickPixel={this.onClickPixel}
						swap={this.swap}
					/>
				)
			}
			return pixels;
		}

		const getImageThubms = () => {
			const images = [
				`${assetBaseUrl}/1.png`,
				`${assetBaseUrl}/2.png`,
				`${assetBaseUrl}/3.png`,
				`${assetBaseUrl}/4.png`,
				`${assetBaseUrl}/5.png`,
			]	
			return images.map((img, i) => {
				if (this.state.selectedImage !== i+1) {
					return (
						<figure key={i} className="otherPuzzle" onClick={(e) => {
							this.setPuzzleImage(i+1);
						}}>
							<img src={img} alt={i+1} />
						</figure>
					)
				}
			})
		}

    return (
      <div className="columns is-mobile">
				{/* <button onClick={(e) => {
					this.setShuffledPixels();
				}}>Shuffle</button> */}

				<div className="column selectedPuzzle">
					<div className="title">
						Puzzle
					</div>

					<div className="puzzleGrid" style={{
						width: `${this.state.gridWidthPx}vw`,
						height: `${this.state.gridHeightPx}vh`
					}}>
						{createGrid()}
					</div>
				</div>

				<div className="column otherPuzzles">
					{getImageThubms()}
				</div>
			</div>
    )
  }
}

export default withRouter(puzzleGrid);