import React from 'react';

import { ItemPetsBody, ItemPetsImg, ItemPetsText } from './itemPets.styled';

import RemoveBtn from './RemoveBtn/removeBtn';

const ItemPets = ({ id, name, breed, image, comments, birth, removePet }) => {
  return (
    <ItemPetsBody>
      <RemoveBtn id={id} removePet={removePet} />
      <ItemPetsImg>
        <img src={image} alt="pet" />
      </ItemPetsImg>
      <div>
        <ItemPetsText>
          Name: <span>{name}</span>
        </ItemPetsText>
        <ItemPetsText>
          Date of birth: <span>{birth.replace(/-/g, '.')}</span>
        </ItemPetsText>
        <ItemPetsText>
          Breed: <span>{breed}</span>
        </ItemPetsText>
        <ItemPetsText>
          Comments: <span>{comments}</span>
        </ItemPetsText>
      </div>
    </ItemPetsBody>
  );
};

export default ItemPets;
