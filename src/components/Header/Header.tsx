import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Media from 'react-media';
import { IFHeader } from './interfaces';
import './Header.scss';

import IconCart from '../IconCart/IconCart';
import Menu from '../Menu/Menu';
import MenuMob from '../MenuMob/MenuMob';

const Header = ({ logo, menu, countInCart }: IFHeader) => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const mainMenu = (
    <Fragment>
      <Menu menu={menu} />
      <IconCart count={countInCart} />
    </Fragment>
  );

  const mobMenu = (
    <Fragment>
      <IconCart count={countInCart} />
      <div className="header__menu-mob-icon" onClick={() => setShowMobMenu(true)}></div>
    </Fragment>
  );

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />

      <Media
        queries={{
          small: 'screen and (max-width: 599px)',
          medium: 'screen and (min-width: 600px) and (max-width: 1045px)',
          large: 'screen and (min-width: 1046px)',
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && mobMenu}
            {matches.medium && mobMenu}
            {matches.large && mainMenu}
          </Fragment>
        )}
      </Media>

      {showMobMenu ? <MenuMob menu={menu} closed={() => setShowMobMenu(false)} /> : null}
    </header>
  );
};

export { Header };
