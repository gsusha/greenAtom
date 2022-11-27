import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../../../../api/api';
import Paths from '../../../../store/paths';
import { Spec } from '../../../../models/spec';

export const getSpec = createAsyncThunk('spec', async (id: string) => {
  return await Api.getData(Paths.EVENT_DETAIL);
  //TODO: Нужны специальности
});

const initialState: Spec = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  spec: {
    id: '',
    name: '',
  },
};

const firstSlice = createSlice({
  name: 'spec',
  initialState,
  reducers: {},
  extraReducers: {
    [getSpec.fulfilled.toString()]: (state, action) => ({ ...state, event: action.payload.data }),
  },
});

export default firstSlice.reducer;
