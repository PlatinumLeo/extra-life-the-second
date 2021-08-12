import { createAction } from 'redux-api-middleware';

import { DonationActions } from '../actions';

const actionAllowList = [
    DonationActions.GET_INCENTIVES
];

const incentivesnMiddleware = (store) => (next) => (action) => {
    next(action);

    if (!actionAllowList.includes(action.type)) return;
    const request = {
        endpoint: `${window.location}/api/participants/${action.participantID}/incentives`,
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

export default incentivesnMiddleware;
