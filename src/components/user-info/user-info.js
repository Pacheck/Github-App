import React from 'react';

const UserInfo = ({ userinfo }) => (
  <div className="user-info">
    <img src={userinfo.photo} alt="user_image"></img>
    <div className="git-info">
      <h1 className="user-name">
        <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
      </h1>

      <ul className="repos-info">
        <li>Repositórios: {userinfo.repos}</li>
        <li>Seguidores: {userinfo.followers}</li>
        <li>Seguindo: {userinfo.following}</li>
      </ul>
    </div>
  </div>
);

export default UserInfo;
