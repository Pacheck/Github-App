import React from 'react';
import InputSearch from './styles';

const Search = ({ handleSearch, isDisabled }) => (
  <InputSearch className="search">
    <input
      type="search"
      disabled={isDisabled}
      placeholder="Digite o nome do usuário no Github"
      onKeyUp={handleSearch}
    />
  </InputSearch>
);

export default Search;
