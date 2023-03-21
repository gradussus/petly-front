import { Input } from '../LoginPage/Input/Input'
import { AccentButton, TransparentButton, NextBtn } from '../LoginPage/Buttons/Buttons';
import { AuthForm }  from 'components/AuthForm/AuthForm';
import { RedirectLink } from 'components/RegisterPage/RedirectLink/RedirectLink';
import { useState } from 'react';
// import axios from 'axios';
import { Formik, ErrorMessage } from 'formik';
import { ErrorMessages } from './ErrorMessages/ErrorMessages';
import { RegisterValidation } from './Shema';

const initialValues = {
  email: 'bobo@mail.com',
  password: '11111gG',
  confirmPassword: '11111gG',
  name: 'Bob',
  city: 'Kyiv, Ukraine',
  phone: '+380963332211'
}

// axios.defaults.baseURL = 'https://petly-vxdt.onrender.com/';

export const RegisterForm = () => {
  const [isSecondStep, setSecondStep] = useState(false);

  
  const handleSubmit = (values, {resetForm}) => {
    
    // const req = async () => {
    //   try {
    //     const res = await axios.post('/api/auth/register', values)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     return res.data;
    //   } catch (error) {
    //     return error.message;
    //   }
    // };
    // req();

    console.log(values);
    resetForm();
    
    
  };

      return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={RegisterValidation} >
          <AuthForm title="Registration" >
            {isSecondStep ? (
              <>
              <Input placeholder="Name" type="text" name="name"  />
              <ErrorMessage name='name' component={ErrorMessages}/>

              <Input placeholder="City, region" type="text" name="city"  />
              <ErrorMessage name='city' component={ErrorMessages}/>

              <Input placeholder="Mobile phone" type="tel" name="phone"  />
              <ErrorMessage name='email' component={ErrorMessages}/>

              <AccentButton type="submit">Register</AccentButton>
              <TransparentButton type="button" onClick={() => setSecondStep(!isSecondStep)}>Back</TransparentButton>
              </>
              ):(
              <>
              <Input placeholder="Email" type="email" name="email"  />
              <ErrorMessage name='email' component={ErrorMessages}/>
              <Input placeholder="Password" type="password" name="password"/>
              <ErrorMessage name='password'component={ErrorMessages}/>
              <Input placeholder="Confirm Password" type="password" name="confirmPassword"/>
              <ErrorMessage name='confirmPassword' component={ErrorMessages}/>

              <NextBtn onClick={() => setSecondStep(!isSecondStep)}>Next</NextBtn> 
            
              </>
              )}
              <RedirectLink/>
          </AuthForm>
        </Formik>
      
      );
    };

