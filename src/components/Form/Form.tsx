import { Form } from "semantic-ui-react";
import React from "react";
import { Rando } from "./Form.styled";
import { useState } from "react";

interface CustomFormProps {
  value: boolean | undefined;
  onChange: (value: boolean) => void;
  src: string;
  label: string;
}
const getRandomRotation = () => {
  const rotationArray = [90, 180, 270, 360];
  const randomIndex = Math.floor(Math.random() * rotationArray.length);
  return rotationArray[randomIndex];
};

const CustomForm: React.FC<CustomFormProps> = ({
  src,
  value,
  onChange,
  label,
}) => {
  const [random] = useState(getRandomRotation);

  return (
    <div className="task">
      <img src={src} alt="" style={{ transform: `rotate(${random}deg)` }} />
      <Form.Checkbox
        checked={value}
        onChange={() => onChange(!value)}
        label={label}
      />
    </div>
  );
};

export default CustomForm;

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 1000000);
};

export const Randomizer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [random] = useState(generateRandomNumber());

  return (
    <>
      <Rando>
        <h1> Przykładowe Id</h1>
        <h2>{random.toString()}</h2>
      </Rando>
    </>
  );
};
