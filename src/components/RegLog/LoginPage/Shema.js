import { object, string } from 'yup';
const emailRegexp =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegexp = /^[a-zA-Z0-9а-яА-Я]+$/;

export const LoginValidation = object().shape({
  email: string()
    .required('Please Enter your email')
    .matches(emailRegexp, 'Enter your email <example@mail.com>'),
  password: string()
    .required('Please Enter your password')
    .min(7, "Password's length min 7, max 32, without spaces")
    .max(32, "Password's length min 7, max 32, without spaces")
    .matches(passwordRegexp, "Password's length min 7, max 32, without spaces"),
});
