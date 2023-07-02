import { useState, useEffect } from "react";
import { Container, Form, Radio } from "semantic-ui-react";

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
      label: "Zdecydowanie się nie zgadzam",
      checked: false,
      value: 1,
    },
    { identification: 2, label: "Nie zgadzam się", checked: false, value: 2 },
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
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setRenderCount((prevCount) => prevCount + 1);
    }, 0);
  }, []);

  useEffect(() => {
    console.log("Default State:", radios);
  }, []);

  const handleCheckbox = (index: number) => {
    const updatedItems = radios.map((radio, i) => ({
      ...radio,
      checked: i === index,
    }));
    setRadios(updatedItems);
    const selectedValue = radios[index].value;
    onRadioChange(selectedValue);
    console.log(updatedItems[index].checked);
  };
  useEffect(() => {
    setRadios((prevState) => prevState); // Update state to trigger re-render
  }, []);
  return (
    <>
      <Container>
        <div className="socioInput">
          <h4>{title}</h4>
        </div>

        {radios.map((radio) => (
          <Form key={radio.identification}>
            <Form.Field>
              <Form.Radio
                className={radio.checked ? "checkedBox" : "notchecked"}
                label={radio.label}
                checked={radio.checked}
                onChange={() => handleCheckbox(radios.indexOf(radio))}
                value={radio.value}
              />
            </Form.Field>
          </Form>
        ))}
      </Container>
    </>
  );
};
