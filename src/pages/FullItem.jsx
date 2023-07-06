import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SimpleImageSlider from 'react-simple-image-slider';
import first from '../img/1.jpg';
import second from '../img/2.jpg';
import third from '../img/3.jpg';
import {
  addFavouriteItem,
  removeFavouriteItem,
  selectFavouriteItemById,
} from '../redux/slices/favouriteSlice';
import { addItem, minusItem, removeItem, selectCartItemById } from '../redux/slices/cartSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  IoAddOutline,
  IoArrowBackOutline,
  IoHeartOutline,
  IoHeartSharp,
  IoRemoveOutline,
} from 'react-icons/io5';

const FullItem = () => {
  const [item, setItem] = useState();
  const { id } = useParams();

  console.log(item);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchItems() {
      try {
        const { data } = await axios.get(
          'https://641dc760945125fff3d5f129.mockapi.io/favorites/' + id,
        );
        setItem(data);
      } catch (error) {
        alert('Ошибка при получении пиццы');
        navigate('/');
      }
    }
    fetchItems();
  }, []);

  const cartItem = useSelector(selectCartItemById(id));
  const count = cartItem ? cartItem.count : 0;

  const favouriteItem = useSelector(selectFavouriteItemById(id));
  const heart = favouriteItem ? true : false;
  const dispath = useDispatch();

  const onClickFavourite = () => {
    const itemHeart = {
      id,
      title: item.title,
      price: item.price,
      imageUrl: item.imageUrl,
      count: 0,
      types: item.types,
    };
    heart ? dispath(removeFavouriteItem(id)) : dispath(addFavouriteItem(itemHeart));
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
    const itemToAdd = {
      id,
      title: item.title,
      price: item.price,
      imageUrl: item.imageUrl,
      count: 0,
      types: item.types,
    };
    dispath(addItem(itemToAdd));
  };

  if (!item) {
    return <></>;
  }

  const images = [{ url: item.imageUrl }, { url: first }, { url: second }, { url: third }];

  return (
    <div className="container">
      <Link to="/" style={{ textDecoration: 'none' }} className="heading">
        <button>
          <IoArrowBackOutline /> Back to items
        </button>
      </Link>
      <div className="full-item">
        <SimpleImageSlider
          width={500}
          height={500}
          images={images}
          showBullets={true}
          showNavs={true}
        />
        <div className="full-description">
          <div className="head">
            <h3>{item.title}</h3>
            {heart ? (
              <IoHeartSharp size={24} className="icon-favorite" onClick={onClickFavourite} />
            ) : (
              <IoHeartOutline size={24} className="icon-favorite" onClick={onClickFavourite} />
            )}
          </div>
          <p>{item.types}</p>
          <h2>{item.price} €</h2>
          <b className="desc">Description</b>
          <p className="text">
            STRANDMON wing chairs, sofas and foot stools are inspired by an IKEA wing chair from the
            50's. But we put higher demands on our furniture today. That’s why we’ve made sure
            STRANDMON can take a person that sits and gets up at least 50,000 times. That’s once a
            day for 136 years.
          </p>
          {count > 0 ? (
            <div className="three-buttons">
              <button className="button-added" onClick={onClickButtonAdd}>
                Added
              </button>
              <button className="button-cart-item" onClick={onClickMinus}>
                <IoRemoveOutline size={24} />
              </button>
              <b className="count">{count}</b>
              <button className="button-cart-item" onClick={onClickPlus}>
                <IoAddOutline size={24} />
              </button>
            </div>
          ) : (
            <button onClick={onClickButtonAdd} className="button-main ">
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullItem;
