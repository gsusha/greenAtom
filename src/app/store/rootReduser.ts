import { combineReducers } from '@reduxjs/toolkit';
import pageReducers from '../pages/pageRedusers';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const createReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    ...pageReducers,
  });

  if (action.type === 'auth/user/userLoggedOut') {
    state = undefined;
  }

  return combinedReducer(state, action as never);
};

export default createReducer;
