import { createGlobalStyle } from 'styled-components';

const RootGlobalStyle = createGlobalStyle`
  html {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    body {
      margin: 0;
      width: 100vw;
      min-width: 700px;
      min-height: 600px;
      height: 100vh;
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
`;

export {
  RootGlobalStyle,
};
