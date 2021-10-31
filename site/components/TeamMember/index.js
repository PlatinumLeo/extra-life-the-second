import React from 'react';
import {
  Grid,
  Hidden,
  Typography
} from '@material-ui/core';

import getStyles from './style';

const TeamMember = ({ name, game, description, image }) => {
  const classes = getStyles();

  return (
    <div>
      <Hidden smUp>
        <div className={classes.root}>
          <div className={classes.imageRule} />
          <div className={classes.imageContainer}>
            <img src={image} className={classes.image} />
          </div>
          <div className={classes.textContainer}>
            <Typography variant="h3" className={classes.title} style={{ textTransform: 'uppercase' }}>{name}</Typography>
            <hr className={classes.rule} />
            <div className={classes.game}>
              <Typography display='inline'>Game: </Typography>
              <Typography display='inline'>{game}</Typography>
            </div>
            <Typography className={classes.text}>{description}</Typography>
          </div>
        </div>
      </Hidden>
      <Hidden xsDown>
        <Grid container className={classes.root}>
          <Grid item sm={4}>
            <div className={classes.imageContainer}>
              <img src={image} className={classes.image} />
            </div>
          </Grid>
          <Grid item sm={8}>
            <div className={classes.textContainer}>
              <Typography variant="h3" className={classes.title} style={{ textTransform: 'uppercase' }}>{name}</Typography>
              <hr className={classes.rule} />
              <div className={classes.game}>
                <Typography display='inline'>Game: </Typography>
                <Typography display='inline'>{game}</Typography>
              </div>
              <Typography className={classes.text}>{description}</Typography>
            </div>
          </Grid>
        </Grid>
      </Hidden>
    </div>
    
  )
};

export default TeamMember;
