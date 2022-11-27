import eventDetail from './user/main/store';
import { combineReducers } from 'redux';
import eventsList from './admin/main/store';

const pageReducers = combineReducers({ eventDetail, eventsList });

export default pageReducers;
