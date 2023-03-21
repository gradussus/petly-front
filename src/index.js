import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import { Provider } from 'react-redux';
import appStore from './redux/store';

import './index.css';

const { store } = appStore;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/petly-front">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);