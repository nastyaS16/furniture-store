import { IoHeartOutline } from 'react-icons/io5';
import { CartItem, addItem, selectCartItemById } from '../../redux/slices/cartSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Card = ({ id, title, price, imageUrl, types }) => {
  const cartItem = useSelector(selectCartItemById(id));
  const count = cartItem ? cartItem.count : 0;
  const dispath = useDispatch();

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
    console.log(item);
  };
  return (
    <div className="card">
      <div className="item">
        <IoHeartOutline size={24} className="icon-favorite" />
        <img src={imageUrl} />
        <div className="description">
          <h4>{title}</h4>
          <p>{types}</p>
          <h5>{price} €</h5>
        </div>
      </div>
      <button onClick={onClickButtonAdd}>Add to cart {count > 0 && <i>{count}</i>}</button>
    </div>
  );
};

export default Card;
