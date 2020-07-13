import React from 'react';
import StyledRepos from './styles';

const Repos = ({ className, title, repos }) => (
  <StyledRepos className="className">
    <h2>{title}</h2>
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
