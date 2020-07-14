import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {  
    color: ${(props) => (props.isDark ? '#000' : '#fff')};
    background-color: ${(props) => (props.isDark ? '#c4baba' : '#121212')};

    justify-items: center;

}`;

export default GlobalStyle;
