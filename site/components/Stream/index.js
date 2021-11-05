import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

import { BreakpointContext, SizeContext } from '../../AdaptivityProvider';

const Stream = (props) => {
  const theme = useTheme();
  const breakpoint = useContext(BreakpointContext);
  const { width } = useContext(SizeContext);

  return (
    <ReactTwitchEmbedVideo
      align="center"
      autoplay={false}
      channel="pyroticblaziken"
      chat={(theme.breakpoints.down('sm')) ? 'mobile' : 'default' }
      // layout={(theme.breakpoints.down('sm')) ? 'video' : 'video-with-chat' }
      width={width}
    />
  );
};

export default Stream;
