import { createMuiTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const defaultTheme = (type = 'light') => {
  return createMuiTheme({
    palette: {
      type,
      primary: {
        light: '#307ba4',
        main: '#18527a',
        dark: '#002a52'
      },
      secondary: {
        light: '#c9f774',
        main: '#97c93c',
        dark: '#77a326'
      },
      background: {
        default: '#fff',
        lightGrey: '#fcfcfc',
      },
      // text: {
      //   primary: {
      //     main: grey[800],
      //   },
      //   secondary: grey[900]
      // }
    },
    typography: {
      fontFamily: 'Monserrat, Arial, Russo One'
    }
  });
};
