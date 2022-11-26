import { configureStore } from '@reduxjs/toolkit';
import Actions, { IAction } from './actions';

export const initialState = {
  persons: [],
};

const reducer = (state = initialState, action: IAction<never>) => {
  switch (action.type) {
    case Actions.GET_EVENTS:
      return { value: action.payload };

    default:
      return state;
  }
};

const store = configureStore({
  reducer: () => reducer(initialState, { type: '' }),
});

export default store;
