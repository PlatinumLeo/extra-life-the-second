import React from 'react';
import { Box } from '@mui/material';

import { createNotchedClipPath } from '../utils';

const createContainerSx = (reverse) => ({
  height: '100%',
  width: '100%',
  clipPath: createNotchedClipPath(12, reverse)
});

const DEFAULT_IMAGE_SX = {
  objectFit: 'cover',
  width: '100%',
  height: '100%'
};

const NotchedImage = ({ src, alt='Image', reverse=false, containerSx={}, imageSx={}, ...props}) => {
  const CONTAINER_SX = Object.assign({}, createContainerSx(reverse), containerSx);
  const IMAGE_SX = Object.assign({}, DEFAULT_IMAGE_SX, imageSx);

  return ( 
    <Box sx={CONTAINER_SX}>
      <Box component='img' src={src} alt={alt} sx={IMAGE_SX} />
    </Box>
  );
};

export default NotchedImage;
