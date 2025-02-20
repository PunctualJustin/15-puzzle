import React, { Component } from 'react';
import {
  GameButtons,
  Button,
  ScoreContainer,
  Modal,
  ModalContainer
} from '../../elements/index.js';
import Score from '../Score';
import Grid from '../Grid';

import { gameState } from '../../utils/index.js';
export default class Game extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.eventType !== this.props.eventType) {
      const [_, move] = this.props.eventType || [null, null];
      const [row, col, location] = this.props.gettingEmptyBoxLocation();
      if (
        this.props.gameState === gameState.GAME_IDLE ||
        this.props.gameState === gameState.GAME_STARTED
      ) {
        this.props.moveCell(location, row, col, move);
      }
    }
  }

  render() {
    return (
      <div>
        <GameButtons>
          <Button onClick={this.props.resetGame}>new game</Button>
          <Button
            onClick={this.props.pauseGame}
            disabled={this.props.gameState === gameState.GAME_IDLE}
          >
            {this.props.gameState === gameState.GAME_PAUSED ? 'Play' : 'Pause'}
          </Button>
        </GameButtons>

        <Grid />

        <ScoreContainer>
          <Score moves={this.props.moves} seconds={this.props.seconds} />
        </ScoreContainer>
        <Modal on={this.props.gameState === gameState.GAME_OVER}>
          <ModalContainer>
            <div className="text-1">Excellent!</div>
            <div>
              It took you <b>{this.props.moves} moves</b>
            </div>
            <div>
              <Button
                type="big"
                textColor="white"
                onClick={this.props.resetGame}
              >
                Play Again
              </Button>
            </div>
          </ModalContainer>
        </Modal>
      </div>
    );
  }
}
