import styled from 'styled-components';

const App = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: 800px;
  min-width: 325px;
  padding: 25px;
  background-color: #ddd7d7;
  border-radius: 15px;

  .repo-flex {
    margin: 0 auto;
    display: flex;
    padding: 10px;
  }

  @media (max-width: 515px) {
    .repo-flex {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

export default App;
