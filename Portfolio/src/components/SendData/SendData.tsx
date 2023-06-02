import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { GOOGLE_SHEET_API_LINK } from "../../Utilities/api";
import swal from "sweetalert";

export const CheckOnSubmit = () => {
  const [id, setId] = useState("");
  const [response1, setResponse1] = useState<boolean | null>(null);
  const [response2, setResponse2] = useState("");
  const [response3, setResponse3] = useState("");
  const handleFormSubmit = () => {
    // Provide the necessary form data for the request
    const form = {
      id,
      response1,
      response2,
      response3,
    };

    axios
      .post(GOOGLE_SHEET_API_LINK, form)
      .then(({ data }) => {
        console.log("zajebiscie Ci poszło byczku");
        swal("Dobra robota!", "Twój numer został przesłany");
        setId("");
        setResponse1(null);
        setResponse2("");
        setResponse3("");
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
