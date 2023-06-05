import { useState, useEffect } from "react";
import { TaskImg } from "../Tasks/Task.styled";
import { Count } from "./CountDown.styled";

interface CountDown {
  seconds: number;
}

export const Ticker = ({ seconds = 3 }: CountDown): JSX.Element => {
  const [time, setTime] = useState<CountDown>({ seconds });
  const [showOverlay, setShowOverlay] = useState(false);
  const [countdownFinished, setCountdownFinished] = useState(false);

  const tick = () => {
    if (time.seconds === 0) {
      setTime({ ...time, seconds: 0 });
      setCountdownFinished(true);
    } else {
      setTime((prevTime) => ({
        ...prevTime,
        seconds: prevTime.seconds - 1,
      }));
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (countdownFinished) {
      const timeOut = setTimeout(() => {
        setShowOverlay(true);
      }, 400);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [countdownFinished]);

  return (
    <>
      <div>
        <Count>{`${time.seconds.toString()}`}</Count>
      </div>
      <TaskImg>
        {showOverlay && (
          <div>
            <img
              src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/16.jpg"
              alt=""
            />
          </div>
        )}
      </TaskImg>
    </>
  );
};
