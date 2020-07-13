import styled from 'styled-components';

export const Botao = styled.button`
  width: 200px;
  height: 50px;
  border: 0px solid;
  border-radius: 6px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #c3e2e3;
`;

export const Act = styled.div`
  justify-content: space-evenly;
  width: 100%;
  display: flex;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    padding: 20px;
  }

  @media (max-width: 524px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export default Botao;
