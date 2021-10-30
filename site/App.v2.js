import React, { useContext, useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header.v2';
import Footer from './components/Footer';
import Router from './components/Router';

import { DonationsContext } from './DonationsProvider';
import { TeamContext } from './TeamProvider';

const teamId = '57288';
const twitchUsernames = [
  'pyroticblaziken'
];
const twitchChannelIds = [
  23679089
];
const dayOfPlay = new Date("Nov 6, 2021 12:00:00").getTime();

const App = props => {
  const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight});

  const updateWindowDimensions = () => {
    setDimensions({width: window.innerWidth, height: window.innerHeight});
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  });

  const { updateDonations } = useContext(DonationsContext);
  const { updateTeam } = useContext(TeamContext);
  
  const fetchDonationData = async() => {
    try {
      const response = await fetch(`/api/teams/${teamId}/donations`);
      const json = await response.json();
      updateDonations(json);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTeamData = async() => {
    try {
      const response = await fetch(`/api/teams/${teamId}`);
      let json = await response.json();
      updateTeam(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDonationData();
    fetchTeamData();
  }, []);

  return (
    <BrowserRouter>
      <Paper>
        <Header dimensions={dimensions} />
        <Router />
        <Footer />
      </Paper>
    </BrowserRouter>
  );
};

export default App;
