export const CONTENT_CENTERED_COPY_SX = {
  lineHeight: '170%',
  maxWidth: '700px',
  paddingX: {
    mobile: '32px',
    laptop: 'calc(calc(100vw - 700px) / 2)'
  },
  paddingY: '24px'
};

export const CONTENT_CENTERED_RULE_SX = {
  border: (theme) => `1px solid ${theme.palette.primary.main}`,
  width: '60px'
};

export const CONTENT_CENTERED_BUTTON_SX = {
  left: 'calc(50% - 100px)',
  height: '48px',
  width: '200px'
};

export const CONTENT_CENTERED_TITLE_SX = {
  textTransform: 'uppercase'
};
