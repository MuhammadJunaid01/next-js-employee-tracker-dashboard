import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi } from "../../../url";

export const screenShotAPi = createApi({
  reducerPath: "screenShotAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApi,
  }),
  endpoints: (builder) => ({
    takeScreenShot: builder.mutation({
      query: (body) => {
        return {
          url: "screenShot",
          body: body,
          method: "POST",
        };
      },
    }),
  }),
});
export const { useTakeScreenShotMutation } = screenShotAPi;
