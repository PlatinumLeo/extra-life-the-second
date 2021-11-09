import { createTheme } from '@mui/material/styles';
import { typography } from '../alpha/typography';
import { overrides } from '../alpha/overrides';
import { palette } from './palette';

export const monochromeTheme = (mode = 'light') => {
  return createTheme({
    palette: Object.assign({}, palette, { mode }),
    typography,
    overrides,
  })
};
