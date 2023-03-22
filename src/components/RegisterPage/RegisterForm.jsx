import { FormStepper } from "./RegisterFormWrapper";
import { Formik, ErrorMessage } from 'formik';
import { ErrorMessages } from './ErrorMessages/ErrorMessages';
import { RegisterValidation } from './Shema';
import { Input } from '../LoginPage/Input/Input'
import { useNavigate } from "react-router-dom";
import { registerNewUser } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const initialValues = {
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

    const handleSubmit = (values, {resetForm}) => {
        handleRegistration(values);

        console.log(values);
        navigate('/user');
        resetForm();
        
      };

    useEffect(() => {
        if (error) toast.error(`${error}`, { theme: 'colored' });
    }, [error]);

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={RegisterValidation}>
           <FormStepper>
  <>
  {/* firstStep */}
                 <Input placeholder="Email" type="email" name="email"  /> 
                 <ErrorMessage name='email' component={ErrorMessages}/>
  
                 <Input placeholder="Password" type="password" name="password"/> 
                  <ErrorMessage name='password'component={ErrorMessages}/> 
  
                  <Input placeholder="Confirm Password" type="password" name="confirmPassword"/> 
                 <ErrorMessage name='confirmPassword' component={ErrorMessages}/>
  </>
  {/* second */}            
                 <>
                 <Input placeholder="Name" type="text" name="name"  />
                <ErrorMessage name='name' component={ErrorMessages}/>
  
                <Input placeholder="City, region" type="text" name="city"  />
                <ErrorMessage name='city' component={ErrorMessages}/>
  
                <Input placeholder="Mobile phone" type="tel" name="phone"  />
                <ErrorMessage name='phone' component={ErrorMessages}/>
                 </> 
           </FormStepper>
        </Formik>
  )}