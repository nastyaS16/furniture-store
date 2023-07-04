import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';
import FullItem from './pages/FullItem';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Favorites from './pages/Favorites';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="item/:id" element={<FullItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
