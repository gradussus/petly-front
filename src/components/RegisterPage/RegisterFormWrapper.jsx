import { AuthForm }  from 'components/AuthForm/AuthForm';
import { RedirectLink } from 'components/RegisterPage/RedirectLink/RedirectLink';
import { useState } from 'react';
import React from "react";
import { Button, Stack } from "@mui/material";
import { submitBtn, nextBtn, BackBtn } from './stylesRegForm';

export const FormStepper = ({ children }) => {
  const stepsArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentStep = stepsArray[step];

  return (
    <AuthForm title="Registration">

      {currentStep}
      <Stack direction="column" spacing={2} sx={{ marginTop: 0, width: "100%" }}>
      {step === 1 && (
          <Button variant="contained" type="submit"  sx={submitBtn}>
            Register
          </Button>
        )}
        <Button
          variant="outlined"
          onClick={() => {
            step === 0 ? setStep(1) : setStep(0);
          }}
          sx={step === 0 ? nextBtn : BackBtn}
        >
          {step === 0 ? "Next" : "Back"}
        </Button>
       
      </Stack>
      <RedirectLink/>
    </AuthForm>
  );
};