import React, { useContext } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import { BreakpointContext } from '../AdaptivityProvider';
import { TeamContext } from '../TeamProvider';
import HeartProgressBar from './HeartProgressBar';

import backgroundImage from '../assets/images/BackgroundImages/mmx4_still.jpg';
import Countdown from './Countdown';

const getHeroStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `linear-gradient(76deg, #9EEEE188, #462DEA88), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '80px 0 100px 0'
  },
  callout: { padding: '0 24px 32px 24px', textTransform: 'uppercase' },
  nextStream: { letterSpacing: '0.08em', padding: '0 24px 20px 24px', textTransform: 'uppercase' },
  countdown: { margin: '0 24px 64px 24px' },
  progressBar: { padding: '0 24px 20px 24px' },
  donationSumContainer: { float: 'left', left: '50%', position: 'relative' },
  donationSumContent: { float: 'left', left: '-50%', position: 'relative' }
}));

const Hero = ({ dayOfPlay }) => {
  const theme = useTheme();
  const breakpoint = useContext(BreakpointContext);
  const classes = getHeroStyles(theme);
  const { team } = useContext(TeamContext);

  return (
    <div className={classes.root}>
      <Typography align='center' color='textSecondary' variant='h3' className={classes.callout}>We play games to help children’s hospitals in the United States and Canada</Typography>
      <Typography align='center' color='textSecondary' variant='h6' className={classes.nextStream}>Next stream starts in</Typography>
      <Countdown dayOfPlay={dayOfPlay} className={classes.countdown} />
      <HeartProgressBar sumDonations={team.sumDonations} fundraisingGoal={team.fundraisingGoal} className={classes.progressBar} />
      <div className={classes.donationSumContainer}>
        <div className={classes.donationSumContent}>
          <Typography color='textSecondary' variant="h3" display='inline'>${(!!team.sumDonations ? team.sumDonations : 0).toLocaleString()} </Typography>
          <Typography color='textSecondary' display='inline'>Raised of ${(!!team.fundraisingGoal ? team.fundraisingGoal : 0).toLocaleString()} goal</Typography>
        </div> 
      </div>
    </div>
  )
};

export default Hero;
