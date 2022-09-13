import { IFProductFeature } from './interfaces';
import './ProductFeature.scss';

const ProductFeature = ({ image, text, textAccentuated }: IFProductFeature) => {
  return (
    <div className="product-feature">
      <img src={image} className="product-feature__image" alt="product-feature"></img>
      <p className="product-feature__text">
        {text} <br></br>
        <span className="product-feature__text_accentuated">{textAccentuated}</span>
      </p>
    </div>
  );
};

export default ProductFeature;
