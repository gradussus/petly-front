import { Formik, ErrorMessage } from 'formik';
import { ErrorMessages } from './ErrorMessages/ErrorMessages';
import { useNavigate } from 'react-router-dom';
import { registerNewUser } from '../../../redux/auth/operations';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../LoginPage/Input/Input'
import { AccentButton, TransparentButton } from '../LoginPage/Buttons/Buttons';
import { AuthForm }  from 'components/RegLog/AuthForm/AuthForm';
import { RedirectLink } from 'components/RegLog/RegisterPage/RedirectLink/RedirectLink';
import { useState } from 'react';
import { FisrtStepShema, SecondStepShema } from './Shema';


let initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  city: '',
  phone: '+380'
};


export const RegisterForm = () => {
  const { error } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const handleSubmit = ({email, password, city, phone, name}, { resetForm }) => {
    dispatch(registerNewUser({email, password, city, phone, name}));

    navigate('/user');
    resetForm();
  };

  const firstHandleSubmit = (values) => {
    initialValues = {...values}
    console.log(initialValues);
    setStep(1);
    }

  useEffect(() => {
    if (error) toast.error(`${error}`, { theme: 'colored' });
  }, [error]);


  return (
    <>
    {step === 0 ?
   ( <Formik initialValues={initialValues} onSubmit={firstHandleSubmit} validationSchema={FisrtStepShema}>

      <AuthForm title="Registration" >
          <Input placeholder="Email" type="email" name="email"  />
          <ErrorMessage name='email' component={ErrorMessages}/>

          <Input placeholder="Password" type="password" name="password"/>
          <ErrorMessage name='password'component={ErrorMessages}/>

          <Input placeholder="Confirm Password" type="password" name="confirmPassword"/>
          <ErrorMessage name='confirmPassword' component={ErrorMessages}/>

          <AccentButton type="submit">Next</AccentButton>
          <RedirectLink/>

      </AuthForm> 
    </Formik>)
        :
    (<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={SecondStepShema}>
          <AuthForm title="Registration" >
            <Input placeholder="Name" type="text" name="name"  />
            <ErrorMessage name='name' component={ErrorMessages}/>

            <Input placeholder="City, region" type="text" name="city"  />
            <ErrorMessage name='city' component={ErrorMessages}/>

            <Input placeholder="Mobile phone" type="tel" name="phone"  />
            <ErrorMessage name='phone' component={ErrorMessages}/>

            <AccentButton type="submit">Register</AccentButton>
            <TransparentButton type="submit" onClick={() => setStep(0)}>Back</TransparentButton>
            <RedirectLink/>
          </AuthForm>
        </Formik>)
}
        </>

    );
};




