import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Muli', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  position: relative;
  background: #F4F4F4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}


#root {
  min-height: 100vh;
}

`;

export default GlobalStyles;
