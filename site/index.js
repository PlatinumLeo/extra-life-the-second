import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './App.v2';
import AdaptivityProvider from './providers/AdaptivityProvider';
import ThemeProvider from './providers/ThemeProvider';
import DonorDriveApiProvider from './providers/DonorDriveApiProvider';
import StreamProvider from './providers/StreamProvider';

render(
      <ThemeProvider>
        <StreamProvider>
          <AdaptivityProvider>
            <DonorDriveApiProvider>
              <App />
            </DonorDriveApiProvider>
          </AdaptivityProvider>
        </StreamProvider>
      </ThemeProvider>,
    document.getElementById('root') // eslint-disable-line no-undef
);

if (module.hot) module.hot.accept(); // eslint-disable-line no-undef
