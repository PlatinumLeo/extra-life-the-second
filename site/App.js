import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { DonationActions, DonorActions, TeamActions, TwitchActions } from './actions';
import Header from './components/Header';
import Router from './components/Router';

const teamId = '57288';
const twitchUsernames = [
  'pyroticblaziken'
];
const twitchChannelIds = [
  23679089
];

const mapDispatchToProps = dispatch => ({
  getDonations: id => {
    dispatch(DonationActions.getDonations(id));
  },
  getDonors: id => {
    dispatch(DonorActions.getDonors(id));
  },
  getTeam: id => {
    dispatch(TeamActions.getTeam(id));
  },
  getTwitchUsers: usernames => {
    dispatch(TwitchActions.getTwitchUsers(usernames));
  }
});

const App = props => {
  // TODO: should move saving this to redux store 
  const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight});

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  });

  useEffect(() => {
    props.getDonations(teamId);
    props.getDonors(teamId);
    props.getTeam(teamId);
    props.getTwitchUsers(twitchUsernames);
  }, []);

  // useEffect(() => {
  //     const fetchInterval = setInterval(() => {
  //         props.getDonations(teamId);
  //         props.getDonors(teamId);
  //         props.getTeam(teamId);
  //         props.getTwitchUsers(twitchUsernames);
  //     }, 60000);
      
  //     return () => clearInterval(fetchInterval);
  // }, []);

  const updateWindowDimensions = () => {
    setDimensions({width: window.innerWidth, height: window.innerHeight});
  }

  return (
    <>
      <BrowserRouter>
        <Header dimensions={dimensions}/>
        <Router/>
      </BrowserRouter>
    </>
  );
};

export default connect(null, mapDispatchToProps)(App);
