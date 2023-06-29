import React, { FC, useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { Square } from "../components/Matrix/Generator";
import { ImgLinks } from "../Utilities/Link";
import { useDispatch } from "react-redux";
import { Ticker } from "../components/CountDowns/CountDowns";
import { Step6Task } from "./Step6Task";
import { updateCurrentstep } from "../redux/stepSlice/";

type Step6Props = {
  onInnerCurrentStepChange: (value: number) => void;
  onAnswersChange: (answers: Step6Option[]) => void;
  stepNumber: number;
};

export interface Step6Option {
  questionNumber: number;
  answer: boolean | undefined;
  matrixToShow: Square[];
}

export const Step6: FC<Step6Props> = ({
  onInnerCurrentStepChange,
  onAnswersChange,
  stepNumber,
}) => {
  const [innerCurrentStep, setInnerCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Step6Option[]>([]);
  const [showOverlay, setShowOverlay] = useState(true);
  const [squares] = useState<Square[]>([]);
  const [showButton, setShowButton] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const ans = [];
    for (let i = 0; i < stepNumber; i++) {
      ans.push({
        questionNumber: i,
        answer: undefined,
        matrixToShow: [],
      } as Step6Option);
    }
    setAnswers(ans);
  }, [stepNumber]);

  useEffect(() => {
    onInnerCurrentStepChange(innerCurrentStep);
  }, [innerCurrentStep, onInnerCurrentStepChange]);

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
    setShowOverlay(true);
    setInnerCurrentStep((prev) => prev + 1);
    console.log(stepNumber);
  };

  const handlePrevStep = (): void => {
    setInnerCurrentStep((prev) => prev - 1);
    console.log(stepNumber);
  };

  useEffect(() => {
    if (innerCurrentStep == stepNumber - 1) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [stepNumber, innerCurrentStep]);

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
      <div>
        {showButton && (
          <Button
            size="huge"
            color="blue"
            onClick={handleNextStep}
            disabled={innerCurrentStep === answers.length}>
            Dalej
          </Button>
        )}
      </div>

      <Button onClick={handlePrevStep}>Wstecz</Button>
    </>
  );
};
