import { IoCloseCircleOutline, IoSearchOutline } from 'react-icons/io5';
import React from 'react';
import debounce from 'lodash.debounce';
import './search.scss';
import { useDispatch } from 'react-redux';
import { setSeatchValue } from '../../redux/slices/filterSlice';

const Search = () => {
  const [value, setValue] = React.useState('');

  const dispatch = useDispatch();

  const inputRef = React.useRef<HTMLInputElement>(null);
  const onClickClear = () => {
    dispatch(setSeatchValue(''));
    setValue('');
    //setSearchValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((value: string) => {
      dispatch(setSeatchValue(value));
    }, 1000),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div
      className="
    shape">
      <IoSearchOutline className="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className="input"
        placeholder="Search for items"
      />
      {value && <IoCloseCircleOutline onClick={onClickClear} className="close" />}
    </div>
  );
};

export default Search;
