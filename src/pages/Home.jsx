import React, { Fragment } from 'react';
import { KeyBoardManagar } from '../hoc/index.js';

import { Instruction, Header, Game, Details } from '../components/index.js';
import { Container, Wave, GameFactoryConsumer } from '../elements/index.js';

import Waves from '../assets/img/waves.gif';

const Home = ({ eventType }) => {
  return (
    <Container>
      <GameFactoryConsumer>
        {({ values, methods }) => {
          return (
            <Fragment>
              <Header />
              <br />
              <Game eventType={eventType} {...values} {...methods} />
              <br />
              <Instruction />
              <div>
                <Wave className="waves" src={Waves} alt="" />
              </div>
              <br />
              <Details
                name={'Justin Gaudet'}
                githubURL={'https://github.com/PunctualJustin'}
                projectURL={'https://github.com/PunctualJustin/15-puzzle'}
                linkedinURL={'https://www.linkedin.com/in/justin-gaudet/'}
              />
            </Fragment>
          );
        }}
      </GameFactoryConsumer>
    </Container>
  );
};

export default KeyBoardManagar(Home);
