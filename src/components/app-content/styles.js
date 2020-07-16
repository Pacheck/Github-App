import styled from 'styled-components';

const App = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap');

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;

  .container {
    display: flex;

    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    max-width: 800px;
    min-width: 250px;

    padding: 25px;
    background-color: ${(props) => (props.isDark ? '#FFF' : '#2e2e2e')};
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
