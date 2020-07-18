import React from 'react';
import StyledRepos from './styles';

const Repos = ({ className, title, repos, isDark }) => (
  <StyledRepos className="className" isDark={isDark}>
    <h2 className="titulo">{title}</h2>

    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </StyledRepos>
);

export default Repos;
