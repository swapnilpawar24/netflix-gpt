import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    PreferredLanguage: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.PreferredLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;
