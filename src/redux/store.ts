import { configureStore } from "@reduxjs/toolkit";
import squaresReducer from "./reduxSlice";

export const store = configureStore({
  reducer: {
    squares: squaresReducer,
  },
});
