import React from 'react';
import { Container } from '@mui/material';

import Donors from '../components/Donors';

const DonorsPage = (props) => {
  return (
    <Container fixed>
      <Donors />
    </Container>
  );
};

export default DonorsPage;
