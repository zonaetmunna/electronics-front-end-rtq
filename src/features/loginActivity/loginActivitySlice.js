import { createSlice } from "@reduxjs/toolkit";

const loginActivitySlice = createSlice({
  name: "loginActivity",
  initialState: [],
  reducers: {
    addLoginActivity: (state, action) => {
      const { device, location } = action.payload;
      const newLoginActivity = { device, location, timestamp: Date.now() };
      state.unshift(newLoginActivity);
      if (state.length > 10) {
        state.pop();
      }
    },
  },
});

export const { addLoginActivity } = loginActivitySlice.actions;

export default loginActivitySlice.reducer;
