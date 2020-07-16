import React from 'react';
import { Botao, Act } from './styles';

const Actions = ({ getRepos, getStarred, isDark }) => (
  <Act className="actions">
    <Botao onClick={getRepos} isDark={isDark}>
      Ver repositórios
    </Botao>
    <Botao onClick={getStarred} isDark={isDark}>
      Ver favoritos
    </Botao>
  </Act>
);

export default Actions;
