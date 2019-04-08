import React, { Component } from 'react'

export default class puzzlePixel extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pixelWidth: this.props.gridWidthPx / this.props.gridWidth,
      pixelHeight: this.props.gridHeightPx / this.props.gridHeight,
      positionX: (this.props.index) % this.props.gridWidth,
      positionY: Math.floor((this.props.index) / this.props.gridWidth),
      isEmpty: this.props.index === this.props.gridWidth*this.props.gridHeight-1
    }
  }

  render() {
    return (
      <div className="gridPixel" style={{
        width: `${this.state.pixelWidth}vw`,
        height: `${this.state.pixelHeight}vh`,
        left: `${((this.props.position) % this.props.gridWidth) * this.state.pixelWidth}vw`,
        top: `${(Math.floor((this.props.position) / this.props.gridWidth)) * this.state.pixelHeight}vh`,
        backgroundImage: this.state.isEmpty ? "" : `url(${this.props.image})`,
        backgroundSize: `${this.props.gridWidthPx}vw ${this.props.gridHeightPx}vh`,
        backgroundPosition: `-${this.state.positionX * this.state.pixelWidth}vw -${this.state.positionY * this.state.pixelHeight}vh`
      }} onClick={(e) => {
        this.props.onClickPixel(this.props.index, {
          x: this.state.positionX,
          y: this.state.positionY
        }, this.props.position)
      }}>
        <span className="pixelIndex">
          {(this.props.gridWidth*this.props.gridHeight === this.props.index+1 ? "" : this.props.index+1)}
        </span>
      </div>
    )
  }
}
