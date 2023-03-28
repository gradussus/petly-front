import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { userLogIn } from '../../../redux/auth/operations';

import { Input } from './Input/Input';
import { AccentButton } from './Buttons/Buttons';
import { AuthForm } from 'components/RegLog/AuthForm/AuthForm';
import { RedirectLink } from 'components/RegLog/LoginPage/RedirectLink/RedirectLink';
import { Formik, ErrorMessage } from 'formik';
import { ErrorMessages, ErrorWrapper } from '../RegisterPage/ErrorMessages/ErrorMessages';
import { LoginValidation } from './Shema';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const { error } = useAuth();

  const handleLogin = values => {
    dispatch(userLogIn(values));
  };

  useEffect(() => {
    if (error) toast.error(`${error}`, { theme: 'colored' });
  }, [error]);

  const handleSubmit = (values, { resetForm }) => {
    handleLogin(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginValidation}
      handleSubmit
    >
      <AuthForm title="Login" onSubmit={handleSubmit}>
        <ErrorWrapper>
          <Input placeholder="Email" type="email" name="email" />
          <ErrorMessage name="email" component={ErrorMessages} />
        </ErrorWrapper>

        <ErrorWrapper>
          <Input placeholder="Password" type="password" name="password" />
          <ErrorMessage name="password" component={ErrorMessages} />
        </ErrorWrapper>

        <AccentButton type="submit">Login</AccentButton>
        <RedirectLink onClick={() => handleSubmit} />
      </AuthForm>
    </Formik>
  );
};
