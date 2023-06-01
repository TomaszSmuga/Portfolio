import React, { useState } from "react";
import axios from "axios";
import SendDataToGoogleSheet from "../SendData/SendData";

export const Task: React.FC = () => {
  const sheetId = "fe2649ca-7748-4c43-984a-6408a7a6478a";
  const [selectedOption, setSelectedOption] = useState("");
  let dataToSend: any = {};

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === "Option 1") {
      dataToSend = {
        response1: "dupa",
      };
    } else if (selectedOption === "Option 2") {
      dataToSend = {
        response1: "niedupa",
      };
    } else {
      console.warn("Wybierz opcję przed przesłaniem danych.");
      return;
    }

    axios
      .post(`https://sheet.best/api/sheets/${sheetId}`, dataToSend)
      .then((response) => {
        console.log("Dane wysłane pomyślnie:", response.data);
      })
      .catch((error) => {
        console.error("Błąd podczas wysyłania danych:", error);
      });
  };

  return (
    <div>
      <h1>Moja aplikacja</h1>
      <div>
        <label>
          <input
            type="checkbox"
            value="Option 1"
            checked={selectedOption === "Option 1"}
            onChange={handleCheckboxChange}
          />
          Opcja 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Option 2"
            checked={selectedOption === "Option 2"}
            onChange={handleCheckboxChange}
          />
          Opcja 2
        </label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <SendDataToGoogleSheet data={dataToSend} sheetId={sheetId} />
    </div>
  );
};
