import React from 'react';
import { Typography } from '@material-ui/core';

const CallOut = props => {

  let {
    title,
    content,
    buttonText,
    buttonLink
  } = props;

  return (
    <>
      <Typography>{title}</Typography>
      <Typography>{content}</Typography>
    </>
  );
};

export default CallOut;
