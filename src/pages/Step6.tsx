import React, { FC, useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { ImgLinks } from "../Utilities/Link";

import { Ticker } from "../components/CountDowns/CountDowns";
import { Square } from "../components/Matrix/Generator";
import { Step6Task } from "./Step6Task";

type Step6Props = {
  onInnerCurrentStepChange: (value: number) => void;
  onAnswersChange: (answers: Step6Option[]) => void;
};

export interface Step6Option {
  questionNumber: number;
  answer: boolean | undefined;
  matrixToShow: Square[]; // Add matrixToShow to Step6Option
}

const STEP_NUMBER = 5;

export const Step6: FC<Step6Props> = ({
  onInnerCurrentStepChange,
  onAnswersChange,
}) => {
  const [innerCurrentStep, setInnerCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Step6Option[]>([]);
  const [showOverlay, setShowOverlay] = useState(true);
  const [squares, setSquares] = useState<Square[]>([]);

  useEffect(() => {
    const ans = [];
    for (let i = 0; i < STEP_NUMBER; i++) {
      ans.push({
        questionNumber: i,
        answer: undefined,
        matrixToShow: [],
      } as Step6Option);
    }
    setAnswers(ans);
  }, []);

  useEffect(() => {
    onInnerCurrentStepChange(innerCurrentStep);
  }, [innerCurrentStep]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

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

  return (
    <>
      {answers.map((answer, index) => (
        <React.Fragment key={index}>
          {index === innerCurrentStep && (
            <>
              {showOverlay && (
                <Ticker
                  seconds={3}
                  imgLinks={ImgLinks}
                  imgIndex={0}
                  matrixToShow={squares}
                />
              )}
              <div>Current Step: {index}</div>
              <Step6Task data={answer} onChange={handleStep6TaskChange} />
            </>
          )}
        </React.Fragment>
      ))}
      <Button
        size="huge"
        color="blue"
        onClick={handleNextStep}
        disabled={innerCurrentStep === answers.length}>
        Dalej
      </Button>
    </>
  );
};
