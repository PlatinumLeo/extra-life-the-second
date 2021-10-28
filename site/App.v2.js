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
import { TeamContext } from './TeamProvider';

import content0Image from './assets/images/BackgroundImages/samantha-sophia-fqyEoItOUGE-unsplash 1.png';
import content1Image from './assets/images/BackgroundImages/erik-mclean-qgInQSplXBU-unsplash 1.png';

const teamId = '57288';
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

  let callOutProps0 = {
    title: 'Why Extra Life?',
    content: "When I was a kid, I had really bad asthma and when I was very little, I would have to go to a hospital for it. Eventually, I was able to go home with a nebulizer and Albuterol, but whenever I had an asthma attack, I would have to sit inside and not run around, so I spent a lot of time while I was sick playing games. That inspired me to find a way to give back to the medical community and incorporate video  games. While participating in something like Games Done Quick would be super cool, it didn't quite fit what I wanted to do, where I found Extra Life, which is a great way to get others involved.",
    buttonText: 'Elementum Auctor',
    buttonLink: '',
    image: content0Image,
    layout: 'textLeft'
  };

  let callOutProps1 = {
    title: 'How can I join?',
    content: "On November 6th, we are hosting a Day of Play, where we will stream games for 24 hours. Join us in Discord and in whatever games we set out to play! \nIf you would like to help spread the word and help us raise money and awareness, please reach out to Alex Lyons or Shah Zafrani.",
    buttonText: 'Consequat Massa',
    buttonLink: '',
    image: content1Image,
    layout: 'textRight'
  };

  return (
    <Paper>
      <Header dimensions={dimensions} />
      <Hero dayOfPlay={dayOfPlay} />
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
