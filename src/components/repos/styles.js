import styled from 'styled-components';

const StyledRepos = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  align-content: center;

  h2 {
    display: flex;
    justify-items: center;
  }

  ul {
    padding: 0px;
  }

  li {
    list-style: none;
    align-items: center;
  }

  a {
    display: flex;

    border: 1px solid #c3e2e3;
    border-radius: 10px;

    background-color: #1d2121;
    color: #fff;
    font-family: 'Rowdies', cursive;

    padding: 20px;
    margin: 10px 0px;

    text-decoration: none;
    justify-content: center;
  }

  @media (max-width: 524px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledRepos;
