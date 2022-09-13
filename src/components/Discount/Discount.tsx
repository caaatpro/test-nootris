import './Discount.scss';

import ProductFeature from '../ProductFeature/ProductFeature';

import { discountProductFeatures } from '../../global/app-data';
import Button from '../Button/Button';

const Discount = () => {
  return (
    <div className="discount">
      <p className="discount__title">
        Получи защиту иммунитета <br></br>
        <span className="discount__title_accentuated">со скидкой -15% первым!</span>
      </p>
      <p className="discount__result">
        <span className="discount__price-before">{`750₽`}</span>
        <span className="discount__price-after">{`690₽`}</span>
      </p>

      <div className="discount__details">
        {discountProductFeatures.map((item, i) => (i < 3 ? <ProductFeature {...item} /> : null))}
      </div>

      <div className="discount__button">
        <Button />
      </div>
    </div>
  );
};

export default Discount;
