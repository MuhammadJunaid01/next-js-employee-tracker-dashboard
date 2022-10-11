import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { addTaskApi } from "../reducers/add-task/addTask";
import userSlice, { authApi } from "../reducers/auth";
import collapseSlice from "../reducers/collapse/collapse";
import task, { tasksApi } from "../reducers/project/project";

const makeStore = () => {
  return configureStore({
    reducer: {
      collapse: collapseSlice,
      task: task,
      user: userSlice,
      [tasksApi.reducerPath]: tasksApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
      [addTaskApi.reducerPath]: addTaskApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(tasksApi.middleware),
  });
};
export const wrapper = createWrapper(makeStore, { debug: true });
