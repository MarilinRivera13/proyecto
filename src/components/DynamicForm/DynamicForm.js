import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./DynamicForm.css";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";
import FourthStep from "./FourthStep/FourthStep";

export default function DynamicForm() {
  const [step, setStep] = useState(1);

  const showNextStep = () => {
    setStep(step + 1);
  };

  const showPreviousStep = () => {
    setStep(step - 1);
  };

  let currentStepComponent;

  switch (step) {
    case 1:
      currentStepComponent = <FirstStep />;
      break;
    case 2:
      currentStepComponent = <SecondStep />;
      break;
    case 3:
      currentStepComponent = <ThirdStep />;
      break;
    case 4:
      currentStepComponent = <FourthStep setStep={setStep} />;
      break;
    default:
      currentStepComponent = null;
  }

  return (
    <div className="dynamic-form mt-4 mb-5" id="dynamic-form">
      <Container className="text-center p-4">
        <div className="content-dynamic-form mt-5 p-4">
          <h1 className="title-dynamic-form">Vista al formulario</h1>
          <p className="steps-numbers">Step {step} of 4</p>
          {currentStepComponent}
          <div className="actions">
            {step > 1 && (
              <div className="container-text">
                <p className="before" onClick={showPreviousStep}>
                  ⬅️ Anterior
                </p>
              </div>
            )}
            {step < 4 && (
              <div className="container-text">
                <p className="next" onClick={showNextStep}>
                  Siguiente ➡️
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
