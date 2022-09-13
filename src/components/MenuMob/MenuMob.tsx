import { Link } from 'react-router-dom';
import { IFMenu } from '../Header/interfaces';

const MenuMob = ({ menu, closed }: { menu: IFMenu[]; closed: any }) => {
  return (
    <menu className="header__menu-mob">
      {menu.map(({ link, text }, i) => (
        <Link to={link} className="header__item-menu-mob" key={`mob${i}`}>
          {text}
        </Link>
      ))}
      <a href="tel:+78006000990" className="header__item-menu-mob header__item-menu-mob_phone">
        8 (800) 600-09-90
      </a>
      <div className="header__closed-menu-mob" onClick={() => closed()}></div>
    </menu>
  );
};

export default MenuMob;
