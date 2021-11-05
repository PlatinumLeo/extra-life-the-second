import React, { useContext } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import {
  Button,
  Grid,
  Icon,
  Link,
  Typography
} from '@mui/material';

import { ArrowBack } from '@mui/icons-material';

import getStyles from './styles';
import { BreakpointContext } from '../../AdaptivityProvider';

import srb2kTitle from '../../assets/images/Games/srb2k.png';

const GameDetails = (props) => {
  const classes = getStyles();
  const { id } = useParams();
  const breakpoint = useContext(BreakpointContext);

  const textAlign = (breakpoint === 'xs') ? 'center' : 'left';

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.navContainer}>
          <Button startIcon={<ArrowBack />} component={RouterLink} to='/games'>
            Back to Game List
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>
            <div className={classes.imageRule} />
            <div className={classes.imageContainer}>
              <img src={srb2kTitle} className={classes.image} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <div className={classes.textContainer}>
            <Typography align={textAlign} variant='h3'>Sonic Robo Blast 2 Kart</Typography>
            <Typography display='inline' variant='h6'>Platforms: </Typography>
            <Typography align={textAlign} display='inline'>PC, Mac, Linux</Typography>
            <Typography align={textAlign} variant='h4'>How to Get It:</Typography>
            <Typography align={textAlign}>Download it from <Link href='https://github.com/STJr/Kart-Public/releases' target='_blank'>here</Link>.</Typography>
            <Typography align={textAlign} variant='h4'>How to Join Us:</Typography>
            <ul>
              <li><Typography>Go to Multiplayer from the main menu</Typography></li>
              <li><Typography>Go to the *Specify IPV4 Address:* section</Typography></li>
              <li><Typography>Enter *howi.servegame.com*</Typography></li>
            </ul>
            <Typography align={textAlign} variant='h4'>Extra Notes:</Typography>
            <ul>
              <li><Typography>By default, the arrow keys and Enter navigate the menu, and you will need to press enter on the title screen once to open the menu.</Typography></li>
              <li><Typography>Be sure to connect any controllers you want to use before you start, I think you can change configs afterwards, but that might take some doing.</Typography></li>
              <li><Typography>I would check out the Tips & Secrets section under options and maybe drive around in Time Trails on my first boot just to get a feel for it.</Typography></li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default GameDetails;
