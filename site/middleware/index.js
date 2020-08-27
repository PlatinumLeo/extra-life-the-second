import { applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import teamMiddlware from './team';
import teamMiddleware from './team';

const allMiddleware = applyMiddleware(
    apiMiddleware,
    teamMiddleware,
    thunk
);

export default allMiddleware;