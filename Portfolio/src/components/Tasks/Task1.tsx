import { TaskImg } from "./Task.styled";
import React, { useState, useEffect } from "react";

export const Task1: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 900);

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

export const Task2: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 900);

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

export const Task3: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 900);

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

export const Task4: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 900);

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
    }, 900);

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

export const Task6: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 900);

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
