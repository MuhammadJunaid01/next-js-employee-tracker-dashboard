import { createSlice } from "@reduxjs/toolkit";

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

export const { taskControll } = taskeSlice.actions;
export default taskeSlice.reducer;
