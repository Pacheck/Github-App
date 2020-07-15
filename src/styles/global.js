import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    #root{
        min-height: 100vh;
    }

    body{
        color: ${(props) => (props.isDark ? '#000' : '#fff')};
        background-color: ${(props) => (props.isDark ? '#c4baba' : '#121212')};

    }
`;

export default GlobalStyle;
