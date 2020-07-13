import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {  
    color: ${(props) => (props.theme === 'whiteColor' ? 'black' : 'white')};
    background-color: ${(props) =>
      props.theme === 'whiteColor' ? 'white' : '#121212'}
}`;

export default GlobalStyle;
