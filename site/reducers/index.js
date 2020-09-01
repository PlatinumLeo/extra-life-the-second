import { combineReducers } from 'redux';

import donations from './donations';
import donors from './donors';
import schedule from './schedule';
import team from './team';

export default combineReducers({
    donations,
    donors,
    schedule,
    team
});
