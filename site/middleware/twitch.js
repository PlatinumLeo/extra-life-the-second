import { createAction } from 'redux-api-middleware';

import { TwitchActions } from '../actions';

const actionAllowList = [
  TwitchActions.GET_TWITCH_STREAMS,
  TwitchActions.FETCH_TWITCH_USERS_SUCCESS,
  TwitchActions.GET_TWITCH_USERS
];

const twitchMiddleware = (store) => (next) => (action) => {
  next(action);

  if (!actionAllowList.includes(action.type)) return;

  let request = {};
  let url = 'https://api.twitch.tv/kraken/';
  const twitch = store.getState().twitch;

  switch(action.type) {
    case TwitchActions.FETCH_TWITCH_USERS_SUCCESS:
      store.dispatch(TwitchActions.getTwitchStreams(twitch.users.map(u => u._id)));
      break;
    case TwitchActions.GET_TWITCH_STREAMS:
      request = {
        endpoint: `${url}streams?channel=${action.channelIds.toString()}`,
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': 'mo2zyz8fwx0rpcdhve83nql5ymzmsa'
        },
        types: [
          TwitchActions.FETCH_TWITCH_STREAM_REQUEST,
          TwitchActions.FETCH_TWITCH_STREAM_SUCCESS,
          TwitchActions.FETCH_TWITCH_STREAM_FAILURE
        ]
      };
      store.dispatch(createAction(request));
      break;
    case TwitchActions.GET_TWITCH_USERS:
      request = {
        endpoint: `${url}users?login=${action.usernames.toString()}`,
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': 'mo2zyz8fwx0rpcdhve83nql5ymzmsa'
        },
        types: [
          TwitchActions.FETCH_TWITCH_USERS_REQUEST,
          TwitchActions.FETCH_TWITCH_USERS_SUCCESS,
          TwitchActions.FETCH_TWITCH_USERS_FAILURE
        ]
      };
      store.dispatch(createAction(request));
      break;
    default: 
      return; // Should never get here but good practice
  }
};

export default twitchMiddleware;
