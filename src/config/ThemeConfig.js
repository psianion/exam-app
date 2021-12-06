import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    font-size: 62.5%; 
    overflow-x: hidden;
    font-family: 'Open Sans', sans-serif;
    background-color: #303438;
    color: #e0e0e0;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

li {
    list-style: none;
}

a:link, a:visited, a:hover, a:active {
    text-decoration: none;
}

`;
