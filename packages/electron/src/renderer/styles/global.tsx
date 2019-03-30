import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #000000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42857142857143;
  background: white;
}
`;

export default GlobalStyles;
