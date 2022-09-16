import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

import { baseApi } from "../../url";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: undefined,
  },
  reducers: {
    getUser: (state, action) => {
      const user = JSON.parse(localStorage.getItem("user"));
      state.user = user;
    },
  },
});
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApi,
  }),
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (body) => {
        console.log("redux auth body log by redux", body);
        return {
          url: "auth",
          body: body,
          method: "POST",
        };
      },
    }),
  }),
});

export const { useAddUserMutation } = authApi;
export const { getUser } = userSlice.actions;
export default userSlice.reducer;
