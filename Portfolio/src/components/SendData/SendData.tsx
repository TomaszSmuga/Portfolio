import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { GOOGLE_SHEET_API_LINK } from "../../Utilities/api";
import swal from "sweetalert";

export const CheckOnSubmit = () => {
  const handleFormSubmit = () => {
    // Provide the necessary form data for the request
    const formData = {
      // Add your form data here
    };

    axios
      .post(GOOGLE_SHEET_API_LINK, formData)
      .then(({ data }) => {
        console.log("zajebiscie Ci poszło byczku");
        swal("Dobra robota!", "Twój numer został przesłany");
      })
      .catch((err) => {
        console.log("chujowo");
        swal(err.message, "Warning!", "warning");
      });
  };

  return (
    <Button color="blue" onClick={handleFormSubmit}>
      Chuj dupa
    </Button>
  );
};
