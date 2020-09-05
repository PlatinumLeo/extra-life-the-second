import { TwitchActions } from '../actions';

const initialState = {
  streams: [],
  users: []
};

const twitch = (state = initialState, action) => {
  switch(action.type) {
    case TwitchActions.FETCH_TWITCH_STREAM_SUCCESS:
      return Object.assign({}, state, action.payload);
    case TwitchActions.FETCH_TWITCH_USERS_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default twitch;
