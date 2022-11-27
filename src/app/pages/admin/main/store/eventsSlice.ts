import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Event } from '../../../../models';
import Api from '../../../../api/api';
import Paths from '../../../../store/paths';

export const getEventData = (v: Event) => ({
  name: v.name,
  date: v.date,
});

export const getEvents = createAsyncThunk('events', async () => {
  return await Api.getData(Paths.EVENT_LIST);
});

export const createEvent = createAsyncThunk<Event[], { data: Event; id?: string }>(
  'hotel/createOrUpdate',
  async ({ data }) => {
    const variables = getEventData(data);

    return await Api.postData(Paths.EVENT_CREATE, variables);
  }
);

const initialState: Event = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  event: {
    id: '',
    name: '',
    date: '',
  },
  events: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    newEvent: (state) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.event = initialState.event;
    },
  },
  extraReducers: {
    // [getEvents.fulfilled.toString()]: (state, action) => ({ ...state, events: action.payload.data }),
    [getEvents.fulfilled.toString()]: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.events = action.payload.data || [];
    },
  },
});

export const { newEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
