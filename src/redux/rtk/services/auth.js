// Need to use the React-specific entry point to import createApi
import { emptySplitApi, header1 } from ".";

import { Method } from "./apiMethod";
import { apiEndPoints } from "./apiEndPoint";

export const authApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    contactUs: Method.POST(builder, apiEndPoints.contactUs, header1),
    userFollowersFollowings: Method.POST(builder, apiEndPoints.userFollowers, header1),
    saveCommunityPost: Method.POST(builder, apiEndPoints.savedCommunityPost, header1),
    listCommunityPost: Method.POST(builder, apiEndPoints.listCommunityPost, header1),
    listGlobuser: Method.POST(builder, apiEndPoints.listGlobusers, header1),
  }),
});

export const { useContactUsMutation, useUserFollowersFollowingsMutation, useSaveCommunityPostMutation, useListCommunityPostMutation, useListGlobuserMutation } = authApi;
