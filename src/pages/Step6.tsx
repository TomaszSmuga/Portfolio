import { FC, useEffect, useState } from "react";
import { Step6Task } from "../pages/Step6Task";
import { Ticker } from "../components/CountDowns/CountDowns";
import { ImgLinks } from "../Utilities/Link";
import React from "react";

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
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const ans = [];
    for (let i = 0; i < STEP_NUMBER; i++) {
      ans.push({ questionNumber: i, answer: undefined } as Step6Option);
    }
    setAnswers(ans);
  }, []);

  useEffect(() => {
    onInnerCurrentStepChange(innerCurrentStep);
  }, [innerCurrentStep]);

  useEffect(() => {
    let timer: number;

    if (showOverlay) {
      timer = setTimeout(() => {
        setShowOverlay(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showOverlay]);

  const handleStep6TaskChange = (value: Step6Option): void => {
    const updatedAnswers = answers.map((ans) =>
      ans.questionNumber === value.questionNumber ? value : ans
    );
    setAnswers(updatedAnswers);
    onAnswersChange(updatedAnswers);
  };

  const handleNextStep = (): void => {
    setInnerCurrentStep((prev) => prev + 1);
    setShowOverlay(true);
  };

  const currentStep = answers[innerCurrentStep];

  return (
    <>
      {answers.map((answer, index) => (
        <React.Fragment key={index}>
          {index === innerCurrentStep && (
            <>
              {showOverlay && (
                <Ticker seconds={3} imgLinks={ImgLinks} imgIndex={0} />
              )}
              <div>Current Step: {index}</div>
              <Step6Task
                data={answer}
                onChange={handleStep6TaskChange}
                checkedIndex={innerCurrentStep}
              />
            </>
          )}
        </React.Fragment>
      ))}
      <button
        onClick={handleNextStep}
        disabled={innerCurrentStep === answers.length}>
        Dalej
      </button>
    </>
  );
};
