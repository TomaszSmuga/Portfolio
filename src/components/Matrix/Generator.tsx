import "../Matrix/matrix.css";
import { useState, useEffect } from "react";

export interface Square {
  id: number;
  select: boolean;
  value: boolean;
}
export interface GeneratorProps {
  onGenerate: (squares: Square[]) => void;
}

const Generator: React.FC<GeneratorProps> = ({ onGenerate }) => {
  const [squares, setSquares] = useState<Square[]>([]);

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
      onGenerate(updatedSquares);
    };

    generateRandomSelect();
  }, [onGenerate]);

  return (
    <>
      <div className="grid">
        {squares.map((square) => (
          <div
            key={square.id}
            className={`${square.select ? "red" : "yellow"}`}></div>
        ))}
      </div>
    </>
  );
};

export default Generator;
