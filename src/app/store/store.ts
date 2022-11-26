import { configureStore } from '@reduxjs/toolkit';
import Actions, { IAction } from './actions';
import { Action } from 'redux';

export const initialState = {
  persons: [],
};

const reducer = (state = initialState, action: IAction<any>) => {
  switch (action.type) {
    case Actions.GET_EVENTS:
      return { value: action.payload };

    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
});

export default store;
