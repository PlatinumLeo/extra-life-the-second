import React from 'react';

import {
    Link,
    Typography
} from '@mui/material';

import getStyles from './styles';
import dayOfPlay from '../../assets/data/dayOfPlay';


const Participate = (props) => {
  const classes = getStyles();

  const date = new Date(dayOfPlay);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { timeZoneName: 'short' };

  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <Typography variant="h3">How do I participate?</Typography>
        <Typography variant="h4">Day of Play</Typography>
        <Typography>Join us on {date.toLocaleDateString('en-US', dateOptions)} at {date.toLocaleTimeString('en-US', timeOptions)} over on <Link href='https://www.twitch.tv/pyroticblaziken' target='_blank'>https://www.twitch.tv/pyroticblaziken</Link>. We are going to have a live stream and Discord with everyone for gaming and fun!</Typography>
        <Typography variant="h4">Donate</Typography>
        <Typography>Click the button in the top right or follow the link <Link href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=456320#donate" target="_blank">here to donate</Link>. Your money goes to <Link href="https://choa.childrensmiraclenetworkhospitals.org/" target="_blank">Children's Healthcare of Atlanta</Link>.</Typography>
        <Typography variant="h4">Spread the word</Typography>
        <Typography>Let your friends and family know about this Game-a-thon rasing money for the Children's Miracle Network! We make the most impact by working together to raise money.</Typography>
        <Typography variant="h4">Raffle</Typography>
        <Typography>We are going to have two raffle pools! Check out the stream for more details!</Typography>
        <Typography variant='caption'>* Raffle only open to Slalom employees who donate to Extra Life before the time of the raffle. Contact Jordan Leahey for more information.</Typography>
      </div>
    </div>
  );
};

export default Participate;
