// eslint-disable-next-line simple-import-sort/imports
import './wdyr'; // <--- first import

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { instance } from './@api/api';
import LoadingPage from './@components/UI/LoadingPage';
import SnackBarProvider from './@components/UI/SnackBar/SnackBarProvider';
import { AppContainer } from './@routes/AppContainer';
import { persistor, store } from './@store/configureStore';
import AppThemeProvider from './@themes/theme';
import { alpha2iso } from './@utils/alpha2iso';
import reportWebVitals from './reportWebVitals';

import './index.css';
// All styles
import './@assets/styles/index.scss';
// Open Source fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './i18n';

/* eslint-disable @typescript-eslint/no-var-requires */
const countries = require('i18n-iso-countries');
// import all supported languages
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
countries.registerLocale(require('i18n-iso-countries/langs/uk.json'));
/* eslint-enable @typescript-eslint/no-var-requires */

const rootEl = document.getElementById('root');

// Request interceptors for API calls
instance.interceptors.request.use(
  (config) => {
    // grab current state
    const state = store.getState();
    config.params.language = alpha2iso(state.ui.language);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<LoadingPage />} persistor={persistor}>
        <AppThemeProvider>
          <SnackBarProvider>
            <AppContainer />
          </SnackBarProvider>
        </AppThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootEl,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
