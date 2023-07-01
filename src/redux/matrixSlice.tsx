import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Square } from "../components/Matrix/Generator";

const matrixSlice = createSlice({
  name: "matrix",
  initialState: [] as Square[],
  reducers: {
    setMatrix: (_, action: PayloadAction<Square[]>) => {
      return action.payload;
    },
  },
});

export const { setMatrix } = matrixSlice.actions;
export default matrixSlice.reducer;
