import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';

import { BreakpointContext, SizeContext } from '../AdaptivityProvider';

const BreakpointDisplay = (props) => {
  const breakpoint = useContext(BreakpointContext);
  const { height, width } = useContext(SizeContext);

  return (
    <div>
      <Typography>Breakpoint Display</Typography>
      <Typography>{`Width: ${width}px Height: ${height}px`}</Typography>
      <Typography>{`Breakpoint Size: ${breakpoint}`}</Typography>
    </div>
  )
};

export default BreakpointDisplay;
