import { combineReducers } from 'redux';

import donations from './donations';
import donors from './donors';
import schedule from './schedule';
import team from './team';
import twitch from './twitch';

export default combineReducers({
    donations,
    donors,
    schedule,
    team,
    twitch
});
