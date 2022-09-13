import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { authApi } from "../reducers/auth";
import collapseSlice from "../reducers/collapse/collapse";
import task from "../reducers/tasks/task";

const makeStore = () => {
  return configureStore({
    reducer: {
      collapse: collapseSlice,
      task: task,
      [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
  });
};
export const wrapper = createWrapper(makeStore, { debug: true });
