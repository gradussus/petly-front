import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  PetForm,
  PetFormAddImg,
  PetFormBack,
  PetFormButtons,
  PetFormError,
  PetFormErrorArea,
  PetFormImgBody,
  PetFormImgPreview,
  PetFormImgTitle,
  PetFormInput,
  PetFormInputArea,
  PetFormInputBody,
  PetFormInputImg,
  PetFormInputImgLabel,
  PetFormInputTitle,
  PetFormSubmit,
  PetFormTitle,
} from './addPetForm.styled';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const validationSchemaOne = Yup.object().shape({
  petName: yup
    .string()
    .required('petName is required')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      'enter valid petName'
    ),
  birthDate: yup.string().required('birthDate is required'),
  breed: yup
    .string()
    .required('breed is required')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      'enter valid breed'
    ),
});

const validationSchemaTwo = Yup.object().shape({
  comments: yup
    .string()
    .required('comments is required')
    .min(8, 'minimum length 8')
    .max(120, 'maximum length 120'),
});

const AddPetForm = ({ setShowModal, handleAddPet }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = event => {
    if (event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setImagePreviewUrl(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    if (!selectedFile) {
      return toast.error('Add a photo to continue.', {
        theme: 'colored',
      });
    }

    const credentials = {
      petName: values.petName,
      birthDate: values.birthDate.split('-').reverse().join('-'),
      breed: values.breed,
      comments: values.comments,
    };
    handleAddPet(credentials, selectedFile);
    resetForm();
    setSelectedFile(null);
    setImagePreviewUrl(null);
    setShowModal(false);
  };
  let initialValue = {
    petName: '',
    birthDate: '',
    breed: '',
    comments: '',
  };

  const firstHandleSubmit = values => {
    initialValue = { ...values };
    nextStep();
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={step === 1 ? validationSchemaOne : validationSchemaTwo}
      onSubmit={step === 1 ? firstHandleSubmit : handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {() => (
        <PetForm>
          <PetFormTitle>Add pet</PetFormTitle>
          <Form>
            {step === 1 ? (
              <>
                <PetFormInputBody>
                  <PetFormInputTitle>Name pet</PetFormInputTitle>
                  <PetFormError>
                    <ErrorMessage name="petName" />
                  </PetFormError>
                  <PetFormInput
                    type="text"
                    name="petName"
                    placeholder="Type name pet"
                  />
                </PetFormInputBody>
                <PetFormInputBody>
                  <PetFormInputTitle>Date of birth</PetFormInputTitle>
                  <PetFormError>
                    <ErrorMessage name="birthDate" />
                  </PetFormError>
                  <PetFormInput
                    type="date"
                    name="birthDate"
                    placeholder="Type date of birth"
                    max={new Date().toISOString().split('T')[0]}
                  />
                </PetFormInputBody>
                <PetFormInputBody>
                  <PetFormInputTitle>Breed</PetFormInputTitle>
                  <PetFormError>
                    <ErrorMessage name="breed" />
                  </PetFormError>
                  <PetFormInput
                    type="text"
                    name="breed"
                    placeholder="Type breed"
                  />
                </PetFormInputBody>
                <PetFormButtons>
                  <PetFormBack onClick={() => setShowModal(false)}>
                    Cancel
                  </PetFormBack>
                  <PetFormSubmit type="submit">Next</PetFormSubmit>
                </PetFormButtons>
              </>
            ) : (
              <>
                <PetFormImgBody>
                  <PetFormImgTitle>Add photo and some comments</PetFormImgTitle>
                  <PetFormInputImg
                    name="imageURL"
                    type="file"
                    accept="image/png, image/jpeg"
                    id="FormInputImg"
                    onChange={handleChange}
                  />
                  <PetFormInputImgLabel
                    htmlFor="FormInputImg"
                    className={imagePreviewUrl ? 'active' : ''}
                  >
                    {imagePreviewUrl ? (
                      <PetFormImgPreview>
                        <img src={imagePreviewUrl} alt="" />
                      </PetFormImgPreview>
                    ) : (
                      <PetFormAddImg />
                    )}
                  </PetFormInputImgLabel>
                </PetFormImgBody>
                <PetFormInputBody>
                  <PetFormInputTitle>Comments</PetFormInputTitle>
                  <PetFormErrorArea>
                    <ErrorMessage name="comments" />
                  </PetFormErrorArea>
                  <PetFormInputArea>
                    <Field
                      as="textarea"
                      name="comments"
                      placeholder="Type comments"
                    />
                  </PetFormInputArea>
                </PetFormInputBody>
                <PetFormButtons>
                  <PetFormBack onClick={() => prevStep()}>Back</PetFormBack>
                  <PetFormSubmit type="submit">Done</PetFormSubmit>
                </PetFormButtons>
              </>
            )}
          </Form>
        </PetForm>
      )}
    </Formik>
  );
};

export default AddPetForm;
