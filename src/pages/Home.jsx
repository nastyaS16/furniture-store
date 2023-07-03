import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import Card from '../components/Card/Card';
import banner from '../img/main-banner.png';
import subscribe from '../img/subscribtion.png';
import { useAppDispatch } from '../redux/store';
import { fetchItems, selectItems } from '../redux/slices/itemSlice';
import { useSelector } from 'react-redux';
import { selectFilter, selectSort } from '../redux/slices/filterSlice';
import Sort from '../components/Sort';

const Home = () => {
  const dispatch = useAppDispatch();
  const { searchValue } = useSelector(selectFilter);
  const selectedSort = useSelector(selectSort);

  const { items } = useSelector(selectItems);

  React.useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0);
      const search = searchValue ? `&search=${searchValue}` : '';
      console.log('try');
      dispatch(fetchItems({ search, selectedSort }));
    }
    fetchData();
  }, [searchValue, selectedSort]);

  return (
    <>
      <div className="wrapper">
        <img src={banner} className="banner" />
        <h1>Turn your home into the space of your dreams</h1>
      </div>
      <div className="container">
        <div className="heading">
          <h2>New arrivals</h2>
          <Sort />
        </div>

        <div className="items-grid">
          {items.map((el) => (
            <Card key={el.id} {...el} />
          ))}
        </div>
      </div>
      <div className="subscribe">
        <div>
          <p>
            Stay up to date with latest furniture trends, promotions and new arrivals by subscribing
            to our newsletter
          </p>
          <input placeholder="E-mail" />
          <button>Subscribe</button>
        </div>
        <img src={subscribe} className="subscribe-image" />
      </div>
      <footer>
        <p className="logo">SPACE</p>
        <li>
          <h4>Contact us</h4>
          <ul>Contacts</ul>
          <ul>Stores</ul>
          <ul>Message us</ul>
          <ul>Collaborate with SPACE</ul>
        </li>
        <li>
          <h4>About SPACE</h4>
          <ul>About company</ul>
          <ul>Carrier</ul>
        </li>
      </footer>
    </>
  );
};

export default Home;
