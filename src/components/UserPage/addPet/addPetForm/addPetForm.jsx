import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  PetForm,
  PetFormAddImg,
  PetFormBack,
  PetFormButtons,
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
  PetFormSuccess,
  PetFormTitle,
} from './addPetForm.styled';
import { toast } from 'react-toastify';

const initialValues = {
  petName: '',
  birthDate: '',
  breed: '',
  comments: '',
};
const validationSchema = Yup.object().shape({});

const AddPetForm = ({ setShowModal }) => {
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

  const handleSubmit = values => {
    if (!selectedFile) {
      return toast.error('Add a photo to continue.', {
        theme: 'colored',
      });
    }
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <PetForm>
          <PetFormTitle>Add pet</PetFormTitle>
          <Form>
            {step === 1 ? (
              <>
                <PetFormInputBody>
                  <PetFormInputTitle>Name pet</PetFormInputTitle>
                  <PetFormInput
                    type="text"
                    name="petName"
                    placeholder="Type name pet"
                  />
                </PetFormInputBody>
                <PetFormInputBody>
                  <PetFormInputTitle>Date of birth</PetFormInputTitle>
                  <PetFormInput
                    type="date"
                    name="birthDate"
                    placeholder="Type date of birth"
                  />
                </PetFormInputBody>
                <PetFormInputBody>
                  <PetFormInputTitle>Breed</PetFormInputTitle>
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
                  <PetFormSuccess onClick={nextStep}>Next</PetFormSuccess>
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
