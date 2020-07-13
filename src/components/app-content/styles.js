import styled from 'styled-components';

const App = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  min-width: 324px;

  .container {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 25px;
    background-color: ${(props) => (props.whiteColor ? '#FFF' : '#2e2e2e')};
    border-radius: 15px;

    .repo-flex {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
    }

    @media (max-width: 524px) {
      .repo-flex {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export default App;
