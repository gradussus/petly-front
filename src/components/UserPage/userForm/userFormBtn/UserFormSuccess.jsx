import React from 'react';

import { ReactComponent as SuccessSvg } from './image/successSvg.svg';
import { FormBtn } from './userFormBtn.styled';

const UserFormSuccess = ({ handleFocus, handleData, target, editResult }) => {
  const targetSuccess = () => {
    handleData({ [target]: editResult });
    handleFocus('');
  };

  return (
    <FormBtn onClick={() => targetSuccess()}>
      <SuccessSvg />
    </FormBtn>
  );
};

export default UserFormSuccess;
