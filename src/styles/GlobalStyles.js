import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    color: ${props => props.theme.offWhite};
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
  }
`;

export default GlobalStyles;