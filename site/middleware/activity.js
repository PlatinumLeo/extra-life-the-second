import { createAction } from 'redux-api-middleware';

import { DonationActions } from '../actions';

const actionAllowList = [
    DonationActions.GET_DONATIONS
];

const activityMiddleware = (store) => (next) => (action) => {
    next(action);

    if (!actionAllowList.includes(action.type)) return;
    const request = {
        endpoint: `${window.location}/api/teams/${action.id}/activity`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [
            DonationActions.FETCH_DONATIONS_REQUEST,
            DonationActions.FETCH_DONATIONS_SUCCESS,
            DonationActions.FETCH_DONATIONS_FAILURE
        ]
    };

    store.dispatch(createAction(request));
};

export default activityMiddleware;
