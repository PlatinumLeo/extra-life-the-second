import { createAction } from 'redux-api-middleware';

import { DonorActions } from '../actions';

const actionAllowList = [
    DonorActions.GET_MILESTONES
];

const milestonesMiddleware = (store) => (next) => (action) => {
    next(action);

    if (!actionAllowList.includes(action.type)) return;
    const request = {
        endpoint: `${window.location}api/participants/${action.participantID}/milestones`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [
            DonorActions.FETCH_DONORS_REQUEST,
            DonorActions.FETCH_DONORS_SUCCESS,
            DonorActions.FETCH_DONORS_FAILURE
        ]
    };

    store.dispatch(createAction(request));
};

export default milestonesMiddleware;
