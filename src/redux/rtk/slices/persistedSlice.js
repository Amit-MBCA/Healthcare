import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  usermail: null,
  isEmailVerified: false,
  onboardingPending: false,
  userPic: null,
  selectedLanguage: "en",
  batchCount: 0,
  pendingNotify: 0,
  searchQuery: "",
  userId: null,
};

const persistedSlice = createSlice({
  name: "persist",
  initialState,
  reducers: {
    setToken: (state, action) => {
      return {
        ...state,
        token: action?.payload,
      };
    },
    setUsermail: (state, action) => {
      return {
        ...state,
        usermail: action?.payload,
      };
    },
    setEmailVerified: (state, action) => {
      return {
        ...state,
        isEmailVerified: action?.payload,
      };
    },
    setOnboardingPending: (state, action) => {
      return {
        ...state,
        onboardingPending: action?.payload,
      };
    },
    setSelectedLang: (state, action) => {
      return {
        ...state,
        selectedLanguage: action?.payload,
      };
    },
    setUserPic: (state, action) => {
      return {
        ...state,
        userPic: action?.payload,
      };
    },
    setUserId: (state, action) => {
      return {
        ...state,
        userId: action?.payload,
      };
    },
    setBatchCount: (state, action) => {
      return {
        ...state,
        batchCount: action?.payload,
      };
    },
    setSearchQuery: (state, action) => {
      return {
        ...state,
        searchQuery: action?.payload,
      };
    },
    setPendingNotify: (state, action) => {
      return {
        ...state,
        pendingNotify: action?.payload,
      };
    },
    resetPersistStore: (state, action) => {
      return {
        ...initialState,
        selectedLanguage: state.selectedLanguage,
      };
    },
  },
});

export const tokenSelector = (state) => state.persist.token;
export const emailVerifiedSelector = (state) => state.persist.isEmailVerified;
export const usermailSelector = (state) => state.persist.usermail;
export const userPicSelector = (state) => state.persist.userPic;
export const languageSelector = (state) => state.persist.selectedLanguage;
export const onboardingPendingSelector = (state) =>
  state.persist.onboardingPending;
export const isProfileCompletedSelector = (state) =>
  state.persist.isProfileCompleted;
export const batchCountSelector = (state) => state.persist.batchCount;
export const pendingNotifySelector = (state) => state.persist.pendingNotify;
export const searchQuerySelector = (state) => state.persist.searchQuery;
export const userIdSelector = (state) => state.persist.userId;

export const {
  setToken,
  resetPersistStore,
  setUsermail,
  setEmailVerified,
  setOnboardingPending,
  setSelectedLang,
  setUserPic,
  setUserId,
  setBatchCount,
  setSearchQuery,
  setPendingNotify,
} = persistedSlice.actions;
export default persistedSlice.reducer;
