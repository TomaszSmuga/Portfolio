import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import swal from "sweetalert";
import { GOOGLE_SHEET_API_LINK } from "../Utilities/api";
import "../Style/Form.css";
import NumericInput from "../Utilities/Regex";
import ClickableImage from "../components/MainNavMenu/ClickableImg/ClickableImg";

const RowData = {
  Id: "",
  response1: "",
  response2: "",
};

export const FormComponent: React.FC<{}> = (props) => {
  interface GoogleSheetForm {
    id: string;
    response1?: string;
    salary?: string;
    hobby?: string;
  }

  const [form, setForm] = useState<GoogleSheetForm>({
    id: "",
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
    if (
      form.id !== "" ||
      form.response1 !== "" ||
      form.hobby !== "" ||
      form.salary !== ""
    ) {
      axios
        .post(GOOGLE_SHEET_API_LINK, form)
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
                name="id"
                onChange={(e) => handleInputChange(e)}
                value={form.id}
                required
                pattern="[0-9]*"
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

          <Header as="h2">Pytanie 1</Header>
          <Form className="form">
            <Form.Field>
              <input
                placeholder="Wpisz przypisany numer"
                name="id"
                onChange={(e) => handleInputChange(e)}
                value={form.id}
                required
                pattern="[0-9]*"
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
