import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import Card from '../components/Card/Card';
import banner from '../img/main-banner.png';
import { useAppDispatch } from '../redux/store';
import { fetchItems, selectItems } from '../redux/slices/itemSlice';
import { useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useAppDispatch();

  const { items } = useSelector(selectItems);

  React.useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0);
      console.log('try');
      dispatch(fetchItems());
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="wrapper">
        <img src={banner} className="banner" />
        <h1>Turn your home into the space of your dreams</h1>
      </div>
      <div className="container">
        <div className="heading">
          <h2>New arrivals</h2>
          <button>
            See all <IoArrowForwardOutline />
          </button>
        </div>

        <div className="items-grid">
          {items.map((el) => (
            <Card key={el.id} {...el} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
