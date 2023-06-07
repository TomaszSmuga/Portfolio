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
import CustomForm from "../components/Form/Form";
// import { GroupIdentification } from "../components/Input/Input";
import { RadioQuestionnaire } from "../components/Input/Checkbox";

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
      }, 100);
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

  const handleRadio1 = (value: number) => {
    console.log("Chuj dupa nr", value);
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
                  name="dupa"
                  onChange={(e) => setId(e.target.value)}
                  value={id}
                  required
                  pattern="[0-9]*"
                />
                <RadioQuestionnaire onRadioChange={handleRadio1} />
                {/* <GroupIdentification /> */}
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
                  <div className="tasks">
                    <CustomForm
                      src={ImgLinks[0]}
                      value={response1 === true}
                      onChange={() => setResponse1(true)}
                      label="Wybór 1"
                    />
                    <CustomForm
                      src={ImgLinks[1]}
                      value={response1 === false}
                      onChange={() => setResponse1(false)}
                      label="Wybór 2"
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
            {showOverlay && <Task2 />}

            <Form.Field>
              {currentStep === 3 && (
                <>
                  <div className="tasks">
                    <CustomForm
                      src={ImgLinks[2]}
                      value={response2 === true}
                      onChange={() => setResponse2(true)}
                      label="Wybór 1"
                    />
                    <CustomForm
                      src={ImgLinks[3]}
                      value={response2 === false}
                      onChange={() => setResponse2(false)}
                      label="Wybór 2"
                    />
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
                    <CustomForm
                      src={ImgLinks[5]}
                      value={response3 === false}
                      onChange={() => setResponse3(false)}
                      label="Wybór 1"
                    />
                    <CustomForm
                      src={ImgLinks[4]}
                      value={response3 === true}
                      onChange={() => setResponse3(true)}
                      label="Wybór 2"
                    />
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
                    <CustomForm
                      src={ImgLinks[6]}
                      value={response4 === true}
                      onChange={() => setResponse4(true)}
                      label="Wybór 1"
                    />
                    <CustomForm
                      src={ImgLinks[7]}
                      value={response4 === false}
                      onChange={() => setResponse4(false)}
                      label="Wybór 2"
                    />
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
                    <CustomForm
                      src={ImgLinks[8]}
                      value={response5 === true}
                      onChange={() => setResponse5(true)}
                      label="Wybór 1"
                    />
                    <CustomForm
                      src={ImgLinks[9]}
                      value={response5 === false}
                      onChange={() => setResponse5(false)}
                      label="Wybór 2"
                    />
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
                    <CustomForm
                      src={ImgLinks[11]}
                      value={response6 === false}
                      onChange={() => setResponse6(false)}
                      label="Wybór 1"
                    />
                    <CustomForm
                      src={ImgLinks[10]}
                      value={response6 === true}
                      onChange={() => setResponse6(true)}
                      label="Wybór 2"
                    />
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
