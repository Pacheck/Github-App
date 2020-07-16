import styled from 'styled-components';

const StyledRepos = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;

  h2 {
    align-items: center;
  }

  ul {
    padding: 0px;
  }

  li {
    list-style: none;
  }

  a {
  }

  @media (max-width: 524px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledRepos;
