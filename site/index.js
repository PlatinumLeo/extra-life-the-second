import React from 'react';
import { render } from 'react-dom';

import App from './App';
import {MuiThemeProvider} from '@material-ui/core';

import createTheme from './theme';

import './index.css';

const theme = createTheme();

render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root') // eslint-disable-line no-undef
);

if (module.hot) module.hot.accept(); // eslint-disable-line no-undef
