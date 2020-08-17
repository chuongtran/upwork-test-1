// eslint-disable-next-line import/no-unused-modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// SENTRY
import * as Sentry from '@sentry/browser';

// STORES
import configureStore from './redux/store';

import './index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const { NODE_ENV } = process.env;

// INIT SENTRY
if (NODE_ENV === 'production') {
  Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DNS });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
