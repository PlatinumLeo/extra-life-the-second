export const createNotchedClipPath = (clipRadius, reverse=false) => {
  if (reverse) {
    return `polygon(
      100% 0%,
      100% calc(100% - ${clipRadius}px),
      calc(100% - ${clipRadius}px) 100%,
      0% 100%,
      0% ${clipRadius}px,
      ${clipRadius}px 0%
    );`;
  }



  return `polygon(
    0 0,
    0 calc(100% - ${clipRadius}px),
    ${clipRadius}px 100%,
    100% 100%,
    100% ${clipRadius}px,
    calc(100% - ${clipRadius}px) 0
  )`;
};

export const createNotchedBorder = (clipRadius, borderWidth) => {
  return `polygon(
    0 0,
    0 calc(100% - ${clipRadius}px),
    ${clipRadius}px 100%,
    ${clipRadius + (borderWidth / 2)}px 100%,
    ${clipRadius + (borderWidth / 2)}px calc(100% - ${borderWidth}px),
    ${borderWidth}px calc(100% - ${clipRadius + (borderWidth / 2)}px),
    ${borderWidth}px ${borderWidth}px,
    calc(100% - ${clipRadius + (borderWidth / 2)}px) ${borderWidth}px,
    calc(100% - ${borderWidth}px) ${clipRadius + (borderWidth / 2)}px,
    calc(100% - ${borderWidth}px) calc(100% - ${borderWidth}px),
    ${clipRadius + (borderWidth / 2)}px calc(100% - ${borderWidth}px),
    ${clipRadius + (borderWidth / 2)}px 100%,
    100% 100%,
    100% ${clipRadius}px,
    calc(100% - ${clipRadius}px) 0
  )`;
};