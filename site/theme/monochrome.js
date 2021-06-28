import { createMuiTheme } from '@material-ui/core';
import { blueGrey, grey } from '@material-ui/core/colors';

import QuanticoRegular from '../assets/fonts/Quantico/Quantico-Regular.ttf';

// const quantico = {
//   fontFamily: 'Quantico',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//     local('Quantico'),
//     local(Quantico-Regular),
//     url(${QuanticoRegular}) format('truetype')
//   `// ,
//   // unicodeRange: ''
// };

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
            90% 0,
            100% 20%,
            100% 100%,
            90% 100%,
            10% 100%,
            0% 80%)`
        }
      }
    }
  })
};
