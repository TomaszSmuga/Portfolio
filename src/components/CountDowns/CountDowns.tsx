import { useState, useEffect } from "react";
import { TaskImg } from "../Tasks/Task.styled";
import { StyledCount } from "./CountDown.styled";
import { ImgLinks } from "../../Utilities/Link";
interface CountDown {
  seconds: number;
  imgLinks: string[];
  imgIndex: number;
}

export const Ticker = ({
  seconds = 3,
  imgLinks,
  imgIndex,
}: CountDown): JSX.Element | null => {
  const [time, setTime] = useState<CountDown>({ seconds, imgLinks, imgIndex });
  const [showOverlay, setShowOverlay] = useState(false);
  const [showTicker, setShowTicker] = useState(true);
  const tick = () => {
    setTime((prevTime) => ({
      ...prevTime,
      seconds: prevTime.seconds - 1,
    }));
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      tick();
    }, 1000);

    let timeoutId: number;
    let ticker: number;

    if (time.seconds <= 0) {
      clearInterval(timerId);
      setShowOverlay(true);
      timeoutId = setTimeout(() => {
        setShowOverlay(false);
      }, 400);
      ticker = setTimeout(() => {
        setShowTicker(false);
      }, -1);
    }
    return () => {
      clearTimeout(timeoutId);
      clearInterval(timerId);
      clearTimeout(ticker);
    };
  }, [time.seconds]);

  return (
    <>
      <TaskImg>
        {showTicker && (
          <div>
            <StyledCount
              isZero={
                time.seconds === 0
              }>{`${time.seconds.toString()}`}</StyledCount>
          </div>
        )}

        {showOverlay && (
          <div>
            <img src={ImgLinks[imgIndex]} alt="" />
          </div>
        )}
      </TaskImg>
    </>
  );
};
