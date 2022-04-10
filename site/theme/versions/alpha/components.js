import { createNotchedClipPath, createNotchedBorder } from  '../../../utils';

const clipRadius = 8;
const borderWidth = 2;

const components = {
  MuiButton: {
    defaultProps: {
      disableRipple: true
    },
    styleOverrides: {
      root: {
        clipPath: createNotchedClipPath(clipRadius),
        borderRadius: '0px'
      },
      contained: {
        color: '#0150E9',
        backgroundColor: '#fff'
      },
      outlined: {
        position: 'relative',
        clipPath: createNotchedClipPath(clipRadius),
        background: 'rgba(0, 0, 0, 0)',
        border: 'none',
        color: '#fff',
        '&::after': {
          content: '"Button"',
          position: 'absolute',
          clipPath: createNotchedBorder(clipRadius, borderWidth),
          background: '#fff none repeat scroll 0% 0%',
          inset: '0px'
        }
      },
      outlinedSecondary: {
        position: 'relative',
        clipPath: createNotchedClipPath(clipRadius),
        background: 'rgba(0, 0, 0, 0)',
        border: 'none',
        color: '#0150E9',
        '&::after': {
          content: '"Button"',
          position: 'absolute',
          clipPath: createNotchedBorder(clipRadius, borderWidth),
          background: '#0150E9 none repeat scroll 0% 0%',
          inset: '0px'
        }
      }
    }
  }
}

export default components;
