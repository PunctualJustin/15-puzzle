import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

import './assets/styles/app.scss';

import { Home } from './pages';
import { GameFactory } from './elements';

export default function App() {
  return (
    <BrowserRouter>
      <GameFactory>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </GameFactory>
    </BrowserRouter>
  );
}
