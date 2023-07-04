import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';
import { CartItem as CartItemType } from '../redux/slices/cartSlice';
import clsx from 'clsx';
import { IoAddOutline, IoCloseCircleOutline, IoRemoveOutline } from 'react-icons/io5';

type CartItemProps = {
  id: string;
  title: string;
  types: string;
  price: number;
  count: number;
  imageUrl: string;
};

export const CartItem: React.FC<CartItemProps> = ({ id, title, price, count, imageUrl, types }) => {
  const dispath = useDispatch();
  const onClickPlus = () => {
    dispath(
      addItem({
        id,
      } as CartItemType),
    );
  };

  const onClickMinus = () => {
    dispath(minusItem(id));
  };

  const onClickRemove = () => {
    dispath(removeItem(id));
  };
  return (
    <div className="cart-item-card">
      <img src={imageUrl} className="cart-item-img" />
      <div className="text">
        <h4>{title}</h4>
        <p>{types}</p>
      </div>
      <button
        disabled={count === 1}
        className={clsx('button-cart-item', {
          'button-cart-item--disabled': count === 1,
        })}
        onClick={onClickMinus}>
        <IoRemoveOutline size={24} />
      </button>
      <b>{count}</b>
      <button className="button-cart-item" onClick={onClickPlus}>
        <IoAddOutline size={24} />
      </button>
      <h5>{price} €</h5>
      <IoCloseCircleOutline size={32} className="remove" onClick={onClickRemove} />
    </div>
  );
};

export default CartItem;
