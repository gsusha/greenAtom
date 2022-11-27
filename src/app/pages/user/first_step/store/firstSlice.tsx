import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../../../../api/api';
import Paths from '../../../../store/paths';
import { Event, Person } from '../../../../models';

export const getPersonData = (v: Person) => ({
  name: v.name,
  phone: v.phone,
  telegram: v.telegram,
  specialization: v.specialization,
});

export const createPerson = createAsyncThunk<Event[], { data: Person; id?: string }>(
  'person/create',
  async ({ data }) => {
    const variables = getPersonData(data);

    return await Api.postData(Paths.PERSON_CREATE, variables);
  }
);

const initialState: Person = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  person: {
    name: '',
    phone: '',
    telegram: '',
    specialization: '',
  },
};

const toSecondSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    newPerson: (state) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.person = initialState.person;
    },
  },
});

export const { newPerson } = toSecondSlice.actions;

export default toSecondSlice.reducer;
