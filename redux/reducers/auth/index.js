import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi } from "../../api";

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
