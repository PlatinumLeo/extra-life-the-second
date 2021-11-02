import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header.v2';
import Footer from './components/Footer';
import Router from './components/Router';6

const teamId = '57288';
const twitchUsernames = [
  'pyroticblaziken'
];
const twitchChannelIds = [
  23679089
];
const dayOfPlay = new Date("Nov 6, 2021 12:00:00").getTime();

const App = props => {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Router />
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;
