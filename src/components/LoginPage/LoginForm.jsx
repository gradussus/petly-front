import { Input } from './Input/Input'
import { AccentButton } from './Buttons/Buttons';
import { AuthForm }  from 'components/AuthForm/AuthForm';
import { RedirectLink } from 'components/LoginPage/RedirectLink/RedirectLink'
import { Formik, ErrorMessage } from 'formik';
import { ErrorMessages } from '../RegisterPage/ErrorMessages/ErrorMessages';
import { LoginValidation } from './Shema';


const initialValues = {
  email: 'xlebushek@gmail.com',
  password: 'AgSgfgnhh3',
}

export const LoginForm = () => {

  const handleSubmit = (values, {resetForm}) => {


    console.log(values);;
    resetForm();
   };

      return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={LoginValidation} >
          <AuthForm title="Login" onSubmit={handleSubmit}>
              <Input placeholder="Email" type="email" name="email" />
              <ErrorMessage name='email' component={ErrorMessages}/>

              <Input placeholder="Password" type="password" name="password" />
              <ErrorMessage name='password' component={ErrorMessages}/>

              <AccentButton type='submit'>Login</AccentButton>
              <RedirectLink/>
          </AuthForm>
        </Formik>
      );
    };
