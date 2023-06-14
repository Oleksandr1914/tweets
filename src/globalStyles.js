import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  body {
    background-color: #ffffff;
    color: #000000;
  }

  input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
   border: 2px solid #ffffff;
  -webkit-text-fill-color: #52555f;
  
  transition: background-color 5000s ease-in-out 0s;
}
`;
