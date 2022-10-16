import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi } from "../../../url";
export const taskeSlice = createSlice({
  name: "task",
  initialState: {
    team: [],
    member: [],
  },
  reducers: {
    taskControll: (state, action) => {
      const { el, teamL } = action.payload;
      if (teamL) {
        state.team.push(el.label);
      } else {
        state.member.push(el.label);
      }
      //   state.team.push(action.payload);
    },
  },
});
export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApi,
  }),
  endpoints: (builder) => ({
    addProject: builder.mutation({
      query: (body) => {
        console.log("redux auth body log by redux", body);
        return {
          url: "project",
          // headers: {
          //   "content-type": "multipart/form-data",
          // },
          body: body,
          method: "POST",
        };
      },
    }),
  }),
});

export const { taskControll } = taskeSlice.actions;
export default taskeSlice.reducer;
export const { useAddProjectMutation } = tasksApi;
