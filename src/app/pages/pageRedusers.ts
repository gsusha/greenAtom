import eventDetail from './user/main/store';
import { combineReducers } from 'redux';
import eventsList from './admin/main/store';
import toSecond from './user/first_step/store';

const pageReducers = combineReducers({ eventDetail, eventsList, toSecond });

export default pageReducers;
