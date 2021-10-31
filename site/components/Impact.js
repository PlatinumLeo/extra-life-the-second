// Twitch Data: https://twitchtracker.com/pyroticblaziken

import React, { useContext } from 'react';
import {
  Button,
  Typography,
  makeStyles
} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import Carousel from 'react-material-ui-carousel';

import DataDisplay from './DataDisplay';
import { DonationsContext } from '../DonationsProvider';

import backgroundImage from '../assets/images/BackgroundImages/impact.png';

const priorDonations = 3237;
const priorDonationCount = 52;

const getImpactStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    backgroundImage: `linear-gradient(${theme.palette.secondary.main}88, ${theme.palette.secondary.main}88), url(${backgroundImage})`,
    backgroundBlendMode: 'saturation',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '48px 0 24px 0'
  },
  rule: { border: `1px solid ${theme.palette.common.white}`, width: '60px' },
  text: { lineHeight: '170%', padding: '32px 24px' },
  button: { left: 'calc(50% - 100px)', height: '48px', width: '200px' },
  carousel: { padding: '0 24px 32px 24px' }
}));

const Impact = props => {

  const { donations } = useContext(DonationsContext);

  const reducer = (total, donation) => total + donation.amount;
  const donationSum = donations.reduce(reducer, 0);

  const theme = useTheme();
  const classes = getImpactStyles(theme);

  const cardData0 = [
    { title: '83.1', subtitle: 'Hours Streamed' },
    { title: '41', subtitle: 'Live Streams' }
  ];

  const cardData1 = [
    { title: donations.length + priorDonationCount, subtitle: 'Donations' },
    { title: `${Math.floor((donationSum + priorDonations)/1000)}K+`, subtitle: 'Raised' }
  ];

  const cardData2 = [
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

  return (
    <div className={classes.root}>
      <Typography variant="h3" color='textSecondary' align="center" style={{ textTransform: 'uppercase' }}>Our Impact</Typography>
      <hr className={classes.rule} />
      <Typography color='textSecondary' align="center" className={classes.text}>The money we raise goes to the Children's Hospital of Atlanta. It will pay for equipment and medical treatment for families in need, helping to make sure children get the best care possible, and a family isn't made destitute taking care of their child.</Typography>
      <Carousel className={classes.carousel} animation='slide' autoPlay={false} indicatorIconButtonProps={iconStyle} activeIndicatorIconButtonProps={activeIconStyle}>
        <DataDisplay dataPoints={cardData0} />
        <DataDisplay dataPoints={cardData1} />
        <DataDisplay dataPoints={cardData2} />
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
