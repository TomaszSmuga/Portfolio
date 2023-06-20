// import "../Matrix/matrix.css";
// import { useState } from "react";

// interface Square {
//   id: number;
//   select: boolean;
//   value: boolean;
// }

// interface RadioQuestionnaireProps {
//   onRadioChange: (select: number) => void;
//   title: string;
// }

// export const Matrix: React.FC = () => {
//   const [selected, setSelected] = useState<Square[]>([
//     {
//       id: 1,
//       select: false,
//       value: true,
//     },
//     {
//       id: 2,
//       select: false,
//       value: false,
//     },
//     {
//       id: 3,
//       select: false,
//       value: true,
//     },
//     {
//       id: 4,
//       select: false,
//       value: true,
//     },
//     {
//       id: 5,
//       select: false,
//       value: true,
//     },
//     {
//       id: 6,
//       select: false,
//       value: true,
//     },
//     {
//       id: 7,
//       select: false,
//       value: true,
//     },
//     {
//       id: 8,
//       select: false,
//       value: false,
//     },
//     {
//       id: 9,
//       select: false,
//       value: true,
//     },
//   ]);

//   const handleClick = (id: number) => {
//     const squares = selected.map((square) => ({
//       ...selected,
//       select: square.id === id,
//     }));
//     setSelected(squares);
//     const redSquare = selected.find((square) => square.id === id)?.value;
//   };

//   return (
//     <div className="grid">
//       {buttons.map((index) => (
//         <button onClick={() => handleClick(index)}></button>
//       ))}
//     </div>
//   );
// };
