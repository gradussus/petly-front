import { Formik, ErrorMessage, Form } from 'formik';
import { toast } from 'react-toastify';
import React, { useEffect } from 'react';

import axios from 'axios';
import { AddPetForm } from './NoticesAddPetComponents/form';
import { useState } from 'react';
import { useAuth } from '../../../../hooks/useAuth';
import {
  TypeofAddBtn,
  CancelBtn,
  Wrapper,
  NextBtn,
  TypeOfSexBtn,
  ActiveTypeOfSexBtn,
  DoneBtn,
} from './NoticesAddPetComponents/buttons/buttons';
import { CommentsInput } from './NoticesAddPetComponents/inputs/input';
import { FileInput } from './NoticesAddPetComponents/inputs/PetFoto/Foto';
import {
  FormAddPet,
  LabelTitle,
  AddPetFormInput,
  TypeOfAddNav,
  Mandatory,
} from './NoticesAddPetComponents/inputs/input.styled';
import {
  Text,
  Male,
  ContainerBtn,
  LabelComments,
} from '../NoticesAddPet.styled';
import * as Yup from 'yup';
import { number, string } from 'yup';
import {
  AddPetFormError,
  AddPetFormErrorComment,
  AddPetFormErrorLocation,
} from './NoticesAddPetComponents/buttons/buttons.styled';

axios.defaults.baseURL = 'https://petly-vxdt.onrender.com';

