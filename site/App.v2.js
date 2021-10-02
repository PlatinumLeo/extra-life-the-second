import React, { useContext, useEffect, useState } from 'react';
import { Paper, Typography } from '@material-ui/core';

import Header from './components/Header.v2';
import Hero from './components/Hero';
import Sponsor from './components/Sponsor';
import Mission from './components/Mission';
import CallOut from './components/CallOut';
import Impact from './components/Impact';
import Team from './components/Team';
import Footer from './components/Footer';

import { DonationsContext } from './DonationsProvider';

const teamId = '57288';
const App = props => {

  const { updateDonations } = useContext(DonationsContext);
  
  const fetchDonationData = async() => {
    try {
      const response = await fetch('/api/teams/57288/donations');
      const json = await response.json();
      console.log(json);
      updateDonations(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDonationData();
  }, []);

  let callOutProps0 = {
    title: 'Why Extra Life?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    buttonText: 'Elementum Auctor',
    buttonLink: '',
    imageSource: '',
    layout: 'textLeft'
  };

  let callOutProps1 = {
    title: 'Want to join the cause?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    buttonText: 'Consequat Massa',
    buttonLink: '',
    imageSource: '',
    layout: 'textRight'
  };

  return (
    <Paper>
      <Header />
      <Hero />
      <Sponsor />
      <Mission />
      <CallOut {...callOutProps0}/>
      <CallOut {...callOutProps1}/>
      <Impact />
      <Team />
      <Footer />
    </Paper>
  );
};

export default App;
