import { createSlice } from "@reduxjs/toolkit";
const stepSlice = createSlice({
  name: "step",
  initialState: { innerCurrentStep: 0 },
  reducers: {
    updateCurrentStep: (state, action) => {
      state.innerCurrentStep = action.payload;
    },
  },
});

export default stepSlice;
