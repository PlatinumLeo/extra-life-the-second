import { createMuiTheme } from '@material-ui/core/styles';

const getPalette = (type) => {
  const lightTheme = {
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
    },
  }

  return type === 'light' ? lightTheme : {};
};

const getTypography = (type) => {
  const typography = {
    fontFamily: 'Monserrat, Arial, Russo One'
  }

  return typography;
};

const getOverrides = (type) => {
  const overrides = {};

  return overrides;
};

const createTheme = (type = 'light') => {
  const palette = getPalette(type);
  const typography = getTypography(type);
  const overrides = getOverrides(type);

  return createMuiTheme({
    palette: {
      ...palette,
      type
    },
    typography,
    overrides
  });
}

export default createTheme;
