import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import collapseSlice from "../reducers/collapse/collapse";

const makeStore = () => {
  return configureStore({
    reducer: {
      collapse: collapseSlice,
    },
  });
};
export const wrapper = createWrapper(makeStore, { debug: true });
