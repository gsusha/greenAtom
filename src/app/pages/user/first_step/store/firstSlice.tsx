import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../../../../api/api';
import Paths from '../../../../store/paths';
import { Person } from '../../../../models';

export const getPersonData = (v: Person) => {
  return {
    name: v.name,
    phone: v.phone,
    telegram: v?.telegram,
    specialization: v.specialization,
    eventId: v.eventId,
    inviterId: v?.inviterId,
  };
};

export const createPerson = createAsyncThunk<Person[], { data: Person }>('person/create', async ({ data }) => {
  const variables = getPersonData(data);

  return await Api.postData(Paths.PERSON_CREATE, variables);
});

const initialState: Person = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  person: {
    name: '',
    phone: '',
    telegram: '',
    specialization: '',
    eventId: '',
    inviterId: '',
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
  extraReducers: {
    [createPerson.fulfilled.toString()]: (state, action) => ({ ...state, person: action.payload.data }),
  },
});

export const { newPerson } = toSecondSlice.actions;

export default toSecondSlice.reducer;
