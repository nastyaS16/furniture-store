import { IoCloseCircleOutline, IoSearchOutline } from 'react-icons/io5';
import './search.scss';

const Search = () => {
  return (
    <div
      className="
    shape">
      <IoSearchOutline className="search" />
      <input className="input" placeholder="Search for items" />
      <IoCloseCircleOutline className="close" />
    </div>
  );
};

export default Search;
