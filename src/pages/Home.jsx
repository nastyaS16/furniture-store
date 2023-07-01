import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import Card from '../components/Card/Card';
import banner from '../img/main-banner.png';

const Home = () => {
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

        <div>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
