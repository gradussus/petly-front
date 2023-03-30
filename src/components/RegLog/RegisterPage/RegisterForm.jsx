import { Formik, ErrorMessage } from 'formik';
import { ErrorMessages, ErrorWrapper } from './ErrorMessages/ErrorMessages';
import { registerNewUser } from '../../../redux/auth/operations';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../LoginPage/Input/Input';
import { AccentButton, TransparentButton } from '../LoginPage/Buttons/Buttons';
import { AuthForm } from 'components/RegLog/AuthForm/AuthForm';
import { RedirectLink } from 'components/RegLog/RegisterPage/RedirectLink/RedirectLink';
import { useState } from 'react';
import { FisrtStepShema, SecondStepShema } from './Shema';
import { Wrapper } from './RegisterForm.styled'

let initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  city: '',
  phone: '+380',
};

export const RegisterForm = () => {
  const { error } = useAuth();
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);

  const handleSubmit = (
    { email, password, city, phone, name },
    { resetForm }
  ) => {
    
    dispatch(registerNewUser({ email, password, city, phone, name }));

  };

  const firstHandleSubmit = values => {
    initialValues = { ...values };
    setStep(1);
  };

  useEffect(() => {
    if (error) toast.error(`${error}`, { theme: 'colored' });
  }, [error]);

  return (<Wrapper>
            <Formik
              initialValues={initialValues}
              onSubmit={step === 0 ? firstHandleSubmit : handleSubmit}
              validationSchema={step === 0 ? FisrtStepShema : SecondStepShema}
              validateOnChange={false}
              validateOnBlur={false}
            >
              <AuthForm title="Registration">
                {step === 0 ? 
                <>
                <ErrorWrapper>
                <Input placeholder="Email" type="email" name="email" />
                <ErrorMessage name="email" component={ErrorMessages} />
                </ErrorWrapper>

                <ErrorWrapper>
                <Input placeholder="Password" type="password" name="password" />
                <ErrorMessage name="password" component={ErrorMessages} />
                </ErrorWrapper>

                <ErrorWrapper>
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                />
                <ErrorMessage name="confirmPassword" component={ErrorMessages} />
                </ErrorWrapper>

                <AccentButton type="submit">Next</AccentButton>
                </>  
                :
                (<>
                <ErrorWrapper>
                <Input placeholder="Name" type="text" name="name" />
                <ErrorMessage name="name" component={ErrorMessages} id='1'/>
                </ErrorWrapper> 

                <ErrorWrapper>
                <Input placeholder="City, region" type="text" name="city"/>
                <ErrorMessage name="city" component={ErrorMessages}  id='2' />
                </ErrorWrapper>

                <ErrorWrapper>
                <Input placeholder="Mobile phone" type="tel" name="phone" />
                <ErrorMessage name="phone" component={ErrorMessages} id='3' />
                </ErrorWrapper>

                <AccentButton type="submit">Register</AccentButton>
                <TransparentButton type="button" onClick={() => setStep(0)}>Back</TransparentButton>
                </>)
                }
                <RedirectLink />
              </AuthForm>
            </Formik>

        </Wrapper>
  );
};
