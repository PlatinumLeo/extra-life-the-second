import React, { useContext } from 'react';
import { Button, Divider, Typography } from '@material-ui/core';

import { DonationsContext } from '../DonationsProvider';

const priorDonations = 3237;
const priorDonationCount = 52;

const Impact = props => {

  const { donations } = useContext(DonationsContext);

  const reducer = (total, donation) => total + donation.amount;
  const donationSum = donations.reduce(reducer, 0);
  console.log(`Donation Sum: ${donationSum}`);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" align="center">Our Impact</Typography>
      <hr style={{ width: '100px', border: '3px solid' }} />
      <Typography align="center" style={{ maxWidth: '700px' }}>The money we raise goes to the Children's Hospital of Atlanta. It will pay for equipment and medical treatment for families in need, helping to make sure children get the best care possible, and a family isn't made destitute taking care of their child.</Typography>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '1440px' }}>
        <Typography>3 Months</Typography>
        <Typography>5 Live Streams</Typography>
        <Typography>{donations.length + priorDonationCount} Donations</Typography>
        <Typography>${Math.floor((donationSum + priorDonations)/1000)}K+ Raised</Typography>
        <Typography>Children's Hospital of Atlanta</Typography>
      </div>
      <Button>Donate Now</Button>
    </div>
  );
};

export default Impact;
