import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './App.v2';
import AdaptivityProvider from './AdaptivityProvider';
import ThemeProvider from './ThemeProvider';
import TeamProvider from './TeamProvider';
import DonationsProvider from './DonationsProvider';

render(
      <ThemeProvider>
        <AdaptivityProvider>
          <TeamProvider>
            <DonationsProvider>
              <App />
            </DonationsProvider>
          </TeamProvider>
        </AdaptivityProvider>
      </ThemeProvider>,
    document.getElementById('root') // eslint-disable-line no-undef
);

if (module.hot) module.hot.accept(); // eslint-disable-line no-undef
