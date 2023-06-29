import { configureStore } from "@reduxjs/toolkit";
import matrixSlice from "./matrixSlice";
import stepSlice from "./stepSlice";

export const store = configureStore({
  reducer: {
    matrix: matrixSlice,
    step: stepSlice.reducer,
  },
});
