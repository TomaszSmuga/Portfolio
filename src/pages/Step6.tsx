import React, { FC, useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { Square } from "../components/Matrix/Generator";
import { ImgLinks } from "../Utilities/Link";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../redux/stepSlice";
import { Ticker } from "../components/CountDowns/CountDowns";
import { Step6Task } from "./Step6Task";
import { useSelector } from "react-redux";
import { selectInnerCurrentStep } from "../redux/stepSlice";
import { DistractingMatrices } from "../components/Matrix/DistractingMatrices";
type Step6Props = {
  onInnerCurrentStepChange: (value: number) => void;
  onAnswersChange: (answers: Step6Option[]) => void;
  stepNumber: number;
};

export interface Step6Option {
  questionNumber: number;
  answer: boolean | undefined;
  matrixToShow: Square[];
  time?: number;
}

const getRandomRotation = () => {
  const rotationArray = [90, 180, 270];
  const randomIndex = Math.floor(Math.random() * rotationArray.length);
  return rotationArray[randomIndex];
};

export const Step6: FC<Step6Props> = ({
  onInnerCurrentStepChange,
  onAnswersChange,
  stepNumber,
}) => {
  const [answers, setAnswers] = useState<Step6Option[]>([]);
  const [showOverlay, setShowOverlay] = useState(true);
  const [squares] = useState<Square[]>([]);
  const [showButton, setShowButton] = useState(true);
  const [startTime, setStartTime] = useState<number | null>(null);
  const dispatch = useDispatch();

  const innerCurrentStep = useSelector(selectInnerCurrentStep);

  useEffect(() => {
    const ans = [];
    for (let i = 0; i < stepNumber; i++) {
      ans.push({
        questionNumber: i,
        answer: undefined,
        matrixToShow: [],
        time: 0,
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
      }, 11500);
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
    setStartTime(performance.now());
    const endTime = performance.now();
    const elapsedTime = endTime - (startTime || 0);
    const updatedAnswers = answers.map((ans) =>
      ans.questionNumber === innerCurrentStep
        ? { ...ans, time: elapsedTime }
        : ans
    );
    setAnswers(updatedAnswers);
    onAnswersChange(updatedAnswers);
    setShowOverlay(true);
    dispatch(updateCurrentStep(innerCurrentStep + 1));
    setStartTime(null);
    console.log(startTime);
    console.log(endTime);
    console.log(elapsedTime);
  };

  useEffect(() => {
    if (innerCurrentStep == stepNumber - 1) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [stepNumber, innerCurrentStep]);

  const isAnswearSelected = answers[innerCurrentStep]?.answer === undefined;
  const randomRotation = getRandomRotation();

  return (
    <>
      {answers.map((answer, index) => (
        <React.Fragment key={index}>
          {index === innerCurrentStep && (
            <>
              {showOverlay && (
                <>
                  <Ticker
                    seconds={3}
                    imgLinks={ImgLinks}
                    imgIndex={0}
                    matrixToShow={squares}
                    randomRotation={randomRotation}
                  />
                  <DistractingMatrices />
                </>
              )}
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
            disabled={isAnswearSelected}>
            Dalej
          </Button>
        )}
      </div>
    </>
  );
};
