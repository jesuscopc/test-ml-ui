import React, { useState } from 'react';
import icSearch from 'assets/images/ic_Search.png';
import './index.scss';

const SearchBox = (): React.ReactElement => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  return (
    <form className="searchBox" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Nunca dejes de buscar"
        name="search"
        value={inputValue}
        onChange={e => setInputValue(e.currentTarget.value)}
      />
      <button type="submit">
        <img src={icSearch} alt="buscar" />
      </button>
    </form>
  );
};

export default SearchBox;
