import { createMuiTheme } from '@material-ui/core';
import { typography } from './typography';
import { overrides } from './overrides';
import { palette } from './palette';

export const alphaTheme = () => {
  return createMuiTheme({
    palette,
    typography,
    overrides,
  })
};
