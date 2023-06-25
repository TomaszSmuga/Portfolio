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

  //   useEffect(() => {
  //     setInnerCurrentStep((prev) => {
  //       const newValue = prev++;
  //       onInnerCurrentStepChange(newValue);
  //       return newValue;
  //     });
  //   }, []);

  useEffect(() => {
    onInnerCurrentStepChange(innerCurrentStep);
  }, [innerCurrentStep]);

  const handleStep6TaskChange = (value: Step6Option): void => {
    const foundAnswer = answers.find(
      (ans) => ans.questionNumber == value.questionNumber
    );
    if (foundAnswer) {
      foundAnswer.answer = value.answer;
    }
    setAnswers(answers);
    onAnswersChange(answers);
  };

  const handleNextStep = (): void => {
    setInnerCurrentStep((prev) => prev + 1);
  };

  const handlePrevtStep = (): void => {
    setInnerCurrentStep((prev) => prev - 1);
  };

  const currentStep = answers[innerCurrentStep];
  /**
   * tutaj musimy wygenerowac Step6 x 90
   * pytanie - jak zapisac stany 90x odp??
   */
  return (
    <>
      {answers.length}
      {answers.map((ans, index) => {
        // generujesz komponent pojedynczo
        return (
          <>
            <Container>
              <Step6Task
                key={index}
                data={currentStep}
                onChange={handleStep6TaskChange}
              />

              <button
                onClick={handlePrevtStep}
                disabled={innerCurrentStep === 0}>
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

        // uzyj innerCurrentStep do generowania przycisku 'dalej' lub 'wstecz'
      })}
    </>
  );
};
