import React, { ChangeEvent } from "react";

interface NumericInputProps {
  value: string;
  onChange: (value: string) => void;
}

const NumericInput: React.FC<NumericInputProps> = ({ value, onChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, ""); // Remove all non-digit characters
    onChange(numericValue);
  };

  return <input type="text" value={value} onChange={handleInputChange} />;
};

export default NumericInput;
