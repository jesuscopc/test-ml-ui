import React from 'react';
import icSearch from 'assets/images/ic_Search.png';
import './index.scss';

const SearchBox = (): React.ReactElement => {
  return (
    <form className="searchBox">
      <input type="search" placeholder="Nunca dejes de buscar" name="search" />
      <button type="submit">
        <img src={icSearch} alt="buscar" />
      </button>
    </form>
  );
};

export default SearchBox;
