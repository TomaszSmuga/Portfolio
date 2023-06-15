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

export const EducationCheckbox: React.FC<RadioQuestionnaireProps> = ({
  onRadioChange,
  title,
}) => {
  const [radios, setRadios] = useState<Radio[]>([
    {
      identification: 1,
      label: "podstawowe",
      checked: false,
      value: 1,
    },
    {
      identification: 2,
      label: "średnie",
      checked: false,
      value: 2,
    },
    {
      identification: 3,
      label: "policealne",
      checked: false,
      value: 3,
    },
    {
      identification: 4,
      label: "wyższe",
      checked: false,
      value: 4,
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
        <StyledDiv>
          <div>
            <h4>{title}</h4>
          </div>
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
