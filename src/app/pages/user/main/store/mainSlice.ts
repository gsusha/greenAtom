import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Event } from '../../../../models';
import Api from '../../../../api/api';
import Paths from '../../../../store/paths';

export const getDetailEvent = createAsyncThunk('event', async (id: string) => {
  return await Api.getData(Paths.EVENT_DETAIL, { key: 'id', id: id });
});

interface EventsState {
  event: Event;
}

const initialState: EventsState = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  event: {
    name: '',
  },
};

const mainSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: {
    [getDetailEvent.fulfilled.toString()]: (state, action) => ({ ...state, event: action.payload.data }),
  },
});

export default mainSlice.reducer;
