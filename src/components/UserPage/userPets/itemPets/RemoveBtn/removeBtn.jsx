import React from 'react';

import { ReactComponent as RemoveImg } from './image/remove.svg';

import { ItemPetsRemoveBtn } from './removeBtn.styled';

const RemoveBtn = ({ id }) => {
  return (
    <ItemPetsRemoveBtn>
      <RemoveImg className="item-pets__remove-btn" />
    </ItemPetsRemoveBtn>
  );
};

export default RemoveBtn;
