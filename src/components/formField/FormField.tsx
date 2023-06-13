import { ChangeEvent } from "react";

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
      <form action="">
        <label>{label}</label>
        <input
          placeholder={`Tutaj wpisz swój ${placeholder}`}
          onChange={handleInputChange}
          value={value}
        />
      </form>
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
      <form action="">
        <label>{label}</label>
        <input
          placeholder={`Tutaj wpisz ${placeholder}`}
          onChange={handleInputChange}
          value={value}
        />
      </form>
    </>
  );
};
