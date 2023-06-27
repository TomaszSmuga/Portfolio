import React, { useState, useEffect } from "react";
import { StyledCount } from "./CountDown.styled";
import { TrueMatrix } from "../Matrix/Matrix";
import "../Matrix/matrix.css";
import { Square } from "../Matrix/Generator";
import { Provider, useSelector } from "react-redux";
import { store } from "../../redux/store";
interface TickerProps {
  seconds: number;
  imgLinks: string[];
  imgIndex: number;
  matrixToShow: Square[];
}

export const Ticker: React.FC<TickerProps> = ({
  seconds = 3,
  matrixToShow,
}) => {
  const [time, setTime] = useState(seconds);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showTicker, setShowTicker] = useState(true);
  const squares = useSelector((state) => state.squares.squares);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time <= 0) {
      clearInterval(timerId);
      setShowOverlay(true);
      setTimeout(() => {
        setShowOverlay(false);
      }, 400);
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
      <Provider store={store}>
        <div className="taskImg ticker-grid">
          {showTicker && (
            <div>
              <StyledCount isZero={time === 0}>{time.toString()}</StyledCount>
            </div>
          )}
          {showOverlay && (
            <div>
              <TrueMatrix squares={squares} />
            </div>
          )}
        </div>
      </Provider>
    </>
  );
};
