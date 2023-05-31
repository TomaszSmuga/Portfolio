import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import swal from "sweetalert";
import { GOOGLE_SHEET_API_LINK } from "../../Utilities/api";
import "../Style/Form.css";
// import NumericInput from "../Utilities/Regex";
// import ClickableImage from "../components/MainNavMenu/ClickableImg/ClickableImg";

interface GoogleSheetRow {
  name: string;
  response1: string;
  salary: string;
  hobby: string;
}

let rowData: GoogleSheetRow = {
  name: "",
  response1: "",
  salary: "",
  hobby: "",
};

const updateFormData = (formValues: Partial<GoogleSheetRow>) => {
  rowData = { ...rowData, ...formValues };
};

const submitDataToSheet = () => {
  axios
    .post(GOOGLE_SHEET_API_LINK, rowData)
    .then((response) => {
      console.log("Dane zostały pomyślnie przesłane:", response.data);
    })
    .catch((error) => {
      console.error("Błąd podczas przesyłania danych:", error);
    });
};

// // Przykładowe przesłanie formularza
// const form1Data: Partial<GoogleSheetRow> = {
//   name: "Jan Kowalski",
//   age: "30",
// };

updateFormData(form1Data);
submitDataToSheet();
