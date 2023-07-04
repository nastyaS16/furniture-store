import { IoAddOutline, IoHeartOutline, IoHeartSharp, IoRemoveOutline } from 'react-icons/io5';
import {
  CartItem,
  addItem,
  minusItem,
  removeItem,
  selectCartItemById,
} from '../../redux/slices/cartSlice';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import {
  addFavouriteItem,
  removeFavouriteItem,
  selectFavouriteItemById,
} from '../../redux/slices/favouriteSlice';

const Card = ({ id, title, price, imageUrl, types }) => {
  const cartItem = useSelector(selectCartItemById(id));
  const count = cartItem ? cartItem.count : 0;

  const favouriteItem = useSelector(selectFavouriteItemById(id));
  const heart = favouriteItem ? true : false;
  const dispath = useDispatch();

  const onClickFavourite = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      count: 0,
      types,
    };
    heart ? dispath(removeFavouriteItem(id)) : dispath(addFavouriteItem(item));
  };

  const onClickPlus = () => {
    dispath(
      addItem({
        id,
      }),
    );
  };

  const onClickMinus = () => {
    count > 1 ? dispath(minusItem(id)) : dispath(removeItem(id));
  };

  const onClickButtonAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      count: 0,
      types,
    };
    dispath(addItem(item));
  };
  return (
    <div className="card">
      <div className="item">
        {heart ? (
          <IoHeartSharp size={24} className="icon-favorite" onClick={onClickFavourite} />
        ) : (
          <IoHeartOutline size={24} className="icon-favorite" onClick={onClickFavourite} />
        )}
        <img src={imageUrl} />
        <div className="description">
          <h4>{title}</h4>
          <p>{types}</p>
          <h5>{price} €</h5>
        </div>
      </div>
      {count > 0 ? (
        <div className="three-buttons">
          <button className="button-added" onClick={onClickButtonAdd}>
            Added
          </button>
          <button className="button-cart-item" onClick={onClickMinus}>
            <IoRemoveOutline size={24} />
          </button>
          <b>{count}</b>
          <button className="button-cart-item" onClick={onClickPlus}>
            <IoAddOutline size={24} />
          </button>
        </div>
      ) : (
        <button onClick={onClickButtonAdd}>Add to cart</button>
      )}
    </div>
  );
};

export default Card;
