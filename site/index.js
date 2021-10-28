import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';

import './index.css';
import App from './App.v2';
import ThemeProvider from './ThemeProvider';
import TeamProvider from './TeamProvider';
import DonationsProvider from './DonationsProvider';
import allMiddleware from './middleware';
import rootReducer from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(allMiddleware)
);

render(
      <ThemeProvider>
        <TeamProvider>
          <DonationsProvider>
            <App />
          </DonationsProvider>
        </TeamProvider>
      </ThemeProvider>,
    document.getElementById('root') // eslint-disable-line no-undef
);

if (module.hot) module.hot.accept(); // eslint-disable-line no-undef
