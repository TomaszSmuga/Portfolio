import { TaskImg } from "./Task.styled";
import React, { useState, useEffect } from "react";
import { Ticker } from "../CountDowns/CountDowns";
import { ImgLinks } from "../../Utilities/Link";
interface CountDown {
  seconds: number;
}

export const Task1: React.FC<CountDown> = () => {
  return (
    <>
      <Ticker seconds={3} imgLinks={ImgLinks} imgIndex={0} />
    </>
  );
};

export const Task2: React.FC = () => {
  const [showOverlay1, setShowOverlay1] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay1(false);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <TaskImg>
        {showOverlay1 && (
          <div>
            <img
              src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/4.jpg"
              alt=""
            />
          </div>
        )}
      </TaskImg>
    </>
  );
};

export const Task3: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <TaskImg>
        {showOverlay && (
          <div>
            <img
              src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/5.jpg"
              alt=""
            />
          </div>
        )}
      </TaskImg>
    </>
  );
};

export const Task4: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <TaskImg>
        {showOverlay && (
          <div>
            <img
              src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/7.jpg"
              alt=""
            />
          </div>
        )}
      </TaskImg>
    </>
  );
};

export const Task5: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <TaskImg>
        {showOverlay && (
          <div>
            <img
              src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/9.jpg"
              alt=""
            />
          </div>
        )}
      </TaskImg>
    </>
  );
};

export const Task6: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <TaskImg>
        {showOverlay && (
          <div>
            <img
              src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/11.jpg"
              alt=""
            />
          </div>
        )}
      </TaskImg>
    </>
  );
};
