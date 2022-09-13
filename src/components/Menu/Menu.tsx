import { Link } from 'react-router-dom';
import { IFMenu } from '../Header/interfaces';

const Menu = ({ menu }: { menu: IFMenu[] }) => {
  return (
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
  );
};

export default Menu;
