import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme.offWhite};
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    line-height: 1.6;
  }

  h1, h2, h3 {
    line-height: 1.2;
  }

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  h2 {
    font-size: clamp(1.35rem, 2.6vw, 1.75rem);
  }

  p {
    line-height: 1.65;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyles;
