import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  user: any | null;
  prescriptions: string[];
}

const initialState: AuthState = {
  token: null,
  user: null,
  prescriptions: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: any; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    addPrescription: (state, action: PayloadAction<string>) => {
      state.prescriptions.push(action.payload);
    },
  },
});

export const { setCredentials, logout, addPrescription } = authSlice.actions;

export default authSlice.reducer;
