import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    list-style: none;
    text-decoration: none;
  }

  :root {
    font-size: 62.5%;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px transparent;
  }

  body {
    color: ${props=>props.theme["base-text"]};
    background: ${props=>props.theme.background}
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
  }


`