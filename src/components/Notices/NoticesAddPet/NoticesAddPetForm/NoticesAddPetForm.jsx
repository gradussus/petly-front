// import { Formik, ErrorMessage, Field } from 'formik';
import { Formik } from 'formik';

// import { ErrorMessages } from './ErrorMessages/ErrorMessages';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import React, { useEffect } from 'react';

// import React from 'react';

// import { useDispatch } from 'react-redux';
import { AddPetForm } from './NoticesAddPetComponents/form';
import { Input } from '../../../RegLog/LoginPage/Input/Input'
import { useState } from 'react';
import { TypeofAddBtn, CancelBtn, Wrapper, NextBtn, 
  TypeOfSexBtn, ActiveTypeOfSexBtn, 
  DoneBtn, TypeofAddBtnActive } from './NoticesAddPetComponents/buttons/buttons'
import { CommentsInput } from './NoticesAddPetComponents/inputs/input'
import { FileInput } from './NoticesAddPetComponents/inputs/PetFoto/Foto'
// import { Container } from '@mui/material';
// import { AddPetValidation } from "./NoticesAddPetComponents/schema"
import {
  Text,
  Male,
  Label,
  ContainerBtn,
  LabelComments,
  WrapperModal
 } from "../NoticesAddPet.styled";
// import { Container } from '@mui/system';
 


let initialValues = {
  title: '',
  namePet: '',
  birth: '',
  breed: '',
  location:'',
  price:'',
  file:null,
  comments:'',
};


export const NoticesAddPetForm = ({toggleModal}) => {

  const [step, setStep] = useState(0);
  const [activeSex, setActiveSex] = useState('male');
  const [typeOfAddActive, seTypeOfAddActive] = useState('sell');

  useEffect(() => {
    const close = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }

    };

    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  });


  const handleSubmit = ({title, namePet, birth, breed, location, price, file, comments} , { resetForm }) => {
    let birthDate = '';
    if (title && namePet && birth && breed && location && comments){
     birthDate = birth.split('-').reverse().join('.');
     const data = {birthDate,title, namePet, breed, location, price, file, comments,sex: activeSex, category: typeOfAddActive};
     console.log(data);
     
  } else {
    toast.error('Please fill correct all fields', { theme: 'colored' })
  }
    resetForm();
  };
const ClickOnSex = (e) => {
  setActiveSex(e.target.name)
}

  const onTypeOfClick = (e) => {
      seTypeOfAddActive(e.target.name)
  }

//   useEffect(() => {
//     if (error) toast.error(`${error}`, { theme: 'colored' });
//   }, [error]);


  return (<Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <AddPetForm title="Add pet" >
      {step === 0 ? ( 
          <>
        {typeOfAddActive === 'lost/found' ?
        <TypeofAddBtnActive>lost/found</TypeofAddBtnActive> :
        <TypeofAddBtn onClick={onTypeOfClick} name='lost/found'>lost/found</TypeofAddBtn>
        }

        {typeOfAddActive === 'in good hands' ?
        <TypeofAddBtnActive>in good hands</TypeofAddBtnActive> :
        <TypeofAddBtn onClick={onTypeOfClick} name='in good hands'>in good hands</TypeofAddBtn>
        }

        {typeOfAddActive === 'sell' ?
        <TypeofAddBtnActive >sell</TypeofAddBtnActive> :
        <TypeofAddBtn onClick={onTypeOfClick} name='sell'>sell</TypeofAddBtn>
        }

          <Input placeholder="Type name" type="text" name="title"  />

          <Input placeholder="Type name pet" type="text" name="namePet"/>
          
          <Input placeholder="Type date of birth" type="date"  name="birth"/>
          
          <Input placeholder="Type breed" type="text" name="breed"/>
          <Wrapper>
            <CancelBtn onClick={toggleModal}>Cancel</CancelBtn>
            <NextBtn type="button" onClick={()=> setStep(1)}>Next</NextBtn>
          </Wrapper>
          </>):(
          <>
            <Text>The sex</Text>
            <WrapperModal>
              

              
              <Male>
              <img src={require("./NoticesAddPetComponents/img/Male.png")} alt="male" width={60} />
              {activeSex === 'male' ? 
              <ActiveTypeOfSexBtn>Male</ActiveTypeOfSexBtn> : 
              <TypeOfSexBtn onClick={ClickOnSex} name='male'>Male</TypeOfSexBtn>}
            </Male>
            <div>
              <img src={require("./NoticesAddPetComponents/img/female.png")} alt="female" width={60} />
              {activeSex === 'female' ? 
              <ActiveTypeOfSexBtn>Female</ActiveTypeOfSexBtn> : 
              <TypeOfSexBtn onClick={ClickOnSex} name='female'>Female</TypeOfSexBtn>}
            </div>
             
            
            </WrapperModal>


            <Label> Location
          <Input placeholder="Location" type="text" name="location"/>
            </Label>
            {typeOfAddActive === 'sell'? 
            (<Label> Price
            <Input placeholder="Price" type="text" name="price"/>
              </Label>): null
          }
           <FileInput/>
            <LabelComments> Comments
          <CommentsInput placeholder="Type breed" type="text" name="comments"/>
            </LabelComments>
          
          <Wrapper>
          <ContainerBtn>
            <CancelBtn onClick={()=> setStep(0)}>Back</CancelBtn>
            <DoneBtn>Done</DoneBtn>
            </ContainerBtn>
          </Wrapper>
          
          
        </>)
          
          }
      </AddPetForm> 
    </Formik>
    )

};

           /* <ErrorMessage name='email' component={ErrorMessages}/>  */

