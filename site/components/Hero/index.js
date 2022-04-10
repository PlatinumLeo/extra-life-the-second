import React, { useContext } from 'react';
import {
  Box,
  Typography
} from '@mui/material';

import HeartProgressBar from '../HeartProgressBar';
import { TeamContext } from '../../providers/DonorDriveApiProvider';
import { BreakpointContext } from '../../providers/AdaptivityProvider';
import backgroundImage from '../../assets/images/BackgroundImages/mmx4_still.jpg';
import backgroundWebM from '../../assets/videos/megaManX4.webm';
import backgroundMP4 from '../../assets/videos/megaManX4.mp4';
import Stream from '../Stream';
import { StreamContext } from '../../providers/StreamProvider';
import { pastDayOfPlay } from '../../utils';

import NextStream from './NextStream';
import ThankYou from './ThankYou';

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

const DONATION_SUM_CONTAINER_SX = { float: 'left', left: '50%', position: 'relative' };
const DONATION_SUM_CONTENT_SX = { float: 'left', left: '-50%', position: 'relative' };

const VIDEO_BACKGROUND_SX = {
  position: 'absolute',
  overflow: 'hidden',
  zIndex: -2,
  height: '100%',
  width: '100%',
  backgroundColor: (theme) => theme.palette.primary.main,
  backgroundImage: `linear-gradient(76deg, #9EEEE1aa, #462DEAaa), url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  top: 0, left: 0,
  '& video': {
    position: 'absolute',
    width: '100%',
    display: 'block',
    margin: 'auto',
    top: '0px'
  },
  display: {
    mobile: 'none',
    laptop: 'block'
  }
};

const VIDEO_OVERLAY_SX = {
  background: `linear-gradient(76deg, #9EEEE1aa, #462DEAaa)`,
  opacity: 1,
  position: 'absolute',
  overflow: 'hidden',
  zIndex: -1,
  height: '100%',
  width: '100%',
  top: 0, left: 0,
  backdropFilter: 'blur(4px)'
};

const Hero = ({ dayOfPlay }) => {
  const { fundraisingGoal, sumDonations } = useContext(TeamContext);
  // const streams = useContext(StreamContext);
  const breakpoint = useContext(BreakpointContext);

  const defaultHero = () => (
    <Box sx={ROOT_SX}>
      <Box sx={VIDEO_BACKGROUND_SX}>
        <video autoPlay loop muted playsInline>
          <source src={backgroundWebM} type="video/webm" />
          <source src={backgroundMP4} type="video/mp4" />
        </video>
      </Box>
      <Box sx={VIDEO_OVERLAY_SX} />
      <Box sx={{ opacity: 1, zIndex: 4 }}>
        <Typography align='center' color='inherit' variant={(breakpoint === 'desktop') ? 'h1' : 'h3' } sx={CALLOUT_SX}>We play games to help children’s hospitals in the United States and Canada</Typography>
        {pastDayOfPlay ? <ThankYou props={{ breakpoint }} /> : <NextStream props={{ breakpoint, dayOfPlay }} />}
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
