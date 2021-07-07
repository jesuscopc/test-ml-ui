import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import icSearch from 'assets/images/ic_Search.png';
import './index.scss';

const SearchBox = (): React.ReactElement => {
  const [inputSearch, setInputSearch] = useState<string>('');
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    history.push(`/items?search=${inputSearch}`);
  };

  return (
    <form className="searchBox" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Nunca dejes de buscar"
        name="search"
        value={inputSearch}
        onChange={e => setInputSearch(e.currentTarget.value)}
      />
      <button type="submit">
        <img src={icSearch} alt="buscar" />
      </button>
    </form>
  );
};

export default SearchBox;
