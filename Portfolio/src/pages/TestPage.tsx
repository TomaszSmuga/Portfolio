import React, { ChangeEvent, useState, useEffect } from "react";

import { Button, Form, Container, Header } from "semantic-ui-react";
import swal from "sweetalert";
import { GOOGLE_SHEET_API_LINK } from "../Utilities/api";
import "../Style/Form.css";
import { Task1 } from "../components/Tasks/Task1";
import { CheckOnSubmit } from "../components/SendData/SendData";
import axios from "axios";

export const Test: React.FC<{}> = (props) => {
  const [id, setId] = useState("");
  const [response1, setResponse1] = useState<boolean | null>(null);
  const [response2, setResponse2] = useState("");
  const [response3, setResponse3] = useState("");
  const [showOverlay, setShowOverlay] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("Ale Ty umiesz wciskać");
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
            {/* {showOverlay && <Task1 cla/> && } */}

            <Form.Field>
              <label>Odpowiedź 1</label>
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
            <Form.Field>
              <label>Odpowiedź 1</label>
              {currentStep === 3 && (
                <>
                  <Form.Field
                    label="dupa"
                    value={response2}
                    onChange={(e: any) => setResponse2(e.target.value)}
                  />
                  {/* <Form.Checkbox
                    label="Wybór 1"
                    checked={response2 === true}
                    onChange={() => setResponse2(true)}
                  />

                  <Form.Checkbox
                    label="Wybór 2"
                    checked={response2 === false}
                    onChange={() => setResponse2(false)}
                  /> */}
                </>
              )}
            </Form.Field>
          </>
        );
      default:
        return null;
    }
  };

  const handleAxios = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
            </div>
            <Form.Button color="blue" onClick={onSubmitForm}>
              {currentStep === 3 ? "Submit" : "Next"}
            </Form.Button>
          </Form>
          <button onClick={handleAxios}>TestAxiosa</button>
          <CheckOnSubmit />
        </div>
      </Container>
    </>
  );
};
