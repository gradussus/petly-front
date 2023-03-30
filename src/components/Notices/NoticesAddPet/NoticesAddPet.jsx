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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'https://petly-vxdt.onrender.com';

const NoticesAddPet = ({ createNewPets }) => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const { token } = useAuth();

  const handleNavigate = () => {
    navigate('/notices/own');
  };

  const handleCreatePets = async (data, image) => {
    try {
      await createNewPets(token, data, image);
      toggleModal();
      handleNavigate();
    } catch {}
  };

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
          <NoticesAddPetForm
            toggleModal={toggleModal}
            handleCreatePets={handleCreatePets}
          />
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
