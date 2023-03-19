import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/petly-front">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);