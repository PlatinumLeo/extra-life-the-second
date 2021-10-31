import { createTheme } from '@material-ui/core/styles';

export const defaultTheme = (type = 'light') => {
  return createTheme({
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
      }
    },
    typography: {
      fontFamily: 'Monserrat, Arial, Russo One'
    }
  });
};
