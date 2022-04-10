import React from 'react';
import { Container } from '@mui/material';

import Donations from '../components/Donations';

const DonationsPage = ({...props}) => {
  return (
    <Container fixed>
      <Donations />
    </Container>
  );
};

export default DonationsPage;
