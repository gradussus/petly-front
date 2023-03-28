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
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-toastify';

const NoticesAddPet = () => {
  const [showModal, setShowModal] = useState(false);

  const { token } = useAuth();

  const toggleModal = () => {
    token
      ? setShowModal(!showModal)
      : toast.error('This feature is only available to an authorized user', {
          theme: 'colored',
        });
  };

  return (
    <NoticesAddPetBody>
      {showModal && (
        <ModalSample toggleModal={toggleModal}>
          <NoticesAddPetForm toggleModal={toggleModal} />
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
