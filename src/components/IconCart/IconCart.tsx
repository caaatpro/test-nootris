import './IconCart.scss';

const IconCart = ({ count }: { count: number }) => {
  return (
    <div className="icon-cart">
      <div className="icon-cart__counter">{count}</div>
    </div>
  );
};

export default IconCart;
