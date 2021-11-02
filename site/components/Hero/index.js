import React, { useContext } from 'react';
import {
  Hidden,
  Typography
} from '@material-ui/core';

import Countdown from '../Countdown';
import HeartProgressBar from '../HeartProgressBar';
// import { TeamContext } from '../../TeamProvider';
import { TeamContext } from '../../DonorDriveApiProvider';
import { BreakpointContext } from '../../AdaptivityProvider';
import getStyles from './styles';
import backgroundWebM from '../../assets/videos/megaManX4.webm';
import backgroundMP4 from '../../assets/videos/megaManX4.mp4';

const Hero = ({ dayOfPlay }) => {
  const classes = getStyles();
  const team = useContext(TeamContext);
  
  const breakpoint = useContext(BreakpointContext);

  return (
    <div className={classes.root}>
      <div className={classes.videoBackground}>
        <Hidden lgDown>
          <video autoPlay loop muted playsInline>
            <source src={backgroundWebM} type="video/webm" />
            <source src={backgroundMP4} type="video/mp4" />
          </video>
        </Hidden>
      </div>
      <div className={classes.videoOverlay} />
      <div className={classes.content}>
        <Typography align='center' color='textSecondary' variant={(breakpoint === 'xl') ? 'h1' : 'h3' } className={classes.callout}>We play games to help children’s hospitals in the United States and Canada</Typography>
        <Typography align='center' color='textSecondary' variant={(breakpoint === 'xl') ? 'h4' : 'h6' } className={classes.nextStream}>Next stream starts in</Typography>
        <Countdown dayOfPlay={dayOfPlay} className={classes.countdown} />
        <HeartProgressBar sumDonations={team.sumDonations} fundraisingGoal={team.fundraisingGoal} className={classes.progressBar} />
        <div className={classes.donationSumContainer}>
          <div className={classes.donationSumContent}>
            <Typography color='textSecondary' variant='h3' display='inline'>${(!!team.sumDonations ? team.sumDonations : 0).toLocaleString()} </Typography>
            <Typography color='textSecondary' display='inline'>Raised of ${(!!team.fundraisingGoal ? team.fundraisingGoal : 0).toLocaleString()} goal</Typography>
          </div> 
        </div>
      </div>      
    </div>
  )
};

export default Hero;
