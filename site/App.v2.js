import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Router from './components/Router';

const teamId = '57288';
const twitchUsernames = [
  'pyroticblaziken'
];
const twitchChannelIds = [
  23679089
];

const App = props => {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        {/* <Router /> */}
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;
