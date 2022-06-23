import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spaces: null,
  spaceWithStories: null,
};

export const spacesSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    setSpaces: (state, action) => {
      state.spaces = action.payload;
      //   console.log("Slice", action.payload);
    },
    setSpaceWithStories: (state, action) => {
      state.spaceWithStories = action.payload;
    },
  },
});

export const { setSpaces, setSpaceWithStories } = spacesSlice.actions;

export default spacesSlice.reducer;
