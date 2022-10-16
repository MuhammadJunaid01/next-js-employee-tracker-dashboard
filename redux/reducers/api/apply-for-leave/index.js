import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { baseApi } from "../../../url";

export const applyForLeave = createApi({
  reducerPath: "applyForLeave",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApi,
  }),
  endpoints: (builder) => ({
    applyLeave: builder.mutation({
      query: (body) => {
        console.log("hello body", body);
        return {
          url: "applyForLeave",
          body: body,
          method: "POST",
        };
      },
    }),
    getApplyEmployee: builder.query({
      query: () => "applyForLeave",
    }),
  }),
});
export const { useApplyLeaveMutation, useGetApplyEmployeeQuery } =
  applyForLeave;
