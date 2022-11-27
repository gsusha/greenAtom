import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Event } from '../../../../models';
import Api from '../../../../api/api';
import Paths from '../../../../store/paths';

export const getEvents = createAsyncThunk('events', async () => {
  return await Api.getData(Paths.EVENT_LIST);
});

const initialState: Event = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  events: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: {
    // [getEvents.fulfilled.toString()]: (state, action) => ({ ...state, events: action.payload.data }),
    [getEvents.fulfilled.toString()]: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.events = action.payload.data || [];
    },
  },
});

export default eventsSlice.reducer;
