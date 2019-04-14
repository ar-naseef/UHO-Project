import React, { Component } from 'react'

export default class puzzlePixel extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pixelWidth: this.props.gridWidthPx / this.props.gridWidth,
      pixelHeight: this.props.gridHeightPx / this.props.gridHeight,
      positionX: (this.props.index) % this.props.gridWidth,
      positionY: Math.floor((this.props.index) / this.props.gridWidth),
      isEmpty: this.props.index === this.props.gridWidth*this.props.gridHeight-1,
      totalWidth: window.innerWidth,
      totalHeight: window.innerHeight
    }
  }

  render() {
    // let positionInsidePixelX = 0;
    // let positionInsidePixelY = 0;
    // let index;
    // console.log(this.props.position);
    // console.log(`${(((Math.floor((this.props.position) / this.props.gridWidth)) * this.state.pixelHeight)*this.state.totalHeight)/100}px`);
    return (
      <div className="gridPixel"
      index={this.props.index}
      position={this.props.position}
      style={{
        // zIndex: "0",
        width: `${this.state.pixelWidth}vw`,
        height: `${this.state.pixelHeight}vh`,
        left: `${((((this.props.position) % this.props.gridWidth) * this.state.pixelWidth)*this.state.totalWidth)/100}px`,
        top: `${(((Math.floor((this.props.position) / this.props.gridWidth)) * this.state.pixelHeight)*this.state.totalHeight)/100}px`,
        backgroundImage: `url(${this.props.image})`,
        backgroundSize: `${this.props.gridWidthPx}vw ${this.props.gridHeightPx}vh`,
        backgroundPosition: `-${this.state.positionX * this.state.pixelWidth}vw -${this.state.positionY * this.state.pixelHeight}vh`
      }}
      // onClick={(e) => {
      //   this.props.onClickPixel(this.props.index, {
      //     x: this.state.positionX,
      //     y: this.state.positionY
      //   }, this.props.position)
      // }}
      onTouchMove={(e) => {
        // console.log(e.target);
        let touchLocation = e.targetTouches[0];
        // console.log(touchLocation);
        // e.target.style["z-index"] = 1000;
        e.target.classList.add("active");
        // let left = touchLocation.pageX + (((((this.props.position) % this.props.gridWidth) * this.state.pixelWidth)*this.state.totalWidth)/100);
        // let top = touchLocation.pageY + ((((Math.floor((this.props.position) / this.props.gridWidth)) * this.state.pixelHeight)*this.state.totalHeight)/100);
        let parentPositionX = document.getElementsByClassName("puzzleGrid")[0].getBoundingClientRect().x;
        let parentPositionY = document.getElementsByClassName("puzzleGrid")[0].getBoundingClientRect().y;
        
        // if (positionInsidePixelX === 0) {
        //   positionInsidePixelX = touchLocation.pageX - parentPositionX
        // }

        // if (positionInsidePixelY === 0) {
        //   positionInsidePixelY = touchLocation.pageY - parentPositionY
        // }

        let pixelWidthPX = (this.state.pixelWidth * this.state.totalWidth) / 100; 
        let pixelHeightPX = (this.state.pixelHeight * this.state.totalHeight) / 100;
        
        let left = touchLocation.pageX - parentPositionX;
        let top = touchLocation.pageY - parentPositionY;

        let topMax = document.getElementsByClassName("puzzleGrid")[0].offsetHeight - pixelHeightPX + pixelHeightPX/2;
        let leftMax = document.getElementsByClassName("puzzleGrid")[0].offsetWidth - pixelWidthPX + pixelWidthPX/2;

        if (top<0) top = 0
        if (top>topMax) top = topMax

        if (left<0) left = 0
        if (left>leftMax) left = leftMax

        e.target.style.left = left - (pixelWidthPX/2) + 'px';
        e.target.style.top = top - (pixelHeightPX/2) + 'px';
        // console.log("touch", touchLocation.pageX, touchLocation.pageY)
        // console.log("Right-Left", left, top);
        // console.log("position", Math.floor(left/pixelWidthPX), Math.floor(top/pixelHeightPX));
        // console.log("initial-Pos", positionInsidePixelX, positionInsidePixelY);
      }}
      
      onTouchEnd={(e) => {
        // console.log(e.target)
        let index = parseInt(e.target.getAttribute("position"));
        e.target.classList.remove("active");

        let pixelWidthPX = (this.state.pixelWidth * this.state.totalWidth) / 100; 
        let pixelHeightPX = (this.state.pixelHeight * this.state.totalHeight) / 100;

        let dropedPositionX = Math.floor(((parseFloat(e.target.style.left) + (pixelWidthPX/2)))/pixelWidthPX);
        let dropedPositionY = Math.floor(((parseFloat(e.target.style.top)) + (pixelHeightPX/2))/pixelHeightPX);

        // console.log("dropedAt: ", dropedPositionX, dropedPositionY);
        // console.log(index);

        if (index === ((dropedPositionY*this.props.gridWidth) + dropedPositionX)) {
          e.target.style.left = dropedPositionX * pixelWidthPX + 'px';
          e.target.style.top = dropedPositionY * pixelHeightPX + 'px';
        } else {
          e.target.style.left = dropedPositionX * pixelWidthPX + 'px';
          e.target.style.top = dropedPositionY * pixelHeightPX + 'px';
          this.props.swap(index, (dropedPositionY*this.props.gridWidth) + dropedPositionX);
        }

        // this.props.onClickPixel(this.props.index, {
        //   x: this.state.positionX,
        //   y: this.state.positionY
        // }, this.props.position)
      }}
      >
        <span className="pixelIndex">
          {/* {this.props.index} */}
        </span>
      </div>
    )
  }
}
