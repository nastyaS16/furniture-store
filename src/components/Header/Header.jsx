import { IoCartOutline, IoHeartOutline, IoPersonOutline } from 'react-icons/io5';
import './header.scss';
import Search from '../Search/Search';

function Header() {
  return (
    <header className="container-header">
      <div>
        <p className="logo">SPACE</p>
      </div>
      <Search />
      <div className="icons">
        <IoCartOutline size={24} />
        <IoHeartOutline size={24} />
        <IoPersonOutline size={24} />
      </div>
    </header>
  );
}

export default Header;
