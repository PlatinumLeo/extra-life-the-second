import React from 'react';
import {
  Button,
  Hidden,
  Typography
} from '@material-ui/core';

import getStyles from './style';

const CallOut = ({ title, content, image, buttonText, buttonLink, leftAligned=true }) => {

  const classes = getStyles();

  return (
    <div className={classes.root}>
      <Hidden smUp>
        <div className={classes.imageRule} />
      </Hidden>
      <div className={(leftAligned) ? classes.imageContainer : classes.imageContainerRight}>
        <img src={image} className={classes.image} />
        <div className={classes.imageOverlay} />
      </div>
      <div className={(leftAligned) ? classes.textContainer : classes.textContainerRight}>
        <Typography variant="h3" className={classes.title} style={{ textTransform: 'uppercase' }}>{title}</Typography>
        <hr className={classes.rule} />
        <Typography className={classes.text}>{content}</Typography>
      </div>
    </div>
  );
};

export default CallOut;
