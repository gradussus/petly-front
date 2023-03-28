import React, { useState } from 'react';

import { AddPetBody, AddPetButton, AddPetTitle } from './addPet.styled.js';
import { ModalSample } from '../../Modal/Modal';
import AddPetForm from './addPetForm/addPetForm';

const AddPet = ({ handleAddPet }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <AddPetBody onClick={() => toggleModal()}>
        <AddPetTitle>Add pet</AddPetTitle>
        <AddPetButton>
          <span>+</span>
        </AddPetButton>
      </AddPetBody>
      {showModal && (
        <ModalSample toggleModal={toggleModal}>
          <AddPetForm setShowModal={setShowModal} handleAddPet={handleAddPet} />
        </ModalSample>
      )}
    </>
  );
};

export default AddPet;
