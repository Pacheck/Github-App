import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
};

    #root {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        max-width: 800px;
        min-width: 324px;
    }


body {  
    color: ${(props) => (props.isDark ? '#000' : '#fff')};
    background-color: ${(props) => (props.isDark ? '#c4baba' : '#121212')};
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    min-width: 250px;
}`;

export default GlobalStyle;
