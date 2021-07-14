import { createMuiTheme } from '@material-ui/core';
import { blueGrey, grey, red } from '@material-ui/core/colors';

const clipRadius = 5;

export const monochromeTheme = (type = 'light') => {
  return createMuiTheme({
    palette: {
      type,
      primary: grey,
      secondary: blueGrey
    },
    typography: {
      fontFamily: 'Quantico, Arial, Roboto'
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 0,
          'clip-path': `polygon(
            0 0,
            0 0,
            calc(100% - ${clipRadius}px) 0,
            100% ${clipRadius}px,
            100% 100%,
            calc(100% - ${clipRadius}px) 100%,
            ${clipRadius}px 100%,
            0% calc(100% - ${clipRadius}px))`
          // 'clip-path': 'polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)'
        },
        outlined: {
          
        }
      }
    }
  })
};
