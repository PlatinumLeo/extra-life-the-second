import React, { useContext } from 'react';
import { Button, Divider, Typography } from '@material-ui/core';

import { DonationsContext } from '../DonationsProvider';

import backgroundImage from '../assets/images/BackgroundImages/impact.png';

const priorDonations = 3237;
const priorDonationCount = 52;

const Impact = props => {

  const { donations } = useContext(DonationsContext);

  const reducer = (total, donation) => total + donation.amount;
  const donationSum = donations.reduce(reducer, 0);

  return (
    <div style={{ position: 'relative' }}>
      <img src={backgroundImage} style={{ filter: 'grayscale(100%)', objectFit: 'cover' }} />
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.8, background: '#0150E9' }} />
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 1 }}>
          <Typography color='textSecondary' variant="h3" align="center" style={{ textTransform: 'uppercase' }}>Our Impact</Typography>
          <hr style={{ width: '100px', border: `3px solid #ffffff` }} />
          <Typography color='textSecondary' align="center" style={{ maxWidth: '700px' }}>The money we raise goes to the Children's Hospital of Atlanta. It will pay for equipment and medical treatment for families in need, helping to make sure children get the best care possible, and a family isn't made destitute taking care of their child.</Typography>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '1440px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography color='textSecondary' variant="h5">83.1</Typography>
              <Typography color='textSecondary' variant="caption">Hours Streamed</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography color='textSecondary' variant="h5">41</Typography>
              <Typography color='textSecondary' variant="caption">Live Streams</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography color='textSecondary' variant="h5">{donations.length + priorDonationCount}</Typography>
              <Typography color='textSecondary' variant="caption">Donations</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography color='textSecondary' variant="h5">${Math.floor((donationSum + priorDonations)/1000)}K+</Typography>
              <Typography color='textSecondary' variant="caption">Raised</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography color='textSecondary' variant="h5">Children's Hospital of Atlanta</Typography>
              <Typography color='textSecondary' variant="caption">Funded</Typography>
            </div>
          </div>
          <Button
            href="https://www.extra-life.org/index.cfm?fuseaction=donordrive.participant&participantID=456320"
            target="_blank"
            variant='contained'
            style={{ height: '57px', width: '330px' }}>
            Donate Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Impact;
