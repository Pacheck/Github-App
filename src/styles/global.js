import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {  
    color: ${(props) => (props.whiteColor ? 'white' : 'black')};
    background-color: ${(props) => (props.whiteColor ? 'white' : '#121212')}
}`;

export default GlobalStyle;
