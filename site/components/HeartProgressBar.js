import React, { useContext } from 'react';
import { Grid } from '@mui/material';

import { BreakpointContext } from '../AdaptivityProvider';

const Heart = ({ breakpoint }) => {
  const height = (breakpoint === 'xs') ? 20 : 24;
  const width = (breakpoint === 'xs') ? 22 : 26;
  const pathCommands = (breakpoint === 'xs') ? 
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
  let width = (breakpoint === 'xs') ? 70 : 128;
  
  let outlineCommands = `M 2,7 L 8,13 H ${width - 8} L ${width - 2},7 L ${width - 8},1 H 8 Z`;
  
  let hMove = Math.floor(fillPercent * (width - 20)) || 0;
  let fillCommands = `M 7,7 l 3,3 h ${hMove} l 3,-3 l -3,-3 h -${hMove} Z`;

  if (fillPercent <= 0) fillCommands = '';

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
          <Grid item xs={3} key={`segment-${item}`}>
            <ProgressBarSegment breakpoint={breakpoint} fillPercent={segmentFill} />
          </Grid>
        )
      })}
    </Grid>
  )
};

const HeartProgressBar = ({ sumDonations, fundraisingGoal, className }) => {
  const breakpoint = useContext(BreakpointContext);

  return (
    <div style={{ display: 'flex' }} className={className}>
      <Heart breakpoint={breakpoint} />
      <ProgressBar breakpoint={breakpoint} fillPercent={ (sumDonations / fundraisingGoal) }/>
    </div>
  )

};

export default HeartProgressBar;
