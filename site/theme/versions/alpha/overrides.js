import { createNotchedClipPath, createNotchedBorder } from  '../../../utils';

const clipRadius = 8;
const borderWidth = 2;

export const overrides = {
  MuiButton: {
    root: {
      'clip-path': createNotchedClipPath(clipRadius),
      'border-radius': '0px'
    },
    contained: {
      color: '#0150E9',
      backgroundColor: '#fff'
    },
    outlined: {
      position: 'relative',
      'clip-path': createNotchedClipPath(clipRadius),
      background: 'rgba(0, 0, 0, 0)',
      border: 'none',
      color: '#fff',
      '&::after': {
        content: '"Button"',
        position: 'absolute',
        'clip-path': createNotchedBorder(clipRadius, borderWidth),
        background: '#fff none repeat scroll 0% 0%',
        inset: '0px'
      }
    },
    outlinedSecondary: {
      position: 'relative',
      'clip-path': createNotchedClipPath(clipRadius),
      background: 'rgba(0, 0, 0, 0)',
      border: 'none',
      '&::after': {
        content: '"Button"',
        position: 'absolute',
        'clip-path': createNotchedBorder(clipRadius, borderWidth),
        background: '#0150E9 none repeat scroll 0% 0%',
        inset: '0px'
      }
    }
  }
}

export default overrides;
