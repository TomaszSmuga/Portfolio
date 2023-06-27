import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  squares: [],
};

const squaresSlice = createSlice({
  name: "squares",
  initialState,
  reducers: {
    updateSquares: (state, action) => {
      state.squares = action.payload;
    },
  },
});

export const { updateSquares } = squaresSlice.actions;
export default squaresSlice.reducer;
