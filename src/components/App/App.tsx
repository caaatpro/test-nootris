import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import './App.scss';

import { menu, countInCart, banner } from '../../global/app-data';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
const logo = require('../Header/img/logo.svg').default;

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <Header logo={logo} menu={menu} countInCart={countInCart} />
        </div>
        <Banner {...banner} />
        <Discount />

        <Routes>{/* <Route path="/" element={<Main />} /> */}</Routes>

        {/* <FooterContainer /> */}
      </div>
    </Router>
  );
}

export default App;
