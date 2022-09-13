import React from 'react';
import { Link } from 'react-router-dom';
import { IFHeader } from './interfaces';
import './Header.scss';

import IconCart from '../IconCart/IconCart';

const Header = ({ logo, menu, countInCart }: IFHeader) => {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <menu className="header__menu">
        {menu.map(({ link, text }, i) => (
          <Link to={link} className="header__item-menu" key={i}>
            {text}
          </Link>
        ))}
        <a href="tel:+78006000990" className="header__item-menu header__item-menu_phone">
          8 (800) 600-09-90
        </a>
      </menu>

      <IconCart count={countInCart} />
    </header>
  );
};

export { Header };
