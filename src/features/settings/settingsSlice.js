import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewMode: "grid", // Initial view mode
  darkMode: false, // Initial dark mode setting
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setViewMode, toggleDarkMode } = settingsSlice.actions;

export default settingsSlice.reducer;
