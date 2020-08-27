import { createAction } from 'redux-api-middleware';

import { TeamActions } from '../actions';

const actionAllowList = [
    TeamActions.GET_TEAM
];


const teamMiddleware = (store) => (next) => (action) => {
    next(action);

    if (!actionAllowList.includes(action.type)) return;
    const request = {
        endpoint: `${window.location}api/${action.id}`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [
            TeamActions.FETCH_TEAM_REQUEST,
            TeamActions.FETCH_TEAM_SUCCESS,
            TeamActions.FETCH_TEAM_FAILURE
        ]
    };
    
    store.dispatch(createAction(request));
};

export default teamMiddleware;
