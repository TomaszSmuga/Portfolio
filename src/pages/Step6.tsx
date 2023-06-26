import { FC, useEffect, useState } from "react";
import { Step6Task } from "../pages/Step6Task";
import { Container } from "semantic-ui-react";

type Step6Props = {
  onInnerCurrentStepChange: (value: number) => void;
  onAnswersChange: (answers: Step6Option[]) => void;
};

export interface Step6Option {
  questionNumber: number;
  answer: boolean | undefined;
}

const STEP_NUMBER = 90;

export const Step6: FC<Step6Props> = ({
  onInnerCurrentStepChange,
  onAnswersChange,
}) => {
  const [innerCurrentStep, setInnerCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Step6Option[]>([]);

  useEffect(() => {
    const ans = [];
    for (let i = 0; i < STEP_NUMBER; i++) {
      ans.push({ questionNumber: i, answer: true } as Step6Option);
    }
    setAnswers(ans);
  }, []);

  useEffect(() => {
    setInnerCurrentStep((prev) => {
      const newValue = prev++;
      onInnerCurrentStepChange(newValue);
      return newValue;
    });
  }, []);

  useEffect(() => {
    onInnerCurrentStepChange(innerCurrentStep);
  }, []);

  const handleStep6TaskChange = (value: Step6Option): void => {
    const updatedAnswers = answers.map((ans) =>
      ans.questionNumber === value.questionNumber ? value : ans
    );
    setAnswers(updatedAnswers);
    onAnswersChange(updatedAnswers);
  };

  const handleNextStep = (): void => {
    setInnerCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (): void => {
    setInnerCurrentStep((prev) => prev - 1);
  };

  const currentStep = answers[innerCurrentStep];

  return (
    <>
      <Container>
        <Step6Task
          data={currentStep}
          onChange={handleStep6TaskChange}
          checkedIndex={innerCurrentStep}
        />
        <button onClick={handlePrevStep} disabled={innerCurrentStep === 0}>
          Wstecz
        </button>
        <button
          onClick={handleNextStep}
          disabled={innerCurrentStep === answers.length - 1}>
          Dalej
        </button>
      </Container>
    </>
  );
};
