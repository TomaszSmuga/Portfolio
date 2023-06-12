import { useState } from "react";
import { Form } from "semantic-ui-react";
import { StyledDiv, Wrapper, JustDiv } from "./Checkbox.styled";

interface Radio {
  identification: number;
  label: string;
  checked: boolean;
  value: number;
}
interface RadioQuestionnaireProps {
  onRadioChange: (value: number) => void;
  title: string;
}

export const RadioQuestionnaire: React.FC<RadioQuestionnaireProps> = ({
  onRadioChange,
  title,
}) => {
  const [radios, setRadios] = useState<Radio[]>([
    {
      identification: 1,
      label: "zdecydowanie się nie zgadzam",
      checked: false,
      value: 1,
    },
    { identification: 2, label: "nie zgadzam się", checked: false, value: 2 },
    {
      identification: 3,
      label: "Raczej się nie zgadzam",
      checked: false,
      value: 3,
    },
    {
      identification: 4,
      label: "Ani się zgadzam ani się nie zgadzam",
      checked: false,
      value: 4,
    },
    {
      identification: 5,
      label: "Raczej się zgadzam",
      checked: false,
      value: 5,
    },
    {
      identification: 6,
      label: "Zgadzam się",
      checked: false,
      value: 6,
    },
    {
      identification: 7,
      label: "Zdecydowanie się  zgadzam",
      checked: false,
      value: 7,
    },
  ]);

  const handleCheckbox = (identification: number) => {
    const updatedItems = radios.map((radio) => ({
      ...radio,
      checked: radio.identification === identification,
    }));
    setRadios(updatedItems);
    const selectedValue = radios.find(
      (radio) => radio.identification === identification
    )?.value;
    if (selectedValue !== undefined) {
      onRadioChange(selectedValue);
    }
  };
  return (
    <>
      <Wrapper>
        <div>
          <h4>{title}</h4>
        </div>

        <StyledDiv>
          {radios.map((radio) => (
            <JustDiv>
              <Form.Radio
                key={radio.identification}
                label={radio.label}
                checked={radio.checked}
                onChange={() => handleCheckbox(radio.identification)}
                value={radio.value}
              />
            </JustDiv>
          ))}
        </StyledDiv>
      </Wrapper>
    </>
  );
};
