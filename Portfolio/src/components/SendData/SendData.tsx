import axios from "axios";
import { Button, Form, Container, Header } from "semantic-ui-react";
import { GOOGLE_SHEET_API_LINK } from "../../Utilities/api";

const onSubmitForm = () => {
  console.log("Ale Ty umiesz wciskać");
 
    axios
      .post(GOOGLE_SHEET_API_LINK, form)
      .then(({ data }) => {
        console.log("zajebiscie Ci poszło byczku");
        swal("Dobra robota!", "Twój numer został przesłany");
        // Reset form data
        setId("");
        setResponse1(null);
        setResponse2("");
        setResponse3("");
      })
      .catch((err) => {
        console.log("chujowo");
        swal(err.message, "Warning!", "warning");
      });
  } else {
    onNextStep();
  }
};

export const CheckOnSubmit = () => {
  return (
    <Form.Button color="blue" onClick={onSubmitForm}>
      Chuj dupa
    </Form.Button>
  );
};
