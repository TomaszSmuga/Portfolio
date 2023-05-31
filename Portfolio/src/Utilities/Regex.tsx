import React, { ChangeEvent } from "react";

const NumericInput: React.FC = () => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, ""); // Usuwa wszystko, co nie jest cyfrą
    console.log(numericValue);
    // Możesz dalej przetwarzać wartość liczbową
  };

  return <input type="text" onChange={handleInputChange} />;
};

export default NumericInput;
