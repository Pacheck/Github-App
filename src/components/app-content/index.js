import App from './styled';
import Search from '../search';
import UserInfo from '../user-info';
import Actions from '../actions';
import Repos from '../repos';
import Loading from '../loading';

import React from 'react';

const AppContent = ({
  userinfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarred,
  isFetching,
}) => (
  <App className="app">
    <Search isDisabled={isFetching} handleSearch={handleSearch} />

    {isFetching && <Loading />}

    {!!userinfo && <UserInfo userinfo={userinfo} />}

    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length && (
      <Repos className="Repos" title="Repositórios" repos={repos} />
    )}
    {!!starred.length && (
      <Repos className="Starred" title="Favoritos" repos={starred} />
    )}
  </App>
);

export default AppContent;
