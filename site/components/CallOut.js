import React from 'react';
import {
  Box,
  Button,
  Hidden,
  Typography
} from '@mui/material';

import { createNotchedClipPath } from '../utils';

const ROOT_SX = {
  margin: {
    mobile: '24px 0 24px 0',
    margin: '48px 0'
  },
  position: 'relative',
  overflow: 'hidden',
  borderBottom: {
    mobile: (theme) => `2px solid ${theme.palette.primary.main}`,
    tablet: 'none',
    '&:last-of-type': {
      mobile: 'none'
    }
  },
  minHeight: {
    tablet: '45vw',
    laptop: '608px'
  }
};

const IMAGE_RULE_SX = {
  backgroundColor: (theme) => `${theme.palette.primary.main}`,
  height: '2px',
  position: 'absolute',
  top: 'calc(min(100vw, 100vh) - 96px)',
  left: 0,
  width: '100%',
  display: {
    tablet: 'hidden'
  }
};

const IMAGE_CONTAINER_SX = (leftAligned) => ({
  backgroundColor: 'red',
  height: {
    mobile: 'calc(min(100vw, 100vh) - 48px)',
    tablet: '45vw',
    laptop: '560px'
  },
  width: {
    tablet: '45vw',
    laptop: '560px'
  },
  marginX: '24px',
  clipPath: createNotchedClipPath(12),
  position: {
    tablet: 'absolute'
  },
  left: {
    tablet: (leftAligned) ? 'unset' : '0px',
    laptop: (leftAligned) ? 'calc(55vw - 60px)' : 'unset'
  },
  right: {
    tablet: '0px',
    laptop: (leftAligned) ? '0px' : 'calc(55vw - 60px)'
  },
  top: {
    tablet: '-24px',
    laptop: '48px'
  },
  zIndex: {
    tablet: (leftAligned) ? 'auto' : '1'
  }
});

const IMAGE_SX = (filter) => ({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  filter: (filter) ? 'grayscale(100%)' : 'none'
});

const IMAGE_OVERLAY_SX = (filter) => ({
  backgroundColor: (theme) => theme.palette.secondary.main,
  opacity: 0.6,
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  display: (filter) ? 'block' : 'none'
});

const TEXT_CONTAINER_SX = (leftAligned) => ({
  width: { tablet: '55%' },
  border: (theme) => ({ tablet: `2px solid ${theme.palette.primary.main}` }),
  borderLeft: (theme) => ({
    tablet: (leftAligned) ? 'none' : `2px solid ${theme.palette.primary.main}`
  }),
  borderRight: (theme) => ({
    tablet: (leftAligned) ? `2px solid ${theme.palette.primary.main}` : 'none'
  }),
  position: {
    tablet: (leftAligned) ? 'static' : 'relative'
  },
  zIndex: {
    tablet: (leftAligned) ? 'auto' : '0'
  },
  left: {
    tablet: (leftAligned) ? 'unset' : '45%'
  }
});

const TITLE_SX = {
  padding: {
    mobile: '32px 24px 0px 24px',
    tablet: '32px 48px 0px 48px',
    laptop: '124px 0 16px 120px'
  },
  textTransform: 'uppercase'
};

const RULE_SX = {
  border: (theme) => ({
    mobile: `1px solid ${theme.palette.primary.main}`,
    tablet: `2px solid ${theme.palette.primary.main}`
  }),
  width: {
    mobile: '60px',
    laptop: '100px'
  },
  marginLeft: {
    mobile: '24px',
    tablet: '48px',
    laptop: '120px'
  },
  marginBottom: '32px'
};

const CONTENT_TEXT_SX = {
  lineHeight: '170%',
  padding: {
    mobile: '0 24px 8px 24px',
    tablet: '0 80px 24px 48px',
    laptop: '0 120px 40px 120px'
  },
  '&:last-of-type': {
    paddingBottom: '32px'
  }
};

const CallOut = ({ title, content, image, buttonText, buttonLink, leftAligned=true, filter=true }) => {
  return (
    <Box sx={ROOT_SX}>
      <Box sx={IMAGE_RULE_SX} />
      <Box sx={IMAGE_CONTAINER_SX(leftAligned)}>
        <Box component='img' src={image} sx={IMAGE_SX(filter)} />
        <Box sx={IMAGE_OVERLAY_SX(filter)} />
      </Box>
      <Box sx={TEXT_CONTAINER_SX(leftAligned)}>
        <Typography color='primary' variant="h3" sx={TITLE_SX}>{title}</Typography>
        <Box component='hr' sx={RULE_SX} />
        {(Array.isArray(content)) ? 
          content.map((c, i) => <Typography color='primary' sx={CONTENT_TEXT_SX} key={`mini-content-${i}`}>{c}</Typography>) :
          <Typography color='primary' sx={CONTENT_TEXT_SX}>{content}</Typography>
        }
      </Box>
    </Box>
  );
};

export default CallOut;
