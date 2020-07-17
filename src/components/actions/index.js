import React from 'react';
import { Botao, Act, Hr } from './styles';

const Actions = ({ getRepos, getStarred, isDark }) => (
  <>
    <Act className="actions">
      <Botao onClick={getRepos} isDark={isDark}>
        Ver repositórios
      </Botao>
      <Botao onClick={getStarred} isDark={isDark}>
        Ver favoritos
      </Botao>
    </Act>
    {!!getRepos && <Hr></Hr>}
  </>
);

export default Actions;
