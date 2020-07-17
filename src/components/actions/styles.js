import styled from 'styled-components';

export const Botao = styled.button`
  width: 200px;
  height: 50px;
  border: 0px solid;
  border-radius: 6px;
  font-family: 'Rowdies', cursive;

  ${(props) =>
    props.isDark
      ? 'background-color: #F3F4F6; border: solid 1px #b8babc; color: #000'
      : 'background-color: #1d2121; border: solid 1px #c3e2e3; color: #FFF'}
`;

export const Hr = styled.hr`
  border-top: 1px solid #fefe;
  margin-top: 10px;
  width: 100%;
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
    display: flex;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr;
    flex-direction: column;
  }
`;

export default Botao;
