import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { overrides } from './overrides';
import { palette } from './palette';

export const alphaTheme = (mode = 'light') => {
  return createTheme({
    palette: Object.assign({}, palette, { mode }),
    typography,
    overrides,
  })
};
