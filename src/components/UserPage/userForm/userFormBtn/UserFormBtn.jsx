import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

import { FormBtn } from './userFormBtn.styled';

import { ReactComponent as EditSvg } from './image/edit.svg';
import { ReactComponent as SuccessSvg } from './image/successSvg.svg';

const FormButtons = ({
  targetInput,
  owner,
  handleTarget,
  isValid,
  handleSubmit,
  error,
}) => {
  const handleClickTarget = () => {
    if (targetInput !== '') {
      return alert(targetInput);
    }
    handleTarget(owner);
  };

  useEffect(() => {
    if (error) {
      toast.error(`${error} 😕`, {
        theme: 'colored',
      });
    }
  }, [error]);
  return (
    <>
      {targetInput !== owner && (
        <FormBtn onClick={() => handleClickTarget()} type="button">
          <EditSvg />
        </FormBtn>
      )}
      {targetInput === owner && (
        <FormBtn disabled={!isValid} type="submit" onClick={handleSubmit}>
          <SuccessSvg />
        </FormBtn>
      )}
    </>
  );
};

export default FormButtons;
