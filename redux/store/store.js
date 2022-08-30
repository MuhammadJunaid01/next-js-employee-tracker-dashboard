import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import collapseSlice from "../reducers/collapse/collapse";
import task from "../reducers/tasks/task";

const makeStore = () => {
  return configureStore({
    reducer: {
      collapse: collapseSlice,
      task: task,
    },
  });
};
export const wrapper = createWrapper(makeStore, { debug: true });
