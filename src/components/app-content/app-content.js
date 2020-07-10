import Search from '../search/search';
import UserInfo from '../user-info/user-info';
import Actions from '../actions/actions';
import Repos from '../repos/repos';
import Loading from '../loading/loading';

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
  <div className="app">
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
  </div>
);

export default AppContent;
