import React, { ChangeEvent, useState } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import swal from "sweetalert";
import { GOOGLE_SHEET_API_LINK } from "../Utilities/api";
import "../Style/Form.css";
import Task from "./Task";
import axios from "axios";

export const Test: React.FC<{}> = (props) => {
  const [id, setId] = useState("");
  const [response1, setResponse1] = useState<boolean | null>(null);
  const [response2, setResponse2] = useState("");
  const [response3, setResponse3] = useState("");

  const [currentStep, setCurrentStep] = useState(1);

  const onNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const onSubmitForm = () => {
    if (currentStep === 3 && response1 !== null) {
      const response1Value = response1 ? "Brawo" : "Dupa";
      const form = {
        id,
        response1: response1Value,
        response2,
        response3,
      };
      axios
        .post(GOOGLE_SHEET_API_LINK, form)
        .then(({ data }) => {
          swal("Dobra robota!", "Twój numer został przesłany");
          // Reset form data
          setId("");
          setResponse1(null);
          setResponse2("");
          setResponse3("");
        })
        .catch((err) => swal(err.message, "Warning!", "warning"));
    } else {
      onNextStep();
    }
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <Form.Field>
              <label>Numer</label>
              <input
                placeholder="Wpisz przypisany numer"
                name="id"
                onChange={(e) => setId(e.target.value)}
                value={id}
                required
                pattern="[0-9]*"
              />
            </Form.Field>
          </>
        );
      case 2:
        return (
          <>
            <Form.Field>
              <label>Odpowiedź 1</label>
              {currentStep === 2 && (
                <>
                  <div>
                    <img
                      src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/8.jpg"
                      alt=""
                    />
                    <Form.Checkbox
                      label="Wybór 1"
                      checked={response1}
                      onChange={() => setResponse1(true)}
                    />
                  </div>
                  <div>
                    <img
                      src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/7.jpg"
                      alt=""
                    />
                    <Form.Checkbox
                      label="Wybór 2"
                      checked={!response1}
                      onChange={() => setResponse1(false)}
                    />
                  </div>
                </>
              )}
            </Form.Field>
          </>
        );
      case 3:
        return (
          <>
            <Form.Field>
              <label>Odpowiedź 1</label>
              {currentStep === 3 && (
                <>
                  <Form.Checkbox
                    label="Wybór 1"
                    checked={response2}
                    onChange={() => setResponse1(true)}
                  />
                  <Form.Checkbox
                    label="Wybór 2"
                    checked={!response2}
                    onChange={() => setResponse1(false)}
                  />
                </>
              )}
            </Form.Field>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Container fluid className="container">
        <div className="box">
          <Header as="h2">Kwestionariusz</Header>
          <Form className="form">
            {renderFormStep()}
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
                magnam ea et aspernatur laudantium numquam culpa harum deserunt
                reiciendis accusantium ut quae at illum blanditiis maxime
                maiores modi ullam ipsa!
              </p>
              <br />
            </div>
            <Button color="blue" type="submit" onClick={onSubmitForm}>
              {currentStep === 3 ? "Submit" : "Next"}
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};
