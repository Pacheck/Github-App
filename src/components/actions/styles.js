import styled from 'styled-components';

export const Botao = styled.button`
  width: 200px;
  height: 50px;
  margin: 0 auto;
  border: 0px solid;
  border-radius: 6px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #c3e2e3;
`;

export const Act = styled.div`
  margin: 0 auto;

  button {
    margin: 5px;
  }

  @media (max-width: 515px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export default Botao;
