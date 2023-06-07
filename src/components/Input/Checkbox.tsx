import { useState } from "react";
import { Form } from "semantic-ui-react";
import { StyledDiv } from "./Checkbox.styled";

interface Radio {
  id: number;
  label: string;
  checked: boolean;
}

export const RadioQuestionnaire: React.FC = () => {
  const [radios, setRadios] = useState<Radio[]>([
    { id: 1, label: "zdecydowanie się nie zgadzam", checked: false },
    { id: 2, label: "nie zgadzam się", checked: false },
    { id: 3, label: "Ani się zgadzam ani się nie zgadzam", checked: false },
    { id: 4, label: "zgadzam się", checked: false },
    { id: 5, label: "zdecydowanie się  zgadzam", checked: false },
  ]);

  const handleCheckbox = (id: number) => {
    const updatedItems = radios.map((radio) => ({
      ...radio,
      checked: radio.id === id,
    }));
    setRadios(updatedItems);
  };
  return (
    <>
      <StyledDiv>
        {radios.map((radio) => (
          <Form.Radio
            key={radio.id}
            label={radio.label}
            checked={radio.checked}
            onChange={() => handleCheckbox(radio.id)}
          />
        ))}
      </StyledDiv>
    </>
  );
};
