import React, { useEffect } from "react";
import "../Matrix/matrix.css";
import { Square } from "./Generator";
import { useDispatch } from "react-redux";
import { setMatrix } from "../../redux/matrixSlice";

interface TrueMatrixProps {
  squares: Square[];
}

export const TrueMatrix: React.FC<TrueMatrixProps> = ({ squares }) => {
  const dispatch = useDispatch();

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

      dispatch(setMatrix(updatedSquares));
    };

    generateRandomSelect();
  }, [dispatch]);

  return (
    <div className="grid">
      {squares.map((square) => (
        <div
          key={square.id}
          className={`square ${square.select ? "red" : "yellow"}`}></div>
      ))}
    </div>
  );
};
