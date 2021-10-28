const calcFontSize = (size) => {
  const minWidth = 375;
  const maxWidth = 1920;
  const minSize = size * .75;
  const maxSize = size;

  return {
    fontSize: `calc(${minSize}px + (${maxSize} - ${minSize}) * ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth})))`,
    minHeight: '0vw',
  };
}


const h1 = {
  ...calcFontSize(54),
  fontWeight: 700,
  lineHeight: '120%'
};

const h2 = {
  ...calcFontSize(42),
  fontWeight: 700,
};

const h3 = {
  ...calcFontSize(34),
  fontWeight: 700,
};

const h4 = {
  ...calcFontSize(26),
  fontWeight: 700,
};

const h5 = {
  ...calcFontSize(24),
  fontWeight: 700,
};

const body1 = {
  ...calcFontSize(18),
  fontWeight: 400,
  lineHeight: '32px'
};

const button = {
  ...calcFontSize(18),
  fontWeight: 700,
};

const caption = {
  ...calcFontSize(14),
  fontWeight: 400,
};

export const typography = {
  fontFamily: 'Quantico, Arial, Roboto',
  fontWeight: 400,
  h1,
  h2,
  h3,
  h4,
  h5,
  body1,
  button,
  caption,
};

export default typography;
