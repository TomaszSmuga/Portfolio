import "../Matrix/matrix.css";
import { useState } from "react";

export const Matrix: React.FC = () => {
  const [selected, setSelected] = useState(false);

  const buttons = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div className="grid">
      {buttons.map((index) => (
        <button onClick={() => handleClick(index)}></button>
      ))}
    </div>
  );
};
