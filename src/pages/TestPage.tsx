import React, { useState, useEffect } from "react";
import { Form, Container } from "semantic-ui-react";
import Swal from "sweetalert2";
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
// import NumericInput from "../Utilities/Regex";
import axios from "axios";
import { ImgLinks } from "../Utilities/Link";
import { Randomizer } from "../components/Form/Form";
// import CustomForm from "../components/Form/Form";

export const Test: React.FC = () => {
  const [id, setId] = useState("");
  const [response1, setResponse1] = useState<boolean | null>(null);
  const [response2, setResponse2] = useState<boolean | null>(null);
  const [response3, setResponse3] = useState<boolean | null>(null);
  const [response4, setResponse4] = useState<boolean | null>(null);
  const [response5, setResponse5] = useState<boolean | null>(null);
  const [response6, setResponse6] = useState<boolean | null>(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    let timer: number;

    if (showOverlay) {
      timer = setTimeout(() => {
        setShowOverlay(false);
      }, 11500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showOverlay]);

  const onNextStep = () => {
    if (currentStep < 7) {
      if (
        (currentStep === 2 && response1 === null) ||
        (currentStep === 3 && response2 === null) ||
        (currentStep === 4 && response3 === null) ||
        (currentStep === 5 && response4 === null) ||
        (currentStep === 6 && response5 === null) ||
        (currentStep === 7 && response6 === null)
      ) {
        return;
      } else {
        setCurrentStep((prevStep) => prevStep + 1);
        setShowOverlay(true);
        setIsButtonDisabled(false);
      }
    }
  };

  const onSubmitForm = () => {
    console.log("Ale Ty umiesz wciskać");
    if (
      currentStep === 7 &&
      response1 !== null &&
      response2 !== null &&
      response3 !== null &&
      response4 !== null &&
      response5 !== null &&
      response6 !== null
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
        .then(() => {
          Swal.fire({
            title: "Dobra robota!",
            text: "Twoja odpowiedź została przesłana. ",
            html: "<p>Dziękuję za udział w badaniu</p>",
            icon: "success",
            confirmButtonText: "Zamknij",
          }).then((dupa) => {
            if (dupa.isConfirmed) {
              window.location.href = "https://www.google.com/";
            }
          });

          setId("");
          setResponse1(null);
          setResponse2(null);
          setResponse3(null);
          setResponse4(null);
          setResponse5(null);
          setResponse6(null);
        })
        .catch((err) => {
          Swal.fire(err.message, "Błąd");
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
            <Randomizer />

            <div className="flex">
              <form action="">
                <h2>Numer Identyfikacyjny</h2>
                <input
                  type="text"
                  placeholder="Wpisz przypisany numer"
                  name="id"
                  onChange={(e) => setId(e.target.value)}
                  value={id}
                  required
                  pattern="[0-9]*"
                />
              </form>
            </div>
          </>
        );
      case 2:
        return (
          <>
            {showOverlay && <Task1 seconds={3} />}
            <Form.Field>
              {currentStep === 2 && (
                <>
                  {/* <CustomForm
                    src={ImgLinks[0]}
                    checked={response1 === true}
                    onChange={() => setResponse1(true)}
                    
                  /> */}
                  <div className="tasks">
                    <div className="task">
                      <img src={ImgLinks[0]} alt="" />
                      <Form.Checkbox
                        label="Wybór 1"
                        checked={response1 === true}
                        onChange={() => setResponse1(true)}
                      />
                    </div>
                    <div className="task">
                      <img src={ImgLinks[1]} alt="" />
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
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/3.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 1"
                        checked={response2 === false}
                        onChange={() => setResponse2(false)}
                      />
                    </div>
                    <div className="task">
                      <img
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/4.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 2"
                        checked={response2 === true}
                        onChange={() => setResponse2(true)}
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
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/6.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 1"
                        checked={response3 === false}
                        onChange={() => setResponse3(false)}
                      />
                    </div>
                    <div className="task">
                      <img
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/5.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 2"
                        checked={response3 === true}
                        onChange={() => setResponse3(true)}
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
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/7.jpg"
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
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/8.jpg"
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
      case 6:
        return (
          <>
            {showOverlay && <Task5 />}
            <Form.Field>
              {currentStep === 6 && (
                <>
                  <div className="tasks">
                    <div className="task">
                      <img
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/9.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 1"
                        checked={response5 === true}
                        onChange={() => setResponse5(true)}
                      />
                    </div>
                    <div className="task">
                      <img
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/10.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 2"
                        checked={response5 === false}
                        onChange={() => setResponse5(false)}
                      />
                    </div>
                  </div>
                </>
              )}
            </Form.Field>
          </>
        );
      case 7:
        return (
          <>
            {showOverlay && <Task6 />}
            <Form.Field>
              {currentStep === 7 && (
                <>
                  <div className="tasks">
                    <div className="task">
                      <img
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/12.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 1"
                        checked={response6 === false}
                        onChange={() => setResponse6(false)}
                      />
                    </div>
                    <div className="task">
                      <img
                        src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/11.jpg"
                        alt=""
                      />
                      <Form.Checkbox
                        label="Wybór 2"
                        checked={response6 === true}
                        onChange={() => setResponse6(true)}
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
            disabled={isButtonDisabled}>
            {currentStep === 7 ? "Wyślij" : "Dalej"}
          </Form.Button>
        </Form>
      </Container>
    </>
  );
};

export default Test;
