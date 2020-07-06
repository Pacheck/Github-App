import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

import React from 'react';

const AppContent = ({
  userinfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarred,
}) => (
  <div className="app">
    <Search handleSearch={handleSearch} />
    {!!userinfo && <UserInfo userinfo={userinfo} />}

    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length && (
      <Repos className="Repos" title="Repositórios" repos={repos} />
    )}
    {!!starred.length && (
      <Repos className="Starred" title="Favoritos" repos={starred} />
    )}
  </div>
);

export default AppContent;
