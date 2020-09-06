import { TeamActions } from '../actions';

const initialState = { };

const team = (state = initialState, action) => {
    switch(action.type) {
        case TeamActions.FETCH_TEAM_SUCCESS:
            console.log(action);
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

export default team;
