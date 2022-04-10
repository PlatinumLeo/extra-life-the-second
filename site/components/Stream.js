import React, { useContext } from 'react';
import { Box } from '@mui/material';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

import { BreakpointContext, SizeContext } from '../providers/AdaptivityProvider';

const ROOT_SX = {
  margin: '0',
  marginLeft: {
    laptop: 'calc(calc(100vw - 1024px) / 2)',
    desktop: 'calc(calc(100% - 1364px) / 2)'
  }
};

const Stream = ({ className }) => {
  const breakpoint = useContext(BreakpointContext);
  const { width } = useContext(SizeContext);

  let twitchProps = {
    align: 'center',
    autoplay: false,
    channel: 'pyroticblaziken',
    chat: 'mobile',
    layout: 'video',
    width: width,
    targetClass: className
  };

  switch (breakpoint) {
    case 'desktop':
      twitchProps.width = 1364;
      twitchProps.height = 576;
      twitchProps.chat = 'default';
      twitchProps.layout = 'video-with-chat'
      break;
    case 'laptop':
      twitchProps.width = 960;
      twitchProps.height = 540;
      twitchProps.chat = 'default';
      break;
    default:
      twitchProps.height = Math.floor(width * 2 / 3);
      break;
  }

  return (
    <Box sx={ROOT_SX}>
      <ReactTwitchEmbedVideo {...twitchProps} />
    </Box>
  );
};

export default Stream;