export const NoticesAddPetForm = ({ toggleModal }) => {
  const { token } = useAuth();

  const [step, setStep] = useState(1);

  const [activeSex, setActiveSex] = useState('male');
  const [typeOfAddActive, seTypeOfAddActive] = useState('sell');
  const [image, setFile] = useState(null);

  useEffect(() => {
    const close = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  });

  const createNewPets = async (token, credentials, image) => {
    const response = await axios.post(
      '/notices/create',
      {
        image,
        ...credentials,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  };

  const handleSubmit = (
    { title, namePet, birth, breed, location, price, comments },
    { resetForm }
  ) => {
    let birthDate = '';
    const convNumber = Number(price);

    if (title && namePet && birth && breed && location && comments) {
      birthDate = birth.split('-').reverse().join('.');

      const data = {
        birthDate,
        title,
        name: namePet,
        breed,
        location,
        price: convNumber,
        comments,
        sex: activeSex,
        category: typeOfAddActive,
      };

      createNewPets(token, data, image);
      resetForm();
      toggleModal();
    } else {
      toast.error('Please fill correct all fields', { theme: 'colored' });
    }
  };

  const ClickOnSex = e => {
    setActiveSex(e.target.name);
  };

  const onTypeOfClick = e => {
    if (e.target.name === 'lost/found') return seTypeOfAddActive('lost-found');
    if (e.target.name === 'in good hands') return seTypeOfAddActive('for-free');
    seTypeOfAddActive(e.target.name);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  let initialValues = {
    title: '',
    namePet: '',
    birth: '',
    breed: '',
    location: '',
    price: '',
    file: null,
    comments: '',
  };

  const firstHandleSubmit = values => {
    initialValues = { ...values };
    nextStep();
  };

  const validationSchemaOne = Yup.object().shape({
    title: string().required('Title is required').min(2).max(48),
    birth: string().required('Phone is required'),
    namePet: string()
      .required('Name is Required')
      .matches(
        /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
        'Please enter valid name'
      ),
    breed: string()
      .required('Breed is required')
      .matches(
        /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
        'Only letters can be accepted'
      ),
  });

  const validationSchemaTwo = Yup.object().shape({
    location: string()
      .required('Location is required')
      .matches(
        /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?:[-\s]?[a-zA-Zа-яА-ЯіІїЇґҐ]+),\s[a-zA-Zа-яА-ЯіІїЇ'’\s-]+$/,
        'Should be at least two words separated by string'
      ),
    price: number().min(0),
    comments: string().required('Comment is required').min(8).max(120),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={step === 1 ? validationSchemaOne : validationSchemaTwo}
      onSubmit={step === 1 ? firstHandleSubmit : handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {() => (
        <Form>
          <AddPetForm title={'Add pet'}>
            {step === 1 ? (
              <>
                <TypeOfAddNav>
                  <TypeofAddBtn
                    onClick={onTypeOfClick}
                    name="lost/found"
                    className={typeOfAddActive === 'lost-found' ? 'active' : ''}
                  >
                    lost/found
                  </TypeofAddBtn>

                  <TypeofAddBtn
                    onClick={onTypeOfClick}
                    name="in good hands"
                    className={typeOfAddActive === 'for-free' ? 'active' : ''}
                  >
                    in good hands
                  </TypeofAddBtn>

                  <TypeofAddBtn
                    onClick={onTypeOfClick}
                    name="sell"
                    className={typeOfAddActive === 'sell' ? 'active' : ''}
                  >
                    sell
                  </TypeofAddBtn>
                </TypeOfAddNav>
                <FormAddPet>
                  <LabelTitle htmlFor="title">
                    Tittle of ad<Mandatory>*</Mandatory>
                  </LabelTitle>
                  <AddPetFormInput
                    placeholder="Type name"
                    type="text"
                    name="title"
                  />
                  <AddPetFormError>
                    <ErrorMessage name="title" />
                  </AddPetFormError>
                </FormAddPet>
                <FormAddPet>
                  <LabelTitle htmlFor="namePet">Name pet</LabelTitle>
                  <AddPetFormInput
                    placeholder="Type name pet"
                    type="text"
                    name="namePet"
                  />
                  <AddPetFormError>
                    <ErrorMessage name="namePet" />
                  </AddPetFormError>
                </FormAddPet>
                <FormAddPet>
                  <LabelTitle htmlFor="birth">Date of birth</LabelTitle>
                  <AddPetFormInput
                    placeholder="Type date of birth"
                    type="date"
                    name="birth"
                    max={new Date().toISOString().split('T')[0]}
                  />
                  <AddPetFormError>
                    <ErrorMessage name="birth" />
                  </AddPetFormError>
                </FormAddPet>
                <FormAddPet>
                  <LabelTitle htmlFor="breed">Breed</LabelTitle>
                  <AddPetFormInput
                    placeholder="Type breed"
                    type="text"
                    name="breed"
                  />
                  <AddPetFormError>
                    <ErrorMessage name="breed" />
                  </AddPetFormError>
                </FormAddPet>

                <Wrapper>
                  <CancelBtn onClick={toggleModal}>Cancel</CancelBtn>
                  <NextBtn type="submit">Next</NextBtn>
                </Wrapper>
              </>
            ) : (
              <>
                <Text>The sex</Text>
                <Wrapper>
                  <Male>
                    <img
                      src={require('./NoticesAddPetComponents/img/Male.png')}
                      alt="male"
                      width={60}
                    />
                    {activeSex === 'male' ? (
                      <ActiveTypeOfSexBtn>Male</ActiveTypeOfSexBtn>
                    ) : (
                      <TypeOfSexBtn onClick={ClickOnSex} name="male">
                        Male
                      </TypeOfSexBtn>
                    )}
                  </Male>
                  <div>
                    <img
                      src={require('./NoticesAddPetComponents/img/female.png')}
                      alt="female"
                      width={60}
                    />
                    {activeSex === 'female' ? (
                      <ActiveTypeOfSexBtn>Female</ActiveTypeOfSexBtn>
                    ) : (
                      <TypeOfSexBtn onClick={ClickOnSex} name="female">
                        Female
                      </TypeOfSexBtn>
                    )}
                  </div>
                </Wrapper>
                <FormAddPet>
                  <LabelTitle htmlFor="location">Location</LabelTitle>
                  <AddPetFormInput
                    placeholder="Location"
                    type="text"
                    name="location"
                  />
                  <AddPetFormErrorLocation>
                    <ErrorMessage name="location" />
                  </AddPetFormErrorLocation>
                </FormAddPet>

                {typeOfAddActive === 'sell' ? (
                  <FormAddPet>
                    <LabelTitle htmlFor="price">Price</LabelTitle>
                    <AddPetFormInput placeholder="Price" name="price" />
                    <AddPetFormError>
                      <ErrorMessage name="price" />
                    </AddPetFormError>
                  </FormAddPet>
                ) : null}
                <FileInput setToFormFile={setFile} />
                <FormAddPet>
                  <LabelComments>Comments</LabelComments>
                  <CommentsInput
                    placeholder="Type comment"
                    type="text"
                    name="comments"
                  />
                  <AddPetFormErrorComment>
                    <ErrorMessage name="comments" />
                  </AddPetFormErrorComment>
                </FormAddPet>

                <Wrapper>
                  <ContainerBtn>
                    <CancelBtn onClick={() => prevStep()}>Back</CancelBtn>
                    <DoneBtn>Done</DoneBtn>
                  </ContainerBtn>
                </Wrapper>
              </>
            )}
          </AddPetForm>
        </Form>
      )}
    </Formik>
  );
};
