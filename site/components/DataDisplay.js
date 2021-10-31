import React from 'react';
import { useTheme } from '@material-ui/styles';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import { createNotchedClipPath, createNotchedBorder } from  '../utils';

const clipRadius = 10;
const borderWidth = 2;

const getDataDisplayStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    'clip-path': createNotchedClipPath(clipRadius),
    background: 'rgba(0, 0, 0, 0)',
    border: 'none',
    color: theme.palette.common.white,
    '&::after': {
      content: '"DataDisplay"',
      position: 'absolute',
      'clip-path': createNotchedBorder(clipRadius, borderWidth),
      background: `${theme.palette.common.white} none repeat scroll 0% 0%`,
      inset: '0px'
    }
  },
  child: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    borderRight: '2px solid #fff'
  },
  lastChild: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center'
  }
}));

const DataDisplayItem = ({ title, subtitle, className, gridSize }) => {
  return (
    <Grid item xs={gridSize}>
      <div className={className}>
        <Typography color='textSecondary' variant="h5">{title}</Typography>
        <Typography color='textSecondary' variant="caption" style={{ textTransform: 'uppercase' }}>{subtitle}</Typography>
      </div>
    </Grid>
  )
};

const DataDisplay = ({ className, dataPoints }) => {
  const theme = useTheme();
  const classes = getDataDisplayStyles(theme);
  let gridSize = Math.floor(12 / dataPoints.length);

  return (
    <div className={`${className} ${classes.root}`}>
      <Grid container>
        {dataPoints.map(({ title, subtitle }, i) => (
          <DataDisplayItem key={`display-${title}-${subtitle}`} title={title} subtitle={subtitle} gridSize={gridSize} className={(i < dataPoints.length - 1) ? classes.child : classes.lastChild} />
        ))}
      </Grid>
    </div>
    
  );
};

export default DataDisplay;
