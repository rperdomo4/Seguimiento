import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.text};
  }
`;

export default GlobalStyles;
