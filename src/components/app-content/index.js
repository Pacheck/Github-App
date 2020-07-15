import App from './styles';
import Search from '../search';
import UserInfo from '../user-info';
import Actions from '../actions';
import Repos from '../repos';
import Loading from '../loading';
import Tema from '../theme/index';

import React from 'react';

const AppContent = ({
  userinfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarred,
  isFetching,
  isDark,
}) => (
  <App className="app" isDark={isDark}>
    <div className="container">
      <Search isDisabled={isFetching} handleSearch={handleSearch} />

      {isFetching && <Loading />}

      {!!userinfo && <UserInfo userinfo={userinfo} />}

      {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

      <div className="repo-flex">
        {!!repos.length && (
          <Repos className="Repos" title="Repositórios" repos={repos} />
        )}
        {!!starred.length && (
          <Repos className="Starred" title="Favoritos" repos={starred} />
        )}
      </div>
    </div>
  </App>
);

export default AppContent;
