import React from 'react';
import icSearch from 'assets/images/ic_Search.png';
import './index.scss';

const SearchBar = (): React.ReactElement => {
  return (
    <div className="search__wrapper">
      <form className="search">
        <input type="search" placeholder="Nunca dejes de buscar" name="search" />
        <button type="submit">
          <img src={icSearch} alt="buscar" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
