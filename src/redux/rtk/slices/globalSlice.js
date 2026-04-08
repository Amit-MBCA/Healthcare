import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  sharedData: null,
  allContacts: [],
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    loadingOn: (state, action) => {
      state.isLoading = true;
    },
    loadingOff: (state) => {
      state.isLoading = false;
    },
    setSharedData: (state, action) => {
      state.sharedData = action?.payload;
    },

    setAllContact: (state, action) => {
      state.allContacts = action?.payload;
    },
    resetGlobalStore: () => {
      return initialState;
    },
  },
});
export const loaderSelector = (state) => state.global.isLoading;
export const sharedDataSelector = (state) => state.global.sharedData;
export const allContactsSelector = (state) => state.global.allContacts;
export const {
  loadingOn,
  loadingOff,
  resetGlobalStore,
  setSharedData,
  setAllContact,
} = globalSlice.actions;
export default globalSlice.reducer;
