import React from 'react';
import InputSearch from './styles';

const Search = ({ handleSearch, isDisabled }) => (
  <div className="search">
    <InputSearch
      type="search"
      disabled={isDisabled}
      placeholder="Digite o nome do usuário no Github"
      onKeyUp={handleSearch}
    />
  </div>
);

export default Search;
