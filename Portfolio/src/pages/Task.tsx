import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import swal from "sweetalert";
import "../Style/Form.css";
import { GOOGLE_SHEET_API_LINK } from "../Utilities/api";

interface TaskProps {
  id: string;
}

const Task: React.FC<TaskProps> = (props) => {
  interface GoogleSheetForm {
    id: string;
    response1?: string;
  }

  const [form, setForm] = useState<GoogleSheetForm>({
    id: props.id,
    response1: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, "");

    setForm({
      ...form,
      [event.target.name]: numericValue,
    });
  };

  const onSubmitForm: Function = () => {
    if (form.response1 !== "") {
      const requestData = {
        ...form,
        id: props.id,
      };

      axios
        .post(GOOGLE_SHEET_API_LINK, requestData)
        .then(({ data }) => {
          swal("Dobra robota!", "Twój numer został przesłany");
        })
        .catch((err) => swal(err.message, "Warning!", "warning"));
    } else {
      swal("please fill out the form!", "Warning!", "warning");
    }
  };

  return (
    <>
      <Container fluid className="container">
        <div className="box">
          <Header as="h2">Kwestionariusz</Header>
          <Form className="form">
            <Form.Field>
              <label>Numer</label>
              <input
                placeholder="Wpisz przypisany numer"
                name="response1"
                onChange={(e) => handleInputChange(e)}
                value={form.response1}
                required
              />
            </Form.Field>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
                magnam ea et aspernatur laudantium numquam culpa harum deserunt
                reiciendis accusantium ut quae at illum blanditiis maxime
                maiores modi ullam ipsa!
              </p>
              <br />
            </div>
            <Button color="blue" type="submit" onClick={(e) => onSubmitForm(e)}>
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Task;
