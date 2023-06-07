import { useState } from "react";
import { Radio, RadioProps } from "semantic-ui-react";

interface Questionnaire {
  label?: string;
  value?: number;
  name?: string;
  checked: number | boolean;
  onChange?: (value: number) => void;
}

export const RadioQuestionnaire: React.FC<Questionnaire> = ({
  label,
  value,
  name,
  onChange,
}) => {
  const [checked, setChecked] = useState<number | undefined>(value);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement & HTMLInputElement>,
    data: RadioProps
  ) => {
    const newValue = parseInt(data.value as string);
    setChecked(newValue);
    if (onChange && typeof onChange === "function") {
      onChange(newValue);
    }
  };

  return (
    <>
      <Radio
        label={label}
        value={1}
        name={name}
        onChange={handleChange}
        checked={checked === 1}
      />
      <Radio
        label={label}
        value={2}
        name={name}
        onChange={handleChange}
        checked={checked === 2}
      />
      <Radio
        label={label}
        value={3}
        name={name}
        onChange={handleChange}
        checked={checked === 3}
      />
    </>
  );
};
