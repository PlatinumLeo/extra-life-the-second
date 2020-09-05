import { DonationActions } from '../actions';

const initialState = [];

const donations = (state = initialState, action) => {
  switch(action.type) {
    case DonationActions.FETCH_DONATIONS_SUCCESS:
      let { payload } = action;
      if (!!payload) state = payload;
      return state;
    default:
      return state;
  }
};

export default donations;
