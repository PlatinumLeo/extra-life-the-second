// Twitch Data: https://twitchtracker.com/pyroticblaziken

import React, { useContext } from 'react';
import {
  Box,
  Button,
  Typography
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import DataDisplay from './DataDisplay';
import { DonationsContext } from '../providers/DonorDriveApiProvider';
import { BreakpointContext } from '../providers/AdaptivityProvider';
import { buildArrayReducer } from '../utils';
import { DONATION_URL } from '../utils/const';
import {
  CONTENT_CENTERED_BUTTON_SX,
  CONTENT_CENTERED_COPY_SX,
  CONTENT_CENTERED_RULE_SX,
  CONTENT_CENTERED_TITLE_SX
} from '../utils/system';

const priorDonations = 3237;
const priorDonationCount = 52;

const ROOT_SX = {
  backgroundColor: theme.palette.secondary.main,
  backgroundImage: (theme) => `linear-gradient(${theme.palette.secondary.main}88, ${theme.palette.secondary.main}88), url(${backgroundImage})`,
  backgroundBlendMode: 'saturation',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: (theme) => theme.palette.secondary.contrastText,
  padding: {
    mobile: '48px 0 24px 0',
    laptop: '96px 0 124px 0'
  }
};

const CAROUSEL_SX = {
  paddingBottom: '32px',
  maxWidth: '1000px',
  paddingX: {
    mobile: '24px',
    laptop: 'calc(calc(100vw - 1000px) / 2)'
  }
};

const Impact = ({...props}) => {
  const donations = useContext(DonationsContext);
  const breakpoint = useContext(BreakpointContext);

  const reducer = (total, donation) => total + donation.amount;
  const donationSum = donations.reduce(reducer, 0);

  const dataPoints = [
    { title: '83.1', subtitle: 'Hours Streamed' },
    { title: '41', subtitle: 'Live Streams' },
    { title: donations.length + priorDonationCount, subtitle: 'Donations' },
    { title: `${Math.floor((donationSum + priorDonations)/1000)}K+`, subtitle: 'Raised' },
    { title: 'Children\'s Hospital of Atlanta', subtitle: 'Funded' }
  ];

  const perChunk = (breakpoint === 'mobile') ? 2 : 3;

  return (
    <Box sx={ROOT_SX}>
      <Typography variant="h3" color='inherit' align="center" sx={CONTENT_CENTERED_TITLE_SX}>Our Impact</Typography>
      <Box component='hr' sx={CONTENT_CENTERED_RULE_SX} />
      <Typography color='inherit' align="center" sx={CONTENT_CENTERED_COPY_SX}>The money we raise goes to the Children's Hospital of Atlanta. It will pay for equipment and medical treatment for families in need, helping to make sure children get the best care possible, and a family isn't made destitute taking care of their child.</Typography>
      <Carousel sx={CAROUSEL_SX} animation='slide' autoPlay={false}>
        {dataPoints.reduce(buildArrayReducer(perChunk), []).map((chunks, i) => (
          <DataDisplay key={`impact-stats-${i}`} dataPoints={chunks} />
        ))}
      </Carousel>
      <Button
        href={DONATION_URL}
        target="_blank"
        variant='contained'
        sx={CONTENT_CENTERED_BUTTON_SX}>
        Donate Now
      </Button>
    </Box>
  );
};

export default Impact;
