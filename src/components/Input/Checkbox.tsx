import { useState } from "react";
import { Form } from "semantic-ui-react";
import { StyledDiv } from "./Checkbox.styled";

interface Radio {
  id: number;
  label: string;
  checked: boolean;
  value: number;
}
interface RadioQuestionnaireProps {
  onRadioChange: (value: number) => void;
}

export const RadioQuestionnaire: React.FC<RadioQuestionnaireProps> = ({
  onRadioChange,
}) => {
  const [radios, setRadios] = useState<Radio[]>([
    { id: 1, label: "zdecydowanie się nie zgadzam", checked: false, value: 1 },
    { id: 2, label: "nie zgadzam się", checked: false, value: 2 },
    {
      id: 3,
      label: "Ani się zgadzam ani się nie zgadzam",
      checked: false,
      value: 3,
    },
    { id: 4, label: "zgadzam się", checked: false, value: 4 },
    { id: 5, label: "zdecydowanie się  zgadzam", checked: false, value: 5 },
  ]);

  const handleCheckbox = (id: number) => {
    const updatedItems = radios.map((radio) => ({
      ...radio,
      checked: radio.id === id,
    }));
    setRadios(updatedItems);
    const selectedValue = radios.find((radio) => radio.id === id)?.value;
    if (selectedValue !== undefined) {
      onRadioChange(selectedValue);
    }
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
            value={radio.value}
          />
        ))}
      </StyledDiv>
    </>
  );
};
