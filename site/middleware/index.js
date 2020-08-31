import { applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import donationMiddleware from './donations';
import donorMiddleware from './donors';
import teamMiddleware from './team';

const allMiddleware = applyMiddleware(
    apiMiddleware,
    donationMiddleware,
    donorMiddleware,
    teamMiddleware,
    thunk
);

export default allMiddleware;