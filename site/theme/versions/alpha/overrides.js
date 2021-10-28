const clipRadius = 8;
const borderWidth = 3;

const BASIC_PATH = `polygon(
  0 0,
  0 calc(100% - ${clipRadius}px),
  ${clipRadius}px 100%,
  100% 100%,
  100% ${clipRadius}px,
  calc(100% - ${clipRadius}px) 0
)`;

const POLYGON_PATH = `polygon(
  0 0,
  0 calc(100% - ${clipRadius}px),
  ${clipRadius}px 100%,
  ${clipRadius}px calc(100% - ${borderWidth}px),
  ${borderWidth}px calc(100% - ${clipRadius}px),
  ${borderWidth}px ${borderWidth}px,
  calc(100% - ${clipRadius}px) ${borderWidth}px,
  calc(100% - ${borderWidth}px) ${clipRadius}px,
  calc(100% - ${borderWidth}px) calc(100% - ${borderWidth}px),
  ${clipRadius}px calc(100% - ${borderWidth}px),
  ${clipRadius}px 100%,
  100% 100%,
  100% ${clipRadius}px,
  calc(100% - ${clipRadius}px) 0
)`;

export const overrides = {
  MuiButton: {
    root: {
      'clip-path': BASIC_PATH,
      'border-radius': '0px'
    },
    contained: {
      color: '#0150E9',
      backgroundColor: '#fff'
    },
    outlined: {
      position: 'relative',
      'clip-path': BASIC_PATH,
      background: 'rgba(0, 0, 0, 0)',
      border: 'none',
      color: '#fff',
      '&::after': {
        content: '"Button"',
        position: 'absolute',
        'clip-path': POLYGON_PATH,
        background: '#fff none repeat scroll 0% 0%',
        inset: '0px'
      }
    },
    outlinedSecondary: {
      position: 'relative',
      'clip-path': BASIC_PATH,
      background: 'rgba(0, 0, 0, 0)',
      border: 'none',
      '&::after': {
        content: '"Button"',
        position: 'absolute',
        'clip-path': POLYGON_PATH,
        background: '#0150E9 none repeat scroll 0% 0%',
        inset: '0px'
      }
    }
  }
}

export default overrides;
