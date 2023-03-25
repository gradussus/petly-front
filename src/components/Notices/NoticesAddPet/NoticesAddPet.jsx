import React from 'react';

import {
  NoticesAddPetTitle,
  NoticesAddPetBody,
  NoticesAddPetButton,
} from './NoticesAddPet.styled.js';

const NoticesAddPet = () => {
  return (
    <NoticesAddPetBody>
      <NoticesAddPetTitle>Add pet</NoticesAddPetTitle>
      <NoticesAddPetButton>
        <span>+</span>
      </NoticesAddPetButton>
    </NoticesAddPetBody>
  );
};

export default NoticesAddPet;
