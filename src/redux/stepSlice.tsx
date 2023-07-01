import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectStepState = (state: any) => state.step;
export const selectInnerCurrentStep = createSelector(
  selectStepState,
  (step) => step.innerCurrentStep
);
