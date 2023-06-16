import { ChangeEvent } from "react";
import { Form, Input, Container } from "semantic-ui-react";
import "../formField/form.css";

interface SocioEconomicFormProps {
  placeholder: string;
  label: string;
  onChange: (value: string) => void;
  value: string;
  onRadioChange?: (value: number) => void;
}

export const SocioEconomicFormNumbers: React.FC<SocioEconomicFormProps> = ({
  placeholder,
  onChange,
  value,
  label,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    onChange(numericValue);
  };
  return (
    <>
      <Form>
        <Form.Field>
          <label>{label}</label>
          <Input
            placeholder={`Tutaj wpisz swój ${placeholder}`}
            onChange={handleInputChange}
            value={value}
          />
        </Form.Field>
      </Form>
    </>
  );
};

export const SocioEconomicForm: React.FC<SocioEconomicFormProps> = ({
  onChange,
  value,
  placeholder,
  label,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    onChange(inputValue);
  };
  return (
    <>
      <Container className="Input">
        <Form.Field required={true} width={5}>
          <label>{label}</label>
          <Input
            placeholder={`Tutaj wpisz ${placeholder}`}
            onChange={handleInputChange}
            value={value}
          />
        </Form.Field>
      </Container>
    </>
  );
};
