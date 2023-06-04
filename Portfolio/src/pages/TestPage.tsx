import React, { ChangeEvent, useState, useEffect } from "react";
import { Button, Form, Container, Label, Input } from "semantic-ui-react";
import swal from "sweetalert";
import { GOOGLE_SHEET_API_LINK } from "../Utilities/api";
import "../Style/Form.css";
import {
  Task1,
  Task2,
  Task3,
  Task4,
  Task5,
  Task6,
} from "../components/Tasks/Task1";
import NumericInput from "../Utilities/Regex";
import axios from "axios";

export const Test: React.FC<{}> = (props) => {
  const [id, setId] = useState("");
  const [response1, setResponse1] = useState<boolean | null>(null);
  const [response2, setResponse2] = useState<boolean | null>(null);
  const [response3, setResponse3] = useState<boolean | null>(null);
  const [response4, setResponse4] = useState<boolean | null>(null);
  const [response5, setResponse5] = useState<boolean | null>(null);
  const [response6, setResponse6] = useState<boolean | null>(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(true);

  useEffect(() => {
    let timer: number;

    if (showOverlay) {
      timer = setTimeout(() => {
        setShowOverlay(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showOverlay]);

  const onNextStep = () => {
    if (currentStep < 5) {
      if (currentStep === 2 && response1 === null) {
        setIsCheckboxChecked(false);
      } else if (currentStep === 3 && response2 === null) {
        setIsCheckboxChecked(false);
      } else if (currentStep === 4 && response3 === null) {
        setIsCheckboxChecked(false);
      } else if (currentStep === 5 && response4 === null) {
        setIsCheckboxChecked(false);
      } else {
        setCurrentStep((prevStep) => prevStep + 1);
        setShowOverlay(true);
        setIsCheckboxChecked(true);
      }
    }
  };

  const onSubmitForm = () => {
    console.log("Ale Ty umiesz wciskać");
    if (
      currentStep === 5 &&
      response1 !== null &&
      response2 !== null &&
      response3 !== null &&
      response4 !== null
    ) {
      const response1Value = response1 ? "True" : "False";
      const response2Value = response2 ? "True" : "False";
      const response3Value = response3 ? "True" : "False";
      const response4Value = response4 ? "True" : "False";
      const response5Value = response5 ? "True" : "False";
      const response6Value = response6 ? "True" : "False";
      const form = {
        id,
        response1: response1Value,
        response2: response2Value,
        response3: response3Value,
        response4: response4Value,
        response5: response5Value,
        response6: response6Value,
      };
      axios
        .post(GOOGLE_SHEET_API_LINK, form)
        .then(({ data }) => {
          console.log("zajebiscie Ci poszło byczku");
          swal("Dobra robota!", "Twoja odpowiedź została przesłana");
          // Reset form data
          setId("");
          setResponse1(null);
          setResponse2(null);
          setResponse3(null);
          setResponse4(null);
          setResponse5(null);
          setResponse6(null);
        })
        .catch((err) => {
          console.log("chujowo");
          swal(err.message, "Warning!", "warning");
        });
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
              <Label size="massive">Numer identyfikacyjny</Label>
              <Input
                size="massive"
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
            {showOverlay && <Task1 />}
            <Form.Field>
              {currentStep === 2 && (
                <>
                  <div className="tasks">
                    <div className="task">
                      <img
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/8.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 1"
                        checked={response1 === true}
                        onChange={() => setResponse1(true)}
                      />
                    </div>
                    <div className="task">
                      <img
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/7.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 2"
                        checked={response1 === false}
                        onChange={() => setResponse1(false)}
                      />
                    </div>
                  </div>
                </>
              )}
            </Form.Field>
          </>
        );
      case 3:
        return (
          <>
            {showOverlay && <Task2 />}
            <Form.Field>
              {currentStep === 3 && (
                <>
                  <div className="tasks">
                    <div className="task">
                      <img
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/8.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 1"
                        checked={response2 === true}
                        onChange={() => setResponse2(true)}
                      />
                    </div>
                    <div className="task">
                      <img
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/7.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 2"
                        checked={response2 === false}
                        onChange={() => setResponse2(false)}
                      />
                    </div>
                  </div>
                </>
              )}
            </Form.Field>
          </>
        );
      case 4:
        return (
          <>
            {showOverlay && <Task3 />}
            <Form.Field>
              {currentStep === 4 && (
                <>
                  <div className="tasks">
                    <div className="task">
                      <img
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/8.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 1"
                        checked={response3 === true}
                        onChange={() => setResponse3(true)}
                      />
                    </div>
                    <div className="task">
                      <img
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/7.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 2"
                        checked={response3 === false}
                        onChange={() => setResponse3(false)}
                      />
                    </div>
                  </div>
                </>
              )}
            </Form.Field>
          </>
        );
      case 5:
        return (
          <>
            {showOverlay && <Task4 />}
            <Form.Field>
              {currentStep === 5 && (
                <>
                  <div className="tasks">
                    <div className="task">
                      <img
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/8.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 1"
                        checked={response4 === true}
                        onChange={() => setResponse4(true)}
                      />
                    </div>
                    <div className="task">
                      <img
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/7.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 2"
                        checked={response4 === false}
                        onChange={() => setResponse4(false)}
                      />
                    </div>
                  </div>
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
        <Form className="form">
          {renderFormStep()}

          <Form.Button
            size="huge"
            color="blue"
            onClick={onSubmitForm}
            disabled={!isCheckboxChecked}>
            {currentStep === 5 ? "Wyślij" : "Dalej"}
          </Form.Button>
        </Form>
      </Container>
    </>
  );
};

export default Test;
