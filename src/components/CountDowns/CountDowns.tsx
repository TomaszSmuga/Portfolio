import React, { useState, useEffect } from "react";
import { StyledCount } from "./CountDown.styled";
import { TrueMatrix } from "../Matrix/Matrix";
import "../Matrix/matrix.css";
import { Square } from "../Matrix/Generator";
import { useSelector } from "react-redux";

export interface TickerProps {
  seconds: number;
  imgLinks?: string[];
  imgIndex?: number;
  matrixToShow?: Square[];
  randomRotation?: number;
}

export const Ticker: React.FC<TickerProps> = ({
  seconds = 3,
  randomRotation,
}) => {
  const [time, setTime] = useState(seconds);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showTicker, setShowTicker] = useState(true);
  const squares = useSelector((state: { matrix: Square[] }) => state.matrix);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time <= 0) {
      clearInterval(timerId);
      setShowOverlay(true);
      setTimeout(() => {
        setShowOverlay(false);
      }, 325);
      setTimeout(() => {
        setShowTicker(false);
      }, -1);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [time]);

  return (
    <>
      <div className="taskImg ticker-grid">
        {showTicker && (
          <div>
            <StyledCount isZero={time === 0}>{time.toString()}</StyledCount>
          </div>
        )}
        <div style={{ transform: `rotate(${randomRotation}deg)` }}>
          {showOverlay && <TrueMatrix squares={squares} />}
        </div>
      </div>
    </>
  );
};
