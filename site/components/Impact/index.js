// Twitch Data: https://twitchtracker.com/pyroticblaziken

import React, { useContext } from 'react';
import {
  Button,
  Hidden,
  Typography
} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import { useTheme } from '@material-ui/styles';

import DataDisplay from '../DataDisplay';
import { DonationsContext } from '../../DonationsProvider';
import { BreakpointContext } from '../../AdaptivityProvider';
import getStyles from './style';
import { buildArrayReducer } from '../../utils';

const priorDonations = 3237;
const priorDonationCount = 52;

const Impact = (props) => {
  const theme = useTheme();

  const { donations } = useContext(DonationsContext);
  const breakpoint = useContext(BreakpointContext);

  const reducer = (total, donation) => total + donation.amount;
  const donationSum = donations.reduce(reducer, 0);

  const classes = getStyles();

  const dataPoints = [
    { title: '83.1', subtitle: 'Hours Streamed' },
    { title: '41', subtitle: 'Live Streams' },
    { title: donations.length + priorDonationCount, subtitle: 'Donations' },
    { title: `${Math.floor((donationSum + priorDonations)/1000)}K+`, subtitle: 'Raised' },
    { title: 'Children\'s Hospital of Atlanta', subtitle: 'Funded' }
  ];

  const iconStyle = {
    style: {
      color: theme.palette.common.white
    }
  };

  const activeIconStyle = {
    style: {
      color: theme.palette.grey[500]
    }
  };

  const perChunk = (breakpoint === 'xs') ? 2 : 3;

  return (
    <div className={classes.root}>
      <Typography variant="h3" color='textSecondary' align="center" style={{ textTransform: 'uppercase' }}>Our Impact</Typography>
      <hr className={classes.rule} />
      <Typography color='textSecondary' align="center" className={classes.text}>The money we raise goes to the Children's Hospital of Atlanta. It will pay for equipment and medical treatment for families in need, helping to make sure children get the best care possible, and a family isn't made destitute taking care of their child.</Typography>
      <Carousel className={classes.carousel} animation='slide' autoPlay={false} indicatorIconButtonProps={iconStyle} activeIndicatorIconButtonProps={activeIconStyle}>
        {dataPoints.reduce(buildArrayReducer(perChunk), []).map((chunks, i) => (
          <DataDisplay key={`impact-stats-${i}`} dataPoints={chunks} />
        ))}
      </Carousel>
      <Button
        href="https://www.extra-life.org/index.cfm?fuseaction=donordrive.participant&participantID=456320"
        target="_blank"
        variant='contained'
        className={classes.button}>
        Donate Now
      </Button>
    </div>
  );
};

export default Impact;
