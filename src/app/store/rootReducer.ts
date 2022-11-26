import { combineReducers } from '@reduxjs/toolkit';
import pageReducers from '../pages/pageRedusers';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const createReducer = () => (state, action) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const combinedReducer = combineReducers({
    ...pageReducers,
  });

  return combinedReducer(state, action as never);
};

export default createReducer;
