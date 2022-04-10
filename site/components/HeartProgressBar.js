import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';

import { BreakpointContext } from '../providers/AdaptivityProvider';

const HEART_PROGRESS_BAR_SX = {
  display: 'flex'
};

const Heart = ({ breakpoint }) => {
  const height = (breakpoint === 'mobile') ? 20 : 24;
  const width = (breakpoint === 'mobile') ? 22 : 26;
  const pathCommands = (breakpoint === 'mobile') ? 
    'M 0 3.25 V 8.25 L 11 20 L 22 8.25 V 3.25 L 18.75 0 H 14.25 L 11 3.25 L 7.75 0 H3.25 Z' :
    'M 0 4 V 11 L 13 24 L 26 11 V 4 L 22 0 H 17 L 13 4 L 9 0 H 4 Z';

  return (
    <svg version="1.1" id="heart" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox={`0 0 ${width} ${height}`} width={width} height={height} style={{ padding: '0 0.5em 0 0' }}>
      <path
        style={{ fill: "#ffffff" }}
        d={pathCommands}
      />
    </svg>
  );
};

const ProgressBarSegment =  ({ breakpoint, fillPercent=1.0 }) => {

  let height = 14;
  let width = (breakpoint === 'mobile') ? 70 : 128;
  
  let outlineCommands = `M 2,7 L 8,13 H ${width - 8} L ${width - 2},7 L ${width - 8},1 H 8 Z`;
  
  let hMove = Math.floor(fillPercent * (width - 20)) || 0;
  let fillCommands = `M 7,7 l 3,3 h ${hMove} l 3,-3 l -3,-3 h -${hMove} Z`;

  if (hMove <= 0) fillCommands = '';

  return (
    <svg version="1.1" id="progressBarSegment" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox={`0 0 ${width} ${height}`} >
      <g>
        <path 
          style={{ fill: 'none', stroke: '#ffffff', strokeWidth: '2px' }}
          d={outlineCommands}
        />
        <path 
          style={{ fill: "#ffffff" }}
          d={fillCommands}
        />
      </g>
    </svg>
  )
};

const ProgressBar = ({ breakpoint, fillPercent }) => {
  return (
    <Grid container spacing={1}>
      {[0, 1, 2, 3].map((item) => {
        let segmentFill = Math.min(0.25, fillPercent) * 4;
        fillPercent -= 0.25;

        return (
          <Grid item mobile={3} key={`segment-${item}`}>
            <ProgressBarSegment breakpoint={breakpoint} fillPercent={segmentFill} />
          </Grid>
        )
      })}
    </Grid>
  )
};

const HeartProgressBar = ({ sumDonations, fundraisingGoal, ...props }) => {
  const fullProps = {
    ...props,
    sx: {
      ...props.sx,
      ...HEART_PROGRESS_BAR_SX
    }
  };

  const breakpoint = useContext(BreakpointContext);

  return (
    <Box {...fullProps}>
      <Heart breakpoint={breakpoint} />
      <ProgressBar breakpoint={breakpoint} fillPercent={ (sumDonations / fundraisingGoal) }/>
    </Box>
  )

};

export default HeartProgressBar;
