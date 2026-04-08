import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Globals from "../../shared/Globals";

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: Globals.IMAGE_URL,
    credentials: "include",
    prepareHeaders: async (headers, { getState }) => {
      // console.log('BASE_URL', BASE_URL);
      // const access_token = await DataManager.getAccessToken();
      const access_token = Globals.Token;

      if (access_token) {
        headers.set("token", `${access_token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});

export const header1 = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const header2 = {
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
};
