import React from 'react';

import {
    Grid,
    Link,
    Typography
} from '@material-ui/core';

import { useDefaultStyles } from '../../styles';

const ParticipatePage = props => {
  const classes = useDefaultStyles();

  return (
    <Grid container spacing={3} className={classes.main}>
      <Grid item xs={12}>
        <Typography variant="h3">How do I participate?</Typography>
        <Typography variant="h4">Day of Play</Typography>
        <Typography>Join us on November 7th, 2020, starting at 11:00 am EST. We are going to have a live stream and Discord with everyone for gaming and fun!</Typography>
        <Typography variant="h4">Donate</Typography>
        <Typography>Click the button in the top right or follow the link <Link href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=412259#donate" target="_blank">here to donate</Link>. Your money goes to <Link href="https://choa.childrensmiraclenetworkhospitals.org/" target="_blank">Children's Healthcare of Atlanta</Link>.</Typography>
        <Typography variant="h4">Spread the word</Typography>
        <Typography>Let your friends and family know about this Game-a-thon rasing money for the Children's Miracle Network! We make the most impact by working together to raise money.</Typography>
      </Grid>
    </Grid>
  );
};

export default ParticipatePage;
