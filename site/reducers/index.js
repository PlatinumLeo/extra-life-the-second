import { combineReducers } from 'redux';

import donations from './donations';
import donors from './donors';
import team from './team';

export default combineReducers({
    donations,
    donors,
    team
});
