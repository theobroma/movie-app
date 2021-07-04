import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { AppContainer } from './#/App';
import { store, persistor, history } from './configureStore';
import LoadingPage from './@components/UI/LoadingPage';
import SnackBarProvider from './@components/UI/SnackBar/SnackBarProvider';
import { Notifier } from './@components/UI/SnackBar';
import AppThemeProvider from './@themes/theme';
import reportWebVitals from './reportWebVitals';

// All styles
import './@assets/styles/index.scss';

// Open Source typefaces
import 'typeface-roboto';

const rootEl = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<LoadingPage />}
        persistor={persistor}
        onBeforeLift={() => new Promise((resolve) => setTimeout(resolve, 100))} // delay
      >
        <AppThemeProvider>
          <SnackBarProvider>
            <ConnectedRouter history={history}>
              <AppContainer />
              <Notifier />
            </ConnectedRouter>
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
