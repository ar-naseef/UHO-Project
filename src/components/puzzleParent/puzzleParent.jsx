// imports
import React from 'react';

// components
import PuzzleGrid from '../puzzleGrid/puzzleGrid';
import LeftPanel from '../leftPanel/leftPanel';

export default function puzzleParent(props) {
  return (
    <div className="columns is-mobile puzzleParent">
			<LeftPanel className="column" screen="game" timerSec={props.timerSec} />
			<div className="column rightPanel">
				<PuzzleGrid startTimer={props.startTimer} />
			</div>
		</div>
  )
}