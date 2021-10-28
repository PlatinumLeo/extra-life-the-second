import { createMuiTheme } from '@material-ui/core';
import { typography } from '../alpha/typography';
import { overrides } from '../alpha/overrides';
import { palette } from './palette';

export const monochromeTheme = (type = 'light') => {
  return createMuiTheme({
    palette: Object.assign({}, palette, { type }),
    typography,
    overrides,
  })
};
