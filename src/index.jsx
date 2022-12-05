import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { configStore } from './store';

import { App } from './App';

// styles
import "font-awesome/css/font-awesome.min.css"
import './assets/scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={configStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

