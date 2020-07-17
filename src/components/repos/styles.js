import styled from 'styled-components';

const StyledRepos = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;

  h2 {
    align-items: center;
  }

  ul {
    padding: 0px;
  }

  li {
    list-style: none;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: red;
    padding: 20px;
  }

  @media (max-width: 524px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledRepos;
