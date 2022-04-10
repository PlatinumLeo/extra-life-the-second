// Original Card Flip: https://codepen.io/edeesims/pen/iGDzk

import React from 'react';
import { Box } from '@mui/material';

const DEFAULT_CARD_SX = {
  perspective: '500px',
  '&:hover': {
    '&>div': {
      transform: 'rotateY(180deg)',
      transition: 'transform 0.5s'
    }
  }
};

const CONTENT_SX = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  transition: 'transform 1s',
  transformStyle: 'preserve-3d'
};

const FRONT_SX = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  backfaceVisibility: 'hidden',
  objectFit: 'cover'
};

const BACK_SX = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  backfaceVisibility: 'hidden',
  objectFit: 'cover',
  transform: 'rotateY(180deg)'
};

const FlipCard = ({front, back, ...props}) => {
  let { sx } = props;
  let CARD_SX = Object.assign({}, DEFAULT_CARD_SX, sx);
  return (
    <Box sx={CARD_SX}>
      <Box sx={CONTENT_SX}>
        <Box sx={FRONT_SX}>
          {front}
        </Box>
        <Box sx={BACK_SX}>
          {back}
        </Box>
      </Box>
    </Box>
  );
};

export default FlipCard;
