import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #222B45;
    font-family: 'Oxygen', sans-serif;
    color: #EB5569;
}

#root {
    max-width: 96rem;
    margin: 0 auto;
}
`;
