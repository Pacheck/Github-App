import React from 'react';

const Search = ({ handleSearch, searchFieldDisabled }) => (
  <div className="search">
    <input
      type="search"
      disabled={searchFieldDisabled}
      placeholder="Digite o nome do usuário no Github"
      onKeyUp={handleSearch}
    />
  </div>
);

export default Search;
