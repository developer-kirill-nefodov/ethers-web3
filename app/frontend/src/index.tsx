import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";

import {store} from './store';
import {theme} from "./theme";
import App from './App';

import './bootstrap';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
