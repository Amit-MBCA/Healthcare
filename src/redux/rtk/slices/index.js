import AsyncStorage from "@react-native-async-storage/async-storage";
import { authApi } from "../services/auth";
import { combineReducers } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistedReducer from "./persistedSlice";
import NotificationSlice from "../../components/Features/CardSlice";
const presistConfig = {
  key: "persist",
  storage: AsyncStorage,
};

// Create a persisted reducer for the persist reducer
const persistValueReducer = persistReducer(presistConfig, persistedReducer);

export const rootReducer = combineReducers({
  persist: persistValueReducer,
  global: globalReducer,
  // notification: NotificationSlice,
  [authApi.reducerPath]: authApi.reducer,
});
