import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import './App.scss';

import { menu, countInCart } from '../../global/app-data';
import Main from '../../page/Main';
const logo = require('../Header/img/logo.svg').default;

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <Header logo={logo} menu={menu} countInCart={countInCart} />
        </div>

        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
