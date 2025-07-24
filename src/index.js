import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import colors from './styles/colors';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
