import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUserState } from '../../types';

const userInitialState: TUserState = {
  name: '',
  email: '',
  persona: 0,
};

interface TSetUserActionPayload {
  name?: string;
  email?: string;
  persona?: number;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUser: (state, action: PayloadAction<TSetUserActionPayload>) => {
      if (action.payload.name) {
        state.name = action.payload.name;
      }

      if (action.payload.email) {
        state.email = action.payload.email;
      }

      if (action.payload.persona) {
        state.persona = action.payload.persona;
      }
    },
  },
});

export const { setUser } = userSlice.actions;
