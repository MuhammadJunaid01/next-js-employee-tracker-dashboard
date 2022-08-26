import { createSlice } from "@reduxjs/toolkit";

export const collapseSlice = createSlice({
  name: "collapse",
  initialState: {
    coollapse: false,
  },
  reducers: {
    collapseMenu: (state, action) => {
      state.coollapse = !state.coollapse;
    },
  },
});

export const { collapseMenu } = collapseSlice.actions;
export default collapseSlice.reducer;
