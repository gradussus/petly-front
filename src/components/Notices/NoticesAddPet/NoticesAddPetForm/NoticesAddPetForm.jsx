// import { Formik, ErrorMessage, Field } from 'formik';
import { Formik } from 'formik';
// import { ErrorMessages } from './ErrorMessages/ErrorMessages';
import { toast } from 'react-toastify';
import React, { useEffect } from 'react';

import axios from 'axios';
import { AddPetForm } from './NoticesAddPetComponents/form';
import { Input } from '../../../RegLog/LoginPage/Input/Input';
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
  TypeofAddBtnActive,
} from './NoticesAddPetComponents/buttons/buttons';
import { CommentsInput } from './NoticesAddPetComponents/inputs/input';
import { FileInput } from './NoticesAddPetComponents/inputs/PetFoto/Foto';
// import { AddPetValidation } from "./NoticesAddPetComponents/schema"
import {
  FormAddPet,
  LabelTitle,
  AddPetFormInput,
  TypeOfAddNav,
  Mandatory,
} from './NoticesAddPetComponents/inputs/input.styled';


axios.defaults.baseURL = 'https://petly-vxdt.onrender.com'

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

export const NoticesAddPetForm = ({ toggleModal }) => {
  const { token } = useAuth();
  const [step, setStep] = useState(0);
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
    const response = await axios.post('/notices/create',
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

  const handleSubmit = ({title, namePet, birth, breed, location, price, comments} , { resetForm }) => {
    console.log({title, namePet, birth, breed, location, price, comments});
    let birthDate = '';
    const convNumber = Number(price)

    if (title && namePet && birth && breed && location && comments){
     birthDate = birth.split('-').reverse().join('.');
     
     const data = {birthDate,title, name: namePet, breed, location, price: convNumber, comments,sex: activeSex, category: typeOfAddActive};
     console.log(data);
     
    createNewPets(token, data, image);
    resetForm();
    toggleModal();
  } else {
    toast.error('Please fill correct all fields', { theme: 'colored' })
  }

    
  };
  const ClickOnSex = e => {
    setActiveSex(e.target.name);
  };

  const onTypeOfClick = (e) => {
    const type = e.target.name;
    switch (type) {
      case 'sell':
        seTypeOfAddActive(type);
        break;
    
      case 'lost/found':
        seTypeOfAddActive("lost-found");
        break;
      case 'in good hands':
        seTypeOfAddActive("for-free");
        break;
    
      default:
        seTypeOfAddActive("for-free");
    }

 }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <AddPetForm title="Add pet">
        {step === 0 ? (
          <>
            <TypeOfAddNav>
              {typeOfAddActive === 'lost/found' ? (
                <TypeofAddBtnActive>lost/found</TypeofAddBtnActive>
              ) : (
                <TypeofAddBtn onClick={onTypeOfClick} name="lost/found">
                  lost/found
                </TypeofAddBtn>
              )}

              {typeOfAddActive === 'in good hands' ? (
                <TypeofAddBtnActive>in good hands</TypeofAddBtnActive>
              ) : (
                <TypeofAddBtn onClick={onTypeOfClick} name="in good hands">
                  in good hands
                </TypeofAddBtn>
              )}

              {typeOfAddActive === 'sell' ? (
                <TypeofAddBtnActive>sell</TypeofAddBtnActive>
              ) : (
                <TypeofAddBtn onClick={onTypeOfClick} name="sell">
                  sell
                </TypeofAddBtn>
              )}
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
            </FormAddPet>
            <FormAddPet>
              <LabelTitle htmlFor="namePet">Name pet</LabelTitle>
              <AddPetFormInput
                placeholder="Type name pet"
                type="text"
                name="namePet"
              />
            </FormAddPet>
            <FormAddPet>
              <LabelTitle htmlFor="birth">Date of birth</LabelTitle>
              <AddPetFormInput
                placeholder="Type date of birth"
                type="date"
                name="birth"
              />
            </FormAddPet>
            <FormAddPet>
              <LabelTitle htmlFor="breed">Breed</LabelTitle>
              <AddPetFormInput
                placeholder="Type breed"
                type="text"
                name="breed"
              />
            </FormAddPet>

            <Wrapper>
              <CancelBtn onClick={toggleModal}>Cancel</CancelBtn>
              <NextBtn type="button" onClick={() => setStep(1)}>
                Next
              </NextBtn>
            </Wrapper>
          </>
        ) : (
          <>
            <p>The sex</p>
            <Wrapper>
              <div>
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
              </div>
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

            <label>
              {' '}
              Location
              <Input placeholder="Location" type="text" name="location" />
            </label>
            {typeOfAddActive === 'sell' ? (
              <label>
                {' '}
                Price
                <Input placeholder="Price" type="text" name="price" />
              </label>
            ) : null}
            <FileInput setToFormFile={setFile}/>
            <label>
              {' '}
              Comments
              <CommentsInput
                placeholder="Comments"
                type="text"
                name="comments"
              />
            </label>

            <Wrapper>
              <CancelBtn onClick={() => setStep(0)}>Back</CancelBtn>
              <DoneBtn>Done</DoneBtn>
            </Wrapper>
          </>
        )}
      </AddPetForm>
    </Formik>
  );
};

/* <ErrorMessage name='email' component={ErrorMessages}/>  */
