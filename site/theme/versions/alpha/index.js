import { createTheme } from '@material-ui/core/styles';
import { typography } from './typography';
import { overrides } from './overrides';
import { palette } from './palette';

export const alphaTheme = (type = 'light') => {
  return createTheme({
    palette: Object.assign({}, palette, { type }),
    typography,
    overrides,
  })
};
