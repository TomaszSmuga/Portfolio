import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";

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

const selectStepState = (state: RootStateOrAny) => state.step;
export const selectInnerCurrentStep = createSelector(
  selectStepState,
  (step) => step.innerCurrentStep
);
