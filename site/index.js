import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './App.v2';
import ThemeProvider from './ThemeProvider';
import TeamProvider from './TeamProvider';
import DonationsProvider from './DonationsProvider';

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
