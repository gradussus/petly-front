import React, { useEffect } from 'react';

import { Input } from '../LoginPage/Input/Input';
import { useDispatch } from 'react-redux';
import {
  AccentButton,
  TransparentButton,
  NextBtn,
} from '../LoginPage/Buttons/Buttons';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { RedirectLink } from 'components/RegisterPage/RedirectLink/RedirectLink';
import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { ErrorMessages } from './ErrorMessages/ErrorMessages';
import { RegisterValidation } from './Shema';
import { registerNewUser } from '../../redux/auth/operations';

import { useAuth } from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  city: '',
  phone: '+380',
};

export const RegisterForm = () => {
  const [isSecondStep, setSecondStep] = useState(false);

  const { error } = useAuth();

  const dispatch = useDispatch();

  const handleRegistration = values => {
    dispatch(
      registerNewUser({
        city: values.city,
        email: values.email,
        name: values.name,
        password: values.password,
        phone: values.phone,
      })
    );
  };

  const handleSubmit = (values, { resetForm }) => {
    handleRegistration(values);
    resetForm();
  };

  useEffect(() => {
    if (error) toast.error(`${error}`, { theme: 'colored' });
  }, [error]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidation}
    >
      <AuthForm title="Registration">
        {isSecondStep ? (
          <>
            <Input placeholder="Name" type="text" name="name" />
            <ErrorMessage name="name" component={ErrorMessages} />

            <Input placeholder="City, region" type="text" name="city" />
            <ErrorMessage name="city" component={ErrorMessages} />

            <Input placeholder="Mobile phone" type="tel" name="phone" />
            <ErrorMessage name="email" component={ErrorMessages} />

            <AccentButton type="submit">Register</AccentButton>
            <TransparentButton
              type="button"
              onClick={() => setSecondStep(!isSecondStep)}
            >
              Back
            </TransparentButton>
          </>
        ) : (
          <>
            <Input placeholder="Email" type="email" name="email" />
            <ErrorMessage name="email" component={ErrorMessages} />
            <Input placeholder="Password" type="password" name="password" />
            <ErrorMessage name="password" component={ErrorMessages} />
            <Input
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
            />
            <ErrorMessage name="confirmPassword" component={ErrorMessages} />

            <NextBtn onClick={() => setSecondStep(!isSecondStep)}>Next</NextBtn>
          </>
        )}
        <RedirectLink />
      </AuthForm>
    </Formik>
  );
};
