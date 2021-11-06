import React, { useContext } from 'react';
import {
  Hidden,
  Link,
  Typography
} from '@material-ui/core';

import Countdown from '../Countdown';
import HeartProgressBar from '../HeartProgressBar';
import { TeamContext } from '../../DonorDriveApiProvider';
import { BreakpointContext } from '../../AdaptivityProvider';
import getStyles from './styles';
import backgroundWebM from '../../assets/videos/megaManX4.webm';
import backgroundMP4 from '../../assets/videos/megaManX4.mp4';
import Stream from '../Stream';
import { StreamContext } from '../../StreamProvider';

const Hero = ({ dayOfPlay }) => {
  const classes = getStyles();
  const { fundraisingGoal, sumDonations } = useContext(TeamContext);
  const streams = useContext(StreamContext);
  const breakpoint = useContext(BreakpointContext);

  const nextStream = () => (
    <div>
      <Typography align='center' color='inherit' variant={(breakpoint === 'xl') ? 'h4' : 'h6' } className={classes.nextStream}>Next stream starts in</Typography>
      <Countdown dayOfPlay={dayOfPlay} className={classes.countdown} />
    </div>
  );

  const streamLink = ({ channel, game }) => (
    <React.Fragment>
      <Typography align='center' color='inherit' variant={(breakpoint === 'xl') ? 'h1' : 'h3' } className={classes.nextStream}>
        <Link href={channel.url} target='_blank'>We are live!</Link>
      </Typography>
      <Typography align='center' color='inherit' variant={(breakpoint === 'xl') ? 'h4' : 'h6' } className={classes.nextStream}>
        We are playing {game}.
      </Typography>
    </React.Fragment>
  );

  const defaultHero = () => (
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
        <Typography align='center' color='inherit' variant={(breakpoint === 'xl') ? 'h1' : 'h3' } className={classes.callout}>We play games to help children’s hospitals in the United States and Canada</Typography>
        {streams.length > 0 ? streamLink(streams[0]) : nextStream()}
        <HeartProgressBar sumDonations={sumDonations} fundraisingGoal={fundraisingGoal} className={classes.progressBar} />
        <div className={classes.donationSumContainer}>
          <div className={classes.donationSumContent}>
            <Typography color='inherit' variant='h3' display='inline'>${(!!sumDonations ? sumDonations : 0).toLocaleString()} </Typography>
            <Typography color='inherit' display='inline'>Raised of ${(!!fundraisingGoal ? fundraisingGoal : 0).toLocaleString()} goal</Typography>
          </div> 
        </div>
      </div>      
    </div>
  );

  const streamingHero = () => (
    <div className={classes.root}>
      <Stream className={classes.twitch} />
    </div>
  );
  
  return (streams.length ? streamingHero() : defaultHero());
};

export default Hero;
