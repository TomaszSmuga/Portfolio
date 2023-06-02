import { TaskImg } from "./Task.styled";
import React, { useState, useEffect } from "react";

const Task1: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 1000);

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

export { Task1 };
