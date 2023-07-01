import { IoHeartOutline } from 'react-icons/io5';

const Card = ({ id, title, price, imageUrl, types }) => {
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
      <button>Add to cart</button>
    </div>
  );
};

export default Card;
