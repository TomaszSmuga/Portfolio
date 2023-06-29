import React, { useState, useEffect } from "react";
import { Form, Grid } from "semantic-ui-react";
import Swal from "sweetalert2";
import { GOOGLE_SHEET_API_LINK } from "../Utilities/api";
import "../Style/Form.css";
// import NumericInput from "../Utilities/Regex";
import axios from "axios";
import { Randomizer } from "../components/Form/Form";
import { CheckboxDiv } from "../components/Input/Checkbox.styled";
import { RadioQuestionnaire } from "../components/Input/Checkbox";
import {
  Consent,
  Instruction,
} from "../components/InformedConsent/InformedConsent";
import { SocioEconomicFormNumbers } from "../components/formField/FormField";
import { CityCheckbox } from "../components/Input/CityCheckbox";
import { EducationCheckbox } from "../components/Input/Education";
import { GenderCheckbox } from "../components/Input/GenderCheckbox";
import { Step6, Step6Option } from "../pages/Step6";
import { useSelector } from "react-redux";
import { StepState } from "../redux/stepSlice";

export const ArrayTest: React.FC = () => {
  const [step6Answers, setStep6Answers] = useState<Step6Option[]>([]);

  const [id, setId] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<number | null>(null);
  const [city, setCity] = useState<number | null>(null);
  const [education, setEducation] = useState<number | null>(null);
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
  const [showButton, setShowButton] = useState(true);
  const innerCurrentStep = useSelector(
    (state: StepState) => state.innerCurrentStep
  );
  const STEP_NUMBER = 2;

  useEffect(() => {
    if (currentStep == 6) {
      if (innerCurrentStep <= STEP_NUMBER) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    } else {
      setShowButton(true);
    }
  }, [currentStep, innerCurrentStep, STEP_NUMBER]);

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
    if (currentStep < 6) {
      // if (consent === false) {
      //   window.location.href = "https://www.google.com/";
      //   return;
      // }
      // if (
      //   (currentStep === 1 && consent === null) ||
      //   (currentStep === 2 &&
      //     (id === null || age === null || gender === null || city === null)) ||
      //   (currentStep === 3 &&
      //     (STS1 === null ||
      //       STS2 === null ||
      //       STS3 === null ||
      //       STS4 === null ||
      //       STS5 === null)) ||
      //   (currentStep === 4 &&
      //     (CSES1 === null ||
      //       CSES2 === null ||
      //       CSES3 === null ||
      //       CSES4 === null))
      // ) {
      //   return;
      // } else {
      setCurrentStep((prevStep) => prevStep + 1);
      setShowOverlay(true);
      setIsButtonDisabled(false);
      // }
    }
  };
  const onSubmitForm = () => {
    console.log("Ale Ty umiesz wciskać");
    if (
      currentStep === 6 &&
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
      const form = {
        id,
        age,
        gender,
        city,
        education,
        CSES1,
        CSES2,
        CSES3,
        CSES4,
        STS1,
        STS2,
        STS3,
        STS4,
        STS5,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const step6AnswersRequestObj: any = {};

      const step6AnswerRequest = step6Answers.map((ans, index) => {
        const newKey = `response${index + 1}`;
        const stringValue = ans.answer ? "True" : "False";

        step6AnswersRequestObj[newKey] = stringValue;
        return { [newKey]: stringValue };
      });

      const request = {
        ...form,
        ...step6AnswerRequest,
        ...step6AnswerRequest.reduce((acc, val) => ({ ...acc, ...val }), {}),
      };

      axios
        .post(GOOGLE_SHEET_API_LINK, request)
        .then(() => {
          console.log(step6AnswersRequestObj);
          console.log(request);
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
          <Step6
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onInnerCurrentStepChange={() => {}}
            onAnswersChange={handleStep6Answers}
            stepNumber={STEP_NUMBER}
          />
        );
      // case 7:
      //   return <h1>Dziękuję za udział w badaniu</h1>;
      default:
        return null;
    }
  };

  const handleStep6Answers = (answers: Step6Option[]): void => {
    setStep6Answers(answers);
    console.log(answers);
  };

  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={1} computer={4} tablet={3}></Grid.Column>
          <Grid.Column mobile={14} computer={8} tablet={10}>
            <Form className="form">
              {renderFormStep()}
              {showButton && (
                <Form.Button
                  size="huge"
                  color="blue"
                  onClick={onSubmitForm}
                  disabled={isButtonDisabled}>
                  {currentStep === 6 ? "Wyślij" : "Dalej"}
                </Form.Button>
              )}
            </Form>
          </Grid.Column>
          <Grid.Column mobile={1} computer={4} tablet={3}></Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default ArrayTest;
