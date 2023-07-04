import { IoCartOutline, IoHeartOutline, IoPersonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './header.scss';
import Search from '../Search/Search';

function Header() {
  return (
    <header className="container-header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div>
          <p className="logo">SPACE</p>
        </div>
      </Link>
      <Search />
      <div className="icons">
        <Link to="/cart" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <IoCartOutline size={24} />
        </Link>
        <Link to="/favorites" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <IoHeartOutline size={24} />
        </Link>
        <IoPersonOutline size={24} />
      </div>
    </header>
  );
}

export default Header;
