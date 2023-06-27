import "../Matrix/matrix.css";
import { useState, useEffect } from "react";
import { Square } from "./Generator";
interface TrueMatrixProps {
  squares: Square[];
}

export const TrueMatrix: React.FC<TrueMatrixProps> = () => {
  const [squares, setSquares] = useState([
    {
      id: 1,
      select: false,
      value: true,
    },
    {
      id: 2,
      select: false,
      value: false,
    },
    {
      id: 3,
      select: false,
      value: true,
    },
    {
      id: 4,
      select: false,
      value: true,
    },
    {
      id: 5,
      select: false,
      value: true,
    },
    {
      id: 6,
      select: false,
      value: true,
    },
    {
      id: 7,
      select: false,
      value: true,
    },
    {
      id: 8,
      select: false,
      value: false,
    },
    {
      id: 9,
      select: false,
      value: true,
    },
    {
      id: 10,
      select: false,
      value: true,
    },
    {
      id: 11,
      select: false,
      value: true,
    },
    {
      id: 12,
      select: false,
      value: true,
    },
    {
      id: 13,
      select: false,
      value: true,
    },
    {
      id: 14,
      select: false,
      value: true,
    },
    {
      id: 15,
      select: false,
      value: true,
    },
    {
      id: 16,
      select: false,
      value: true,
    },
  ]);
  useEffect(() => {
    const generateRandomSelect = () => {
      const updatedSquares: Square[] = [];
      const totalSquares = 16;
      const trueCount = 7;

      const trueIndices = new Set<number>();
      while (trueIndices.size < trueCount) {
        const randomIndex = Math.floor(Math.random() * totalSquares);
        trueIndices.add(randomIndex);
      }

      for (let i = 0; i < totalSquares; i++) {
        const select = trueIndices.has(i);
        updatedSquares.push({
          id: i + 1,
          select,
          value: true,
        });
      }

      setSquares(updatedSquares);
    };

    generateRandomSelect();
  }, []);

  return (
    <div className="grid">
      {squares.map((square) => (
        <div
          key={square.id}
          className={`${square.select ? "red" : "yellow"}`}></div>
      ))}
    </div>
  );
};
