import React, { useContext } from 'react';
import {
  Box,
  Hidden,
  Link,
  Typography
} from '@mui/material';

import Countdown from '../Countdown';
import HeartProgressBar from '../HeartProgressBar';
import { TeamContext } from '../../providers/DonorDriveApiProvider';
import { BreakpointContext } from '../../providers/AdaptivityProvider';
import getStyles from './styles';
import backgroundImage from '../../assets/images/BackgroundImages/mmx4_still.jpg';
import backgroundWebM from '../../assets/videos/megaManX4.webm';
import backgroundMP4 from '../../assets/videos/megaManX4.mp4';
import Stream from '../Stream';
import { StreamContext } from '../../providers/StreamProvider';
import { pastDayOfPlay } from '../../utils';

const PROGRESS_BAR_SX = {
  padding: {
    mobile: '0 24px 64px 24px',
    tablet: '0 96px 16px 96px',
    laptop: '0 560px 32px 560px'
  }
};

const ROOT_SX = {
  // backgroundColor: 'red',
  backgroundImage: `linear-gradient(76deg, #9EEEE1aa, #462DEAaa), url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: (theme) => theme.palette.primary.contrastText,
  position: 'relative',
  overflowX: 'hidden',
  padding: {
    mobile: '80px 0 100px 0',
    tablet: '144px 0 240px 0',
    laptop: '96px 0 144px 0'
  },
  zIndex: 5
};

const CALLOUT_SX = {
  padding: {
    mobile: '0 24px 32px 24px',
    tablet: '0 96px 32px 96px',
    desktop: '0 420px 32px 420px',
  },
  textTransform: 'uppercase',
};

const NEXT_STREAM_SX = {
  letterSpacing: '0.08em',
  padding: '0 24px 20px 24px',
  textTransform: 'uppercase'
};

const THANK_YOU_SX = {
  padding: {
    mobile: '0 24px 20px 24px',
    tablet: '0 96px 16px 96px',
    desktop: '0 560px 32px 560px',
  }
};

const COUNTDOWN_SX = {
  margin: {
    mobile: '0 24px 64px 24px',
    tablet: '0px 48px 32px 48px',
    desktop: '0px 512px 80px 512px',
  }
};

const DONATION_SUM_CONTAINER_SX = { float: 'left', left: '50%', position: 'relative' };
const DONATION_SUM_CONTENT_SX = { float: 'left', left: '-50%', position: 'relative' };

const Hero = ({ dayOfPlay }) => {
  const classes = getStyles();
  const { fundraisingGoal, sumDonations } = useContext(TeamContext);
  // const streams = useContext(StreamContext);
  const breakpoint = useContext(BreakpointContext);

  const nextStream = () => (
    <Box>
      <Typography align='center' color='inherit' variant={(breakpoint === 'desktop') ? 'h4' : 'h6' } sx={NEXT_STREAM_SX}>Next stream starts in</Typography>
      <Countdown dayOfPlay={dayOfPlay} sx={COUNTDOWN_SX} />
    </Box>
  );

  const thankYou = () => (
    <Box>
      <Typography align='center' variant={(breakpoint === 'desktop') ? 'h4' : 'h6' } sx={NEXT_STREAM_SX}>Thank you all so much!</Typography>
      <Box sx={THANK_YOU_SX}>
        <Typography align='center' display='inline'>We had a wonderful time streaming 25 hours and had a blast with everyone showing up! </Typography>
        <Typography align='center' display='inline'>While the stream has completed, we are still raising money for the Children's Miracle Network. </Typography>
        <Typography align='center' display='inline'>We hope to see everyone next year and even more people show up to have fun and help make the world a better place!</Typography>
      </Box>
    </Box>
  );

  const defaultHero = () => (
    <Box sx={ROOT_SX}>
      <Box className={classes.videoBackground}>
        <Hidden lgDown>
          <video autoPlay loop muted playsInline>
            <source src={backgroundWebM} type="video/webm" />
            <source src={backgroundMP4} type="video/mp4" />
          </video>
        </Hidden>
      </Box>
      <Box className={classes.videoOverlay} />
      <Box sx={{ opacity: 1, zIndex: 4 }}>
        <Typography align='center' color='inherit' variant={(breakpoint === 'desktop') ? 'h1' : 'h3' } sx={CALLOUT_SX}>We play games to help children’s hospitals in the United States and Canada</Typography>
        {pastDayOfPlay ? thankYou() : nextStream()}
        <HeartProgressBar sumDonations={sumDonations} fundraisingGoal={fundraisingGoal} sx={PROGRESS_BAR_SX} />
        <Box sx={DONATION_SUM_CONTAINER_SX}>
          <Box sx={DONATION_SUM_CONTENT_SX}>
            <Typography color='inherit' variant='h3' display='inline'>${(!!sumDonations ? sumDonations : 0).toLocaleString()} </Typography>
            <Typography color='inherit' display='inline'>Raised of ${(!!fundraisingGoal ? fundraisingGoal : 0).toLocaleString()} goal</Typography>
          </Box> 
        </Box>
      </Box>      
    </Box>
  );

  const streamingHero = () => (
    <Box sx={ROOT_SX}>
      <Stream />
    </Box>
  );

  // return (streams.length ? streamingHero() : defaultHero());
  return defaultHero();
};

export default Hero;
