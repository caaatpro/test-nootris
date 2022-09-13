import { IFBanner } from './interfaces';
import './Banner.scss';

const Banner = ({ title, text, subTitle, subText, image }: IFBanner) => {
  return (
    <div className="banner">
      <div className="banner__container">
        <p className="banner__title">{title}</p>
        <p className="banner__text">{text}</p>
        <p className="banner__sub-title">{subTitle}</p>
        <p className="banner__sub-text">{subText}</p>
        <img src={image} className="banner__image" alt="banner"></img>
      </div>
    </div>
  );
};

export default Banner;
