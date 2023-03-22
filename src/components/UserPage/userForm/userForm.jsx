import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';

import { UserFormBody } from './userForm.styled';
import { UserFormInput, UserFormItem, UserFormLabel } from './userForm.styled';

import FormButtons from './userFormBtn/UserFormBtn';
import Logout from '../logout/logout';

import { useAuth } from '../../../hooks/useAuth';
import { updateUserData } from '../../../utils/api/getUserData';
import { toast } from 'react-toastify';

const UserForm = ({
  userBirthDate,
  userCity,
  userEmail,
  userPhone,
  userName,
}) => {
  const [targetInput, setTargetInput] = useState('');
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    if (status === 'rejected') {
      toast.error('Unfortunately, we were unable to obtain user data.', {
        theme: 'colored',
      });
    }
  }, [status]);

  const { token } = useAuth();

  const updateUser = async values => {
    try {
      setStatus('pending');

      const credentials = {
        name: values.name,
        email: values.email,
        city: values.city,
        phone: values.phone,
      };

      if (values.birthDate) {
        credentials.birthDate = values.birthDate.split('-').reverse().join('-');
      }

      await updateUserData(token, credentials);
      setStatus('fulfilled');
    } catch {
      setStatus('rejected');
    }
  };

  const handleTarget = target => {
    setTargetInput(target);
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    phone: yup
      .string()
      .required('Phone is required')
      .matches(/^\+380\d{9}$/, 'Must start +380 and have 12 characters'),
    city: yup.string().required('City is required'),
    email: yup
      .string()
      .required('Email is required')
      .email('Email is not correct'),
  });
  return (
    <>
      <Formik
        initialValues={{
          name: userName,
          email: userEmail,
          birthDate: userBirthDate
            ? userBirthDate.split('-').reverse().join('-')
            : null,
          phone: userPhone,
          city: userCity,
        }}
        validateOnBlur
        onSubmit={values => {
          updateUser(values);
          setTargetInput('');
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
        }) => (
          <UserFormBody>
            <UserFormItem>
              <UserFormLabel htmlFor={`name`}>Name:</UserFormLabel>
              <UserFormInput
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                disabled={targetInput !== 'name'}
              />
              <FormButtons
                error={errors?.name}
                owner="name"
                isValid={isValid}
                targetInput={targetInput}
                handleTarget={handleTarget}
                handleSubmit={handleSubmit}
              />
            </UserFormItem>
            <UserFormItem>
              <UserFormLabel htmlFor={`email`}>Email:</UserFormLabel>
              <UserFormInput
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                disabled={targetInput !== 'email'}
              />
              <FormButtons
                error={errors?.email}
                owner="email"
                isValid={isValid}
                targetInput={targetInput}
                handleTarget={handleTarget}
                handleSubmit={handleSubmit}
              />
            </UserFormItem>
            <UserFormItem>
              <UserFormLabel htmlFor={`birthDate`}>Birthday:</UserFormLabel>
              <UserFormInput
                type="date"
                name="birthDate"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.birthDate ? values.birthDate : ''}
                disabled={targetInput !== 'birthDate'}
              />
              <FormButtons
                error={errors?.birthDate}
                owner="birthDate"
                isValid={isValid}
                targetInput={targetInput}
                handleTarget={handleTarget}
                handleSubmit={handleSubmit}
              />
            </UserFormItem>
            <UserFormItem>
              <UserFormLabel htmlFor={`phone`}>Phone:</UserFormLabel>
              <UserFormInput
                type="text"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                disabled={targetInput !== 'phone'}
              />
              <FormButtons
                error={errors?.phone}
                owner="phone"
                isValid={isValid}
                targetInput={targetInput}
                handleTarget={handleTarget}
                handleSubmit={handleSubmit}
              />
            </UserFormItem>
            <UserFormItem>
              <UserFormLabel htmlFor={`city`}>City:</UserFormLabel>
              <UserFormInput
                type="text"
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
                disabled={targetInput !== 'city'}
              />
              <FormButtons
                error={errors?.city}
                owner="city"
                isValid={isValid}
                targetInput={targetInput}
                handleTarget={handleTarget}
                handleSubmit={handleSubmit}
              />
            </UserFormItem>
            <Logout />
          </UserFormBody>
        )}
      </Formik>
    </>
  );
};

export default UserForm;
