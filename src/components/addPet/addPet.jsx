import React from 'react';

import { AddPetBody, AddPetButton, AddPetTitle } from './addPet.styled.js';

const AddPet = () => {
  return (
    <AddPetBody>
      <AddPetTitle>Add pet</AddPetTitle>
      <AddPetButton>
        <span>+</span>
      </AddPetButton>
    </AddPetBody>
  );
};

export default AddPet;
