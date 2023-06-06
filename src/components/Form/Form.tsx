import { Form } from "semantic-ui-react";
import React from "react";
import { Rando } from "./Form.styled";
import { useState } from "react";

interface CustomForm {
  currentStep: number | boolean;
  imgLinks: string[];
  checked: boolean | null;
  onChange: (value: boolean) => void;
}

const CustomForm: React.FC<CustomForm> = ({
  currentStep,
  imgLinks,
  checked,
  onChange,
}) => {
  return (
    <Form.Field>
      {currentStep === 2 && (
        <>
          <div className="tasks">
            <div className="task">
              <img src={imgLinks[0]} alt="" />
              <Form.Checkbox
                label="Wybór 1"
                checked={checked === true}
                onChange={() => onChange(true)}
              />
            </div>
            <div className="task">
              <img src={imgLinks[1]} alt="" />
              <Form.Checkbox
                label="Wybór 2"
                checked={checked === false}
                onChange={() => onChange(false)}
              />
            </div>
          </div>
        </>
      )}
    </Form.Field>
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
