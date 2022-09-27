import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root {
      --placeholder-text: #868E96;
      --background-primary: #655e91;
      --light-grey: #F3F3F3;
      --black: #3d3c3c;
      --dark-blue: #22333B;
      --grey-1: #C4C4C4;
      --blue-1: #001AFF;
      --blue-2: #3461FF;
      --blue-3: #5d8afd;
      --card: #908C8C;
      --side-background: #e3e3e3;
    }
    body {
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
        overflow-x:hidden;
        background-color: var(--background-primary)
    }
    button {
        font-family: 'Inter', sans-serif;
        border: none;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
    }
    button:hover {
        background-color: var(--dark-blue)
    }
    span{
    color: var(--red-1);
    font-size:0.6rem;
    }
    h1,h2,h3,h4 {
        font-weight: 700;
        overflow-wrap: break-word;
    }
    a {
        text-decoration: none;
    }
    p {
        color: var(--card)
    }
`;
