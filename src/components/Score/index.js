import React from 'react';
import { ScoreSubContainer } from '../../elements/index.js';

const Score = ({ moves, seconds }) => {
  return (
    <ScoreSubContainer>
      <div className="time">
        <div className="score-title">Time</div>
        <div className="time-container">{seconds}s</div>
      </div>
      <div className="move">
        <div className="score-title">Moves</div>
        <div className="move-container">{moves}</div>
      </div>
      {/* <div className="best">
        <div className="score-title">best</div>
        <div className="best-container">123s 10Moves</div>
      </div> */}
    </ScoreSubContainer>
  );
};

export default Score;
