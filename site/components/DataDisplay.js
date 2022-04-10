import React from 'react';
import {
  Box,
  Grid,
  Typography
} from '@mui/material';

import { createNotchedClipPath, createNotchedBorder } from  '../utils';

const clipRadius = 10;
const borderWidth = 2;

const DATA_DISPLAY_SX = {
  position: 'relative',
  clipPath: createNotchedClipPath(clipRadius),
  ':after': {
    content: '"DataDisplay"',
    position: 'absolute',
    clipPath: createNotchedBorder(clipRadius, borderWidth),
    background: (theme) => `${theme.palette.common.white} none repeat scroll 0% 0%`,
    inset: '0px'
  }
};

const CHILD_SX = {
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center',
  borderRight: (theme) => `2px solid ${theme.palette.common.white}`
};

const LAST_CHILD_SX = {
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center'
};

const DataDisplayItem = ({ title, subtitle, gridSize, lastChild }) => {
  return (
    <Grid item mobile={gridSize}>
      <Box sx={ lastChild ? LAST_CHILD_SX : CHILD_SX }>
        <Typography color='inherit' variant="h5">{title}</Typography>
        <Typography color='inherit' variant="caption" style={{ textTransform: 'uppercase' }}>{subtitle}</Typography>
      </Box>
    </Grid>
  )
};

const DataDisplay = ({ dataPoints, ...props }) => {
  let gridSize = Math.floor(12 / dataPoints.length);

  const fullProps = {
    ...props,
    sx: {
      ...props.sx,
      ...DATA_DISPLAY_SX
    }
  };

  return (
    <Box {...fullProps}>
      <Grid container>
        {dataPoints.map(({ title, subtitle }, i) => (
          <DataDisplayItem key={`display-${title}-${subtitle}`} title={title} subtitle={subtitle} gridSize={gridSize} lastChild={(i === dataPoints.length - 1)} />
        ))}
      </Grid>
    </Box>
    
  );
};

export default DataDisplay;
