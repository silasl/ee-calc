import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato');

    body {
        font-size: 2rem;
        font-family: Lato, sans-serif;
        font-weight: 400;
        color: #666;
        background-color: #eee;
    }
`;
