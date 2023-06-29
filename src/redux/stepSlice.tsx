import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StepState {
  innerCurrentStep: number;
}

const stepSlice = createSlice({
  name: "step",
  initialState: { innerCurrentStep: 0 },
  reducers: {
    updateCurrentStep: (state: StepState, action: PayloadAction<number>) => {
      state.innerCurrentStep = action.payload;
    },
  },
});

export const { updateCurrentStep } = stepSlice.actions;
export default stepSlice.reducer;
