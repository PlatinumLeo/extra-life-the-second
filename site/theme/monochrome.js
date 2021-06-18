import { createMuiTheme } from '@material-ui/core';
import { blueGrey, grey } from '@material-ui/core/colors';

export const monochromeTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: grey,
    secondary: blueGrey
  }
});

