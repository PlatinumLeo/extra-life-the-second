const clipRadius = 5;

export const overrides = {
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
    },
  }
}

export default overrides;
