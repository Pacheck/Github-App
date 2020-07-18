import styled from 'styled-components';

const StyledRepos = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  align-content: center;

  h2 {
    display: flex;
    justify-items: center;
  }

  .titulo {
  }

  ul {
    padding: 0px;
    width: 100%;
    max-width: 375px;
  }

  li {
    list-style: none;
    align-items: center;
  }

  a {
    display: flex;
    flex-direction: row;

    font-family: 'Rowdies', cursive;

    ${(props) =>
      props.isDark
        ? 'background-color: #F3F4F6; border: solid 1px #b8babc; color: #000;'
        : 'background-color: #1d2121; border: solid 1px #c3e2e3; color: #FFF;'}

    border-radius: 10px;

    padding: 20px;
    margin: 10px 0px;

    text-decoration: none;
    justify-content: center;

    :hover {
      color: #000;
      background-color: #d1caca;
      transition: background-color 700ms;
      transition: color 400ms;
    }
  }

  @media (max-width: 524px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledRepos;
