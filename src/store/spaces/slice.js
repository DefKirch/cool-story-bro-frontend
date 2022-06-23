import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spaces: null,
};

export const spacesSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    setSpaces: (state, action) => {
      state.spaces = action.payload;
      //   console.log("Slice", action.payload);
    },
  },
});

export const { setSpaces } = spacesSlice.actions;

export default spacesSlice.reducer;
