import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    font-family: "Raleway";
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    background: var(--bg1);
    color: var(--text);
    font-weight: var(--fontWeight);
    transition: background, color 150ms linear;
  }
`;
