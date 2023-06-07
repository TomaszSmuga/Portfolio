import { Form } from "semantic-ui-react";
import React from "react";
import { Rando } from "./Form.styled";
import { useState } from "react";

interface CustomForm {
  value: boolean | undefined;
  onChange: (value: boolean) => void;
  src: string;
  label: string;
}

const CustomForm: React.FC<CustomForm> = ({ src, value, onChange, label }) => {
  return (
    <div className="task">
      <img src={src} alt="" />
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
  return Math.floor(Math.random() * 100000);
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
