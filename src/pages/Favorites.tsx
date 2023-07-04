import { useDispatch } from 'react-redux';
import { clearFavouriteItems, selectFavourite } from '../redux/slices/favouriteSlice';
import { useSelector } from 'react-redux';
import CartEmpty from '../components/CartEmpty';
import { IoTrashBinOutline } from 'react-icons/io5';
import Card from '../components/Card/Card';

const Favorites = () => {
  const dispath = useDispatch();
  const { items } = useSelector(selectFavourite);

  const onClickClear = () => {
    dispath(clearFavouriteItems());
  };

  console.log(items);

  if (items.length === 0) {
    return <CartEmpty />;
  }
  return (
    <div className="container">
      <div className="heading">
        <h2>Favourites</h2>
        <button onClick={onClickClear} className="clean-cart">
          <IoTrashBinOutline />
          Clear favourites
        </button>
      </div>
      <div className="items-grid">
        {items.map((item: any) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
