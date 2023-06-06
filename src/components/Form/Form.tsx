import { Form } from "semantic-ui-react";
import React from "react";
import { Rando } from "./Form.styled";
import { useState } from "react";

interface CustomForm {
  imgLinks?: string;
  value: boolean | undefined;
  onChange: (value: boolean) => void;
  src: string;
}

const CustomForm: React.FC<CustomForm> = ({ src, value }) => {
  return (
    <>
      <div className="task">
        <img src={src} />
        <Form.Checkbox
          label="Wybór 1"
          checked={value}
          //   onChange={() => onChange()}
        />
      </div>
    </>
  );
};

export default CustomForm;

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100000);
};

export const Randomizer = () => {
  const [random, setRandom] = useState(generateRandomNumber());

  return (
    <>
      <Rando>
        <h1> Przykładowe Id</h1>
        <h2>{random.toString()}</h2>
      </Rando>
    </>
  );
};
