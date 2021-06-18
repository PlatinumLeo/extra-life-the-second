import { createMuiTheme } from '@material-ui/core';

export const defaultTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#18527a',
    },
    secondary: {
      main: '#97c93c',
    },
    background: {
      default: '#fff',
      lightGrey: '#fcfcfc',
    },
    text: {
      primary: '#394141',
      secondary: '#010111'
    }
  },
  typography: {
    fontFamily: 'Monserrat, Arial, Russo One'
  }
});
