import React from 'react';
import { Botao, Act } from './styles';

const Actions = ({ getRepos, getStarred }) => (
  <Act className="actions">
    <Botao onClick={getRepos}>Ver repositórios</Botao>
    <Botao onClick={getStarred}>Ver favoritos</Botao>
  </Act>
);

export default Actions;
