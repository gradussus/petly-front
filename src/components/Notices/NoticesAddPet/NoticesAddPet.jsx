import React from 'react';
// 
import { ModalSample } from 'components/Modal/Modal.jsx';
import { useState } from 'react';
import { NoticesAddPetForm } from './NoticesAddPetForm/NoticesAddPetForm.jsx';
// 
import {
  NoticesAddPetTitle,
  NoticesAddPetBody,
  NoticesAddPetButton,
} from './NoticesAddPet.styled.js';

const NoticesAddPet = () => {

  const [showModal, setShowModal] = useState(false);
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <NoticesAddPetBody>
      {showModal && (
        <ModalSample toggleModal={toggleModal}>
          <NoticesAddPetForm toggleModal={toggleModal}/> 
        </ModalSample>
      )}
      <NoticesAddPetTitle>Add pet</NoticesAddPetTitle>
      <NoticesAddPetButton onClick={toggleModal}>
        <span>+</span>
      </NoticesAddPetButton>
    </NoticesAddPetBody>
  );
};

export default NoticesAddPet;
