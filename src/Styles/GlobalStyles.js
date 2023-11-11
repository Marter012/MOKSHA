import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
    --orange-bg: #2f2618;
    --orange: #ff9d01;
    --magenta: #FF005C;
    --primary: #9ce3d4;
    --btn-gradient: linear-gradient(83deg, #ffa100, #fb103d);
    --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
    }

    html{
        scroll-behavior: smooth;
    }

    body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }

`
