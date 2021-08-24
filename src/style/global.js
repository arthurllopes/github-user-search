import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    }
    body {
        background-color: #f0f2f5;
    }
    border, input, textarea, button{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
    &.main{
        width: 80%;
        margin: 0 auto;
        display: grid;
        gap: 18px;
        grid-template-areas: 
        "form form form"
        "user info info"
        "user projects projects";
    }
`