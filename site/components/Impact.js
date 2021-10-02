import React, { useContext } from 'react';
import { Button, Typography } from '@material-ui/core';

import { DonationsContext } from '../DonationsProvider';

const Impact = props => {

  const { donations } = useContext(DonationsContext);

  const reducer = (total, donation) => total + donation.amount;
  const donationSum = donations.reduce(reducer, 0);
  console.log(`Donation Sum: ${donationSum}`);

  return (
    <>
      <Typography>Our Impact</Typography>
      <Typography>The money we raise goes to the Children's Hospital of Atlanta. It will pay for equipment and medical treatment for families in need, helping to make sure children get the best care possible, and a family isn't made destitute taking care of their child.</Typography>
      <Typography>3 Months</Typography>
      <Typography>5 Live Streams</Typography>
      <Typography>48 Donations</Typography>
      <Typography>$5K+ Raise</Typography>
      <Typography>8 Hospitals Funded</Typography>
      <Button>Donate Now</Button>
    </>
  );
};

export default Impact;
