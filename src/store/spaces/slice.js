import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spaces: null,
  spaceWithStories: null,
  me: null,
};

export const spacesSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    setSpaces: (state, action) => {
      if (state.spaces) {
        state.spaces = [...state.spaces, action.payload];
      } else {
        state.spaces = action.payload;
      }
    },
    setSpaceWithStories: (state, action) => {
      state.spaceWithStories = action.payload;
    },
    setMe: (state, action) => {
      state.me = action.payload;
    },
  },
});

export const { setSpaces, setSpaceWithStories, setMe } = spacesSlice.actions;

export default spacesSlice.reducer;
