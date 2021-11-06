import React, { useContext } from 'react';
import { useTheme } from '@material-ui/core/styles';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

import { BreakpointContext, SizeContext } from '../../AdaptivityProvider';

const Stream = ({ className }) => {
  const theme = useTheme();
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
    case 'xl':
      twitchProps.width = 1620;
      twitchProps.height = 720;
      twitchProps.chat = 'default';
      twitchProps.layout = 'video-with-chat'
      break;
    default:
      twitchProps.height = Math.floor(width * 2 / 3);
      break;
  }

  return (
    <ReactTwitchEmbedVideo {...twitchProps} />
  );
};

export default Stream;
