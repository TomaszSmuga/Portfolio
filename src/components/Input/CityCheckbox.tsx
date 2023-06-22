import { useState } from "react";
import { Container, Form, Radio } from "semantic-ui-react";
import "../formField/form.css";

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

export const CityCheckbox: React.FC<RadioQuestionnaireProps> = ({
  onRadioChange,
  title,
}) => {
  const [radios, setRadios] = useState<Radio[]>([
    {
      identification: 1,
      label: "Wieś",
      checked: false,
      value: 1,
    },
    {
      identification: 2,
      label: "Miasto do 50 000 mieszkańców",
      checked: false,
      value: 2,
    },
    {
      identification: 3,
      label: "Miasto od 50 000 do 100 000 mieszkańców",
      checked: false,
      value: 3,
    },
    {
      identification: 4,
      label: "Miasto od 100 000 do 500 000 mieszkańców",
      checked: false,
      value: 4,
    },
    {
      identification: 5,
      label: "Miasto powyżej 500 000 mieszkańców",
      checked: false,
      value: 5,
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
      <Container>
        <Container>
          <div className="socioInput">
            <h4>{title}</h4>
          </div>
          {radios.map((radio) => (
            <Form fluid>
              <Form.Field>
                <Form.Radio
                  key={radio.identification}
                  className={radio.checked ? "checkedBox" : "notchecked"}
                  label={radio.label}
                  checked={radio.checked}
                  onChange={() => handleCheckbox(radio.identification)}
                  value={radio.value}
                />
              </Form.Field>
            </Form>
          ))}
        </Container>
      </Container>
    </>
  );
};
