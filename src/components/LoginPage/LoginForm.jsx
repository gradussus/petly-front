import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { userLogIn } from '../../redux/auth/operations';

import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/useAuth';

import { Input } from './Input/Input';
import { AccentButton } from './Buttons/Buttons';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { RedirectLink } from 'components/LoginPage/RedirectLink/RedirectLink';
import { ErrorMessages } from '../RegisterPage/ErrorMessages/ErrorMessages';
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

  const handleSubmit = (values, { resetForm }) => {
    handleLogin(values);
    resetForm();
  };

  useEffect(() => {
    if (error) toast.error(`${error}`, { theme: 'colored' });
  }, [error]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginValidation}
    >
      <AuthForm title="Login" onSubmit={handleSubmit}>
        <Input placeholder="Email" type="email" name="email" />
        <ErrorMessage name="email" component={ErrorMessages} />

        <Input placeholder="Password" type="password" name="password" />
        <ErrorMessage name="password" component={ErrorMessages} />

        <AccentButton type="submit">Login</AccentButton>
        <RedirectLink />
      </AuthForm>
    </Formik>
  );
};
