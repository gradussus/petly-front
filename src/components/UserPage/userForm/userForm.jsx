import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import { UserFormBody } from './userForm.styled';
import { UserFormInput, UserFormItem, UserFormLabel } from './userForm.styled';

import FormButtons from './userFormBtn/UserFormBtn';
import Logout from '../logout/logout';

const UserForm = () => {
  const fakeData = {
    name: 'Anna',
    email: 'anna00@gmail.com',
    birthday: null,
    phone: '+380000000000',
    city: 'Kiev',
  };

  const [targetInput, setTargetInput] = useState('');

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
        initialValues={fakeData}
        validateOnBlur
        onSubmit={values => {
          console.log(values);
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
              <UserFormLabel htmlFor={`birthday`}>Birthday:</UserFormLabel>
              <UserFormInput
                type="date"
                name="birthday"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.birthday ? values.birthday : ''}
                disabled={targetInput !== 'birthday'}
              />
              <FormButtons
                error={errors?.birthday}
                owner="birthday"
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
