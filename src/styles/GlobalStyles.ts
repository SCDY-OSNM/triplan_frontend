import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Roboto:wght@400&display=swap');
    
    @font-face {
        font-family: "Noto Sans KR";
        font-style: normal;
    }
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    body {
        font-family: "Noto Sans KR", sans-serif;
    }
    
    .number, .percentage {
        font-family: "Roboto", sans-serif;
    }
`;

export default GlobalStyles;
