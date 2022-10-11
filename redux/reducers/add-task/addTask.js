import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { baseApi } from "../../url";

export const addTaskApi = createApi({
  reducerPath: "addTaskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApi,
  }),
  endpoints: (builder) => ({
    addTask: builder.mutation({
      query: (data) => {
        return {
          url: "addTask",
          body: data,
          method: "POST",
        };
      },
    }),
  }),
});
export const { useAddTaskMutation } = addTaskApi;
