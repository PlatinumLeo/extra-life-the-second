import React from 'react';
// import { connect } from 'react-redux';

import {
  Typography
} from '@mui/material';

import TwitchItem from './TwitchItem';

// const mapStateToProps = state => ({
//   streams: state.twitch.streams,
//   users: state.twitch.users
// });

const Twitch = ({ streams, users }) => {
  let componentToRender;

  if (users.length == 0) {
    componentToRender = <Typography>There are no streamers available.</Typography>
  } else {
    componentToRender = users.map((user, i) => (
      <TwitchItem key={i}
        channel={user}
        stream={streams.find(stream => stream.channel._id == user.channel._id)}
      />
    ));
  }

  return (<>{componentToRender}</>);
};

export default Twitch;
