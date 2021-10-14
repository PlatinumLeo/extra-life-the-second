import React from 'react';
import { Typography } from '@material-ui/core';

const POLYGON_PATH = 'polygon(0% 10%, 95% 10%, 100% 15%, 100% 100%, 5% 100%, 0% 95%)';

const CallOut = props => {

  let {
    title,
    content,
    buttonText,
    buttonLink,
    image
  } = props;

  return (
    <div style={{ position: 'relative', marginTop: '60px', marginBottom: '120px' }}>
      <div style={{ height: '560px', width: '940px', border: '4px solid #0150E9' }}>
        <div style={{ margin: '120px' }}>
          <Typography variant="h3" style={{ textTransform: 'uppercase' }}>{title}</Typography>
          {/* <hr style={{ width: '100px', border: '3px solid #001646' }} /> */}
          <Typography>{content}</Typography>
        </div>
      </div>
      <div style={{ position: 'absolute', top: '0px', right: '120px' }}>
        <img src={image} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, filter: 'grayscale(100%)', clipPath: POLYGON_PATH }} />
        <img src={image} style={{ filter: 'grayscale(0%)', clipPath: 'circle(50%)' }} />
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.6, background: '#0150E9', clipPath: 'circle(50%)' }} />
      </div>
    </div>
  );
};

export default CallOut;
