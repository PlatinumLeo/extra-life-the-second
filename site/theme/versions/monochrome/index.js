import { createTheme } from '@material-ui/core/styles';
import { typography } from '../alpha/typography';
import { overrides } from '../alpha/overrides';
import { palette } from './palette';

export const monochromeTheme = (type = 'light') => {
  return createTheme({
    palette: Object.assign({}, palette, { type }),
    typography,
    overrides,
  })
};
