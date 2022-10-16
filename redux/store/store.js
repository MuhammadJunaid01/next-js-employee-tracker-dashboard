import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { addTaskApi } from "../reducers/api/add-task/addTask";
import { applyForLeave } from "../reducers/api/apply-for-leave";
import userSlice, { authApi } from "../reducers/api/auth";
import collapseSlice from "../reducers/collapse/collapse";
import task, { tasksApi } from "../reducers/api/project/project";
import { screenShotAPi } from "../reducers/api/takescreenShot";

const makeStore = () => {
  return configureStore({
    reducer: {
      collapse: collapseSlice,
      task: task,
      user: userSlice,
      [tasksApi.reducerPath]: tasksApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
      [addTaskApi.reducerPath]: addTaskApi.reducer,
      [applyForLeave.reducerPath]: applyForLeave.reducer,
      [screenShotAPi.reducerPath]: screenShotAPi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(tasksApi.middleware),
  });
};
export const wrapper = createWrapper(makeStore, { debug: true });
