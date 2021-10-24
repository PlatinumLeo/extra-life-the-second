import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';

import { TeamContext } from '../TeamProvider';
import HeartProgressBar from './HeartProgressBar';

import backgroundImage from '../assets/images/BackgroundImages/mmx4_still.jpg';

const Hero = props => {

  const { team } = useContext(TeamContext);

  return (
    <div style={{ position: 'relative' }}>
      <img src={backgroundImage} style={{ filter: 'blur(2px) '}} />
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.8, background: 'linear-gradient(76deg, #9EEEE1, #462DEA)' }} />
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 1 }}>
          <Typography variant="h1" align="center" style={{ maxWidth: '850px', textTransform: 'uppercase' }}>We play games to help children’s hospitals in the united states and canada</Typography>
          <Typography variant="h5" align="center" style={{ maxWidth: '850px', textTransform: 'uppercase' }}>Next stream starts in</Typography>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '700px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h5">146</Typography>
              <Typography variant="caption" style={{ textTransform: 'uppercase' }}>Days</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h5">3,505</Typography>
              <Typography variant="caption" style={{ textTransform: 'uppercase' }}>Hours</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h5">210,240</Typography>
              <Typography variant="caption" style={{ textTransform: 'uppercase' }}>Minutes</Typography>
            </div>
          </div>
          <HeartProgressBar sumDonations={team.sumDonations} fundraisingGoal={team.fundraisingGoal} />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant="h3">${team.sumDonations}</Typography>
            <Typography>Raised of ${team.fundraisingGoal} goal</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
