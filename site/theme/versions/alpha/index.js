import { createTheme } from '@mui/material/styles';
import breakpoints from './breakpoints';
import components from './components';
import { palette } from './palette';
import { typography } from './typography';

export const alphaTheme = (mode = 'light') => {
  return createTheme({
    palette: Object.assign({}, palette, { mode }),
    typography,
    components,
    breakpoints
  })
};
