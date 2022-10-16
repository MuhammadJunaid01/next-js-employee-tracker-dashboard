import { createSlice } from "@reduxjs/toolkit";

export const collapseSlice = createSlice({
  name: "collapse",
  initialState: {
    coollapse: false,
    isTimerRun: false,
  },
  reducers: {
    collapseMenu: (state, action) => {
      state.coollapse = !state.coollapse;
    },
    startTimeChecker: (state, action) => {
      console.log("action payload", action.payload);
      state.checker = action.payload;
    },
  },
});

export const { collapseMenu, startTimeChecker } = collapseSlice.actions;
export default collapseSlice.reducer;
