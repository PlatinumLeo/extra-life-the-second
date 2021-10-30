import React from 'react';
import { Grid } from '@material-ui/core';

const Heart = props => {
  return (
    <svg version="1.1" id="heart" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 28 28" width="28" height="28" style={{ padding: '0 1em 0 0' }}>
      <path
        style={{ fill: "#ffffff" }}
        d="M 5 1
           L 1 5
           V 12
           L 14 25
           L 27 12
           V 5
           L 23 1
           H 18
           L 14 5
           L 10 1
           H 5
           Z"
      />
    </svg>
  );
};

const ProgressBarSegment =  ({ fillPercent=1.0 }) => {

  let hMove = fillPercent * 114;
  let pathCommands = `M 4,6
  l 3,3
  h ${hMove}
  l 3,-3
  l -3,-3
  h -${hMove}z`;

  if (fillPercent <= 0) pathCommands = "";

  return (
    <svg version="1.1" id="progressBarSegment" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 128 12" >
      <g>
        <path 
          style={{ stroke: "#ffffff", fill: "none" }}
          d="M 1,6
             l 5,5
             h 116
             l 5,-5
             l -5,-5
             h -116z"
        />
        <path 
          style={{ fill: "#ffffff" }}
          d={pathCommands}
        />
      </g>
    </svg>
  )
};

const ProgressBar = ({ fillPercent }) => {
  return (
    <Grid container spacing={1} style={{ maxWidth: "1000px" }}>
      {[0, 1, 2, 3].map((item) => {
        let segmentFill = Math.min(0.25, fillPercent) * 4;
        fillPercent -= 0.25;

        return (
          <Grid item xs={3} key={`segment-${item}`}>
            <ProgressBarSegment fillPercent={segmentFill} />
          </Grid>
        )
      })}
    </Grid>
  )
};

const HeartProgressBar = ({ sumDonations, fundraisingGoal }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Heart />
      <ProgressBar fillPercent={ (sumDonations / fundraisingGoal) }/>
    </div>
  )

};

export default HeartProgressBar;
