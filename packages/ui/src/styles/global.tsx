import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #2F3437;
  background: #ffffff;
  color: rgba(255, 255, 255, 0.9);
  color: rgb(4, 4, 2);
}


#root {
  min-height: 100vh;
}

`;

export default GlobalStyles;
