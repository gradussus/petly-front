import React from 'react';

import { ReactComponent as EditSvg } from './image/edit.svg';
import { FormBtn } from './userFormBtn.styled';

const UserFormEdit = ({ target, handleFocus, focus }) => {
  const targetEdit = () => {
    if (focus) {
      alert(`Fill in the ${focus}`);
    } else {
      handleFocus(target);
    }
  };

  return (
    <FormBtn onClick={() => targetEdit()}>
      <EditSvg />
    </FormBtn>
  );
};

export default UserFormEdit;
