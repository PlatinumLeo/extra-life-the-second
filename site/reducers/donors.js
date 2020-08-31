import { DonorActions } from '../actions';

const initialState = [];

const donors = (state = initialState, action) => {
    switch(action.type) {
        case DonorActions.FETCH_DONORS_SUCCESS:
            let { payload } = action;
            if (!!payload) state = payload;
            return state;
        default:
            return state;
    }
};

export default donors;
