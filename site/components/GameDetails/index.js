import React, { useContext } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import {
  Button,
  Grid,
  Icon,
  Link,
  Typography
} from '@material-ui/core';

import ArrowBack from '@material-ui/icons/ArrowBack';

import defaultImage from '../../assets/images/Icons/controller_blue.png';

import getStyles from './styles';
import { BreakpointContext } from '../../AdaptivityProvider';

import gameData from '../../assets/data/gameData';



const GameDetails = (props) => {
  const classes = getStyles();
  const { id } = useParams();
  let { name, image, platforms, obtain, join, extra } = gameData.find(g => g.id === id);
  const breakpoint = useContext(BreakpointContext);

  const textAlign = (breakpoint === 'xs') ? 'center' : 'left';

  const Obtain = ({ type, link }) => {
    switch (type) {
      case 'connect': return <Typography align={textAlign}>No need to purchase, just connect <Link href={obtain.link} target='_blank'>here</Link>.</Typography>
      default: return <Typography align={textAlign}>{(obtain.type === 'download') ? 'Download' : 'Purchase'} it from <Link href={obtain.link} target='_blank'>here</Link>.</Typography>;
    }
  };

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
              <img src={(image) ? image : defaultImage} className={classes.image} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <div className={classes.textContainer}>
            <Typography align={textAlign} variant='h3'>{name}</Typography>
            <Typography display='inline' variant='h6'>Platforms: </Typography>
            <Typography align={textAlign} display='inline'>{platforms.join(', ')}</Typography>
            <Typography align={textAlign} variant='h4'>How to Get It:</Typography>
            <Obtain {...obtain} />
            <Typography align={textAlign} variant='h4'>How to Join Us:</Typography>
            <ul>
              {join.map((item, i) => (
                <li key={`join-item-${i}`}><Typography>{item}</Typography></li>
              ))}
            </ul>
            <Typography align={textAlign} variant='h4'>Extra Notes:</Typography>
            <ul>
              {extra.map((item, i) => (
                <li key={`extra-item-${i}`}><Typography>{item}</Typography></li>
              ))}
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default GameDetails;
