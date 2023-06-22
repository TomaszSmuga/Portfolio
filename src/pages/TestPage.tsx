import React, { useState, useEffect } from "react";
import { Form, Grid } from "semantic-ui-react";
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
import { CheckboxDiv } from "../components/Input/Checkbox.styled";
import { RadioQuestionnaire } from "../components/Input/Checkbox";
import {
  Consent,
  Instruction,
} from "../components/InformedConsent/InformedConsent";
import {
  SocioEconomicFormNumbers,
  // SocioEconomicForm,
} from "../components/formField/FormField";
import { CityCheckbox } from "../components/Input/CityCheckbox";
import { EducationCheckbox } from "../components/Input/Education";
import { GenderCheckbox } from "../components/Input/GenderCheckbox";
// import { Matrix } from "../components/Matrix/Matrix";
import { Ticker } from "../components/CountDowns/CountDowns";

export const Test: React.FC = () => {
  const [id, setId] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<number | null>(null);
  const [city, setCity] = useState<number | null>(null);
  const [education, setEducation] = useState<number | null>(null);
  const [response1, setResponse1] = useState<boolean | null>(null);
  const [response2, setResponse2] = useState<boolean | null>(null);
  const [response3, setResponse3] = useState<boolean | null>(null);
  const [response4, setResponse4] = useState<boolean | null>(null);
  const [response5, setResponse5] = useState<boolean | null>(null);
  const [response6, setResponse6] = useState<boolean | null>(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [CSES1, setCSES1] = useState<number | null>(null);
  const [CSES2, setCSES2] = useState<number | null>(null);
  const [CSES3, setCSES3] = useState<number | null>(null);
  const [CSES4, setCSES4] = useState<number | null>(null);
  const [STS1, setSTS1] = useState<number | null>(null);
  const [STS2, setSTS2] = useState<number | null>(null);
  const [STS3, setSTS3] = useState<number | null>(null);
  const [STS4, setSTS4] = useState<number | null>(null);
  const [STS5, setSTS5] = useState<number | null>(null);
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    let timer: number;

    if (showOverlay) {
      timer = setTimeout(() => {
        setShowOverlay(false);
      }, 1150);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showOverlay]);

  const onNextStep = () => {
    if (currentStep < 11) {
      if (consent === false) {
        window.location.href = "https://www.google.com/";
        return;
      }
      if (
        (currentStep === 1 && consent === null) ||
        (currentStep === 2 &&
          (id === null || age === null || gender === null || city === null)) ||
        (currentStep === 3 &&
          (STS1 === null ||
            STS2 === null ||
            STS3 === null ||
            STS4 === null ||
            STS5 === null)) ||
        (currentStep === 4 &&
          (CSES1 === null ||
            CSES2 === null ||
            CSES3 === null ||
            CSES4 === null)) ||
        (currentStep === 6 && response1 === null) ||
        (currentStep === 7 && response2 === null) ||
        (currentStep === 8 && response3 === null) ||
        (currentStep === 9 && response4 === null) ||
        (currentStep === 10 && response5 === null) ||
        (currentStep === 11 && response6 === null)
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
      currentStep === 11 &&
      response1 !== null &&
      response2 !== null &&
      response3 !== null &&
      response4 !== null &&
      response5 !== null &&
      response6 !== null &&
      CSES1 !== null &&
      CSES2 !== null &&
      CSES3 !== null &&
      CSES4 !== null &&
      STS1 !== null &&
      STS2 !== null &&
      STS3 !== null &&
      STS4 !== null &&
      STS5 !== null &&
      city !== null &&
      age !== null &&
      education !== null &&
      gender !== null
    ) {
      const response1Value = response1 ? "True" : "False";
      const response2Value = response2 ? "True" : "False";
      const response3Value = response3 ? "True" : "False";
      const response4Value = response4 ? "True" : "False";
      const response5Value = response5 ? "True" : "False";
      const response6Value = response6 ? "True" : "False";
      const form = {
        id,
        age,
        gender,
        city,
        education,
        CSES1: CSES1,
        CSES2: CSES2,
        CSES3: CSES3,
        CSES4: CSES4,
        STS1: STS1,
        STS2: STS2,
        STS3: STS3,
        STS4: STS4,
        STS5,
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
          }).then((response) => {
            if (response.isConfirmed) {
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

  const createHandleCSES =
    (setCSESCallback: (value: number) => void) => (value: number) => {
      setCSESCallback(value);
    };
  const CSESCallbacks = [setCSES1, setCSES2, setCSES3, setCSES4];
  const handleCSES = CSESCallbacks.map(createHandleCSES);

  const createHandleSTS =
    (setSTSCallback: (value: number) => void) => (value: number) => {
      setSTSCallback(value);
    };
  const STSCallbacks = [setSTS1, setSTS2, setSTS3, setSTS4, setSTS5];
  const handleSTS = STSCallbacks.map(createHandleSTS);

  const createHandleSocioEconomic =
    (setSocioeconomicCallback: (value: number) => void) => (value: number) => {
      setSocioeconomicCallback(value);
    };
  const SocioEconomicCallbacks = [setGender, setCity, setEducation];
  const handleSocioEconomic = SocioEconomicCallbacks.map(
    createHandleSocioEconomic
  );

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            {currentStep === 1 && (
              <>
                <Consent
                  label="Wyrażam zgodę na udział w badaniu"
                  value={consent === true}
                  onChange={() => setConsent(true)}
                  label2="Nie wyrażam zgody na udział w badaniu"
                  onDecline={() => setConsent(false)}
                  value2={consent === false}
                />
              </>
            )}
          </>
        );
      case 2:
        return (
          <>
            {currentStep === 2 && (
              <>
                <div className="flex">
                  <Randomizer />
                  <CheckboxDiv>
                    <SocioEconomicFormNumbers
                      placeholder="numer identyfikacyjny"
                      onChange={(value) => setId(value)}
                      value={id}
                      label="Numer Identyfikacyjny"
                    />
                    <SocioEconomicFormNumbers
                      placeholder="swój wiek"
                      onChange={(value) => setAge(value)}
                      value={age}
                      label="Wiek"
                    />
                    <GenderCheckbox
                      title="Płeć"
                      onRadioChange={handleSocioEconomic[0]}
                    />
                    <CityCheckbox
                      title="Miejsce zamieszkania"
                      onRadioChange={handleSocioEconomic[1]}
                    />
                    <EducationCheckbox
                      title="Edukacja"
                      onRadioChange={handleSocioEconomic[2]}
                    />
                  </CheckboxDiv>
                </div>
              </>
            )}
          </>
        );
      case 3:
        return (
          <>
            {currentStep === 3 && (
              <>
                <div className="flex">
                  <CheckboxDiv>
                    <div>
                      <h2 style={{ textAlign: "center" }}>
                        Przeczytaj uważnie stwierdzenia i odpowiedz zgodnie z
                        tym w jakim stopniu odnoszą się do Ciebie
                      </h2>
                    </div>
                    <RadioQuestionnaire
                      title="Inni uważają, że ze względu na wiek mam gorszą pamięć"
                      onRadioChange={handleSTS[0]}
                    />
                    <RadioQuestionnaire
                      title="Inni uważają, że z uwagi na mój wiek mam mniej do zaoferowania"
                      onRadioChange={handleSTS[1]}
                    />
                    <RadioQuestionnaire
                      title="Inni ludzie uważają, że mój wiek ogranicza moje możliwości zapamiętywania"
                      onRadioChange={handleSTS[2]}
                    />
                    <RadioQuestionnaire
                      title="Sądzę, że ze względu na mój wiek, mam możliwości rozwoju intelektualnego"
                      onRadioChange={handleSTS[3]}
                    />
                    <RadioQuestionnaire
                      title="Osoby w moim wieku często są oceniane w sposób tendencyjny"
                      onRadioChange={handleSTS[4]}
                    />
                  </CheckboxDiv>
                </div>
              </>
            )}
          </>
        );
      case 4:
        return (
          <>
            {currentStep === 4 && (
              <>
                <CheckboxDiv>
                  <RadioQuestionnaire
                    title="Bycie osobą starszą jest dla mnie ważne."
                    onRadioChange={handleCSES[0]}
                  />
                  <RadioQuestionnaire
                    title="Bycie osobą starszą nie jest ważne dla mojego poczucia jaką osobą jestem."
                    onRadioChange={handleCSES[1]}
                  />
                  <RadioQuestionnaire
                    title="Bycie osobą starszą jest ważnym odzwierciedleniem tego, kim jestem. 
        "
                    onRadioChange={handleCSES[2]}
                  />
                  <RadioQuestionnaire
                    title="Bycie osobą starszą ma bardzo niewiele wspólnego z tym, jak się czuję względem siebie"
                    onRadioChange={handleCSES[3]}
                  />
                </CheckboxDiv>
              </>
            )}
          </>
        );
      case 5:
        return <>{currentStep === 5 && <Instruction />}</>;

      case 6:
        return (
          <>
            {showOverlay && (
              <Ticker seconds={3} imgLinks={ImgLinks} imgIndex={0} />
            )}
            <Form.Field>
              {currentStep === 6 && (
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
      case 7:
        return (
          <>
            {showOverlay && <Task2 />}

            <Form.Field>
              {currentStep === 7 && (
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
      case 8:
        return (
          <>
            {showOverlay && <Task3 />}
            <Form.Field>
              {currentStep === 8 && (
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
      case 9:
        return (
          <>
            {showOverlay && <Task4 />}
            <Form.Field>
              {currentStep === 9 && (
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
      case 10:
        return (
          <>
            {showOverlay && <Task5 />}
            <Form.Field>
              {currentStep === 10 && (
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
      case 11:
        return (
          <>
            {showOverlay && <Task6 />}
            <Form.Field>
              {currentStep === 11 && (
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
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={1} computer={4} tablet={3}></Grid.Column>
          <Grid.Column mobile={14} computer={8} tablet={10}>
            <Form className="form">
              {renderFormStep()}

              <Form.Button
                size="huge"
                color="blue"
                onClick={onSubmitForm}
                disabled={isButtonDisabled}>
                {currentStep === 11 ? "Wyślij" : "Dalej"}
              </Form.Button>
            </Form>
          </Grid.Column>
          <Grid.Column mobile={1} computer={4} tablet={3}></Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Test;
