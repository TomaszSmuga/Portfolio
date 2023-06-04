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

export const TestMap2: React.FC<{}> = (props) => {
  const [id, setId] = useState("");
  const [responses, setResponses] = useState<(boolean | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
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
    if (currentStep < 5) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const onSubmitForm = () => {
    console.log("Ale Ty umiesz wciskać");
    if (
      currentStep === 5 &&
      responses[0] !== null &&
      responses[1] !== null &&
      responses[2] !== null
    ) {
      const responsesValues = responses.map((response) =>
        response !== null ? "True" : "False"
      );

      const form = {
        id,
        response1: responsesValues[0],
        response2: responsesValues[1],
        response3: responsesValues[2],
        // response4: responsesValues[3],
        // response5: responsesValues[4],
        // response6: responsesValues[5],
      };

      axios
        .post(GOOGLE_SHEET_API_LINK, form)
        .then(({ data }) => {
          console.log("zajebiscie Ci poszło byczku");
          swal("Dobra robota!", "Twój numer został przesłany");
          // Reset form data
          setId("");
          setResponses(Array(6).fill(null));
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
    const tasks = [Task1, Task2, Task3, Task4, Task5, Task6];

    const taskLabels = [
      "Numer identyfikacyjny",
      "Wybór 1",
      "Wybór 2",
      "Wybór 3",
      "Wybór 4",
      "Wybór 5",
    ];

    return (
      <>
        <Form.Field>
          <Label size="massive">{taskLabels[currentStep - 1]}</Label>
          {currentStep === 1 ? (
            <Input
              size="massive"
              placeholder="Wpisz przypisany numer"
              name="id"
              onChange={(e) => setId(e.target.value)}
              value={id}
              required
              pattern="[0-9]*"
            />
          ) : (
            <>
              {showOverlay && React.createElement(tasks[currentStep - 2])}
              {currentStep === 5 && (
                <div className="tasks">
                  {tasks[currentStep - 2].map((task, index) => (
                    <div className="task" key={index}>
                      <img src={task.image} alt="" />
                      <Form.Checkbox
                        label={task.label}
                        checked={responses[currentStep - 2] === task.value}
                        onChange={() =>
                          setResponses((prevResponses) => {
                            const newResponses = [...prevResponses];
                            newResponses[currentStep - 2] = task.value;
                            return newResponses;
                          })
                        }
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </Form.Field>
      </>
    );
  };

  return (
    <>
      <Container fluid className="container">
        <Form className="form">
          {renderFormStep()}

          <Form.Button size="huge" color="blue" onClick={onSubmitForm}>
            {currentStep === 5 ? "Wyślij" : "Dalej"}
          </Form.Button>
        </Form>
      </Container>
    </>
  );
};
