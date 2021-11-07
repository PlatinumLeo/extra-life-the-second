import React, { useContext } from 'react';
import { useTheme } from '@material-ui/core/styles';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

import { BreakpointContext, SizeContext } from '../../AdaptivityProvider';
import getStyles from './styles';

const Stream = ({ className }) => {
  const classes = getStyles();
  const theme = useTheme();
  const breakpoint = useContext(BreakpointContext);
  const { width } = useContext(SizeContext);

  console.log(breakpoint);

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
    case 'lg':
      twitchProps.width = 1024;
      twitchProps.height = 576;
      twitchProps.chat = 'default';
      break;
    default:
      twitchProps.height = Math.floor(width * 2 / 3);
      break;
  }

  return (
    <div className={classes.root}>
      <ReactTwitchEmbedVideo {...twitchProps} />
    </div>
  );
};

export default Stream;
