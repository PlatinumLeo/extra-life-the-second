import React from 'react';
import {
  Button,
  Hidden,
  Typography
} from '@material-ui/core';

import getStyles from './style';

const CallOut = ({ title, content, image, buttonText, buttonLink, leftAligned=true, filter=true }) => {

  const classes = getStyles();

  return (
    <div className={classes.root}>
      <Hidden smUp>
        <div className={classes.imageRule} />
      </Hidden>
      <div className={(leftAligned) ? classes.imageContainer : classes.imageContainerRight}>
        <img src={image} className={`${classes.image} ${(filter) ? classes.gray : ''}`} />
        <div className={`${classes.imageOverlay} ${(!filter) ? classes.hidden : ''}`} />
      </div>
      <div className={(leftAligned) ? classes.textContainer : classes.textContainerRight}>
        <Typography color='primary' variant="h3" className={classes.title} style={{ textTransform: 'uppercase' }}>{title}</Typography>
        <hr className={classes.rule} />
        {(Array.isArray(content)) ? 
          content.map((c, i) => <Typography color='primary' className={classes.text} key={`mini-content-${i}`}>{c}</Typography>) :
          <Typography color='primary' className={classes.text}>{content}</Typography>
        }
      </div>
    </div>
  );
};

export default CallOut;
