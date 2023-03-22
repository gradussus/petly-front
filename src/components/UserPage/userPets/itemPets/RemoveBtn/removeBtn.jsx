import React, { useEffect, useState } from 'react';

import { removeUserPets } from '../../../../../utils/api/getUserData';

import { ReactComponent as RemoveImg } from './image/remove.svg';

import { ItemPetsRemoveBtn } from './removeBtn.styled';
import { useAuth } from '../../../../../hooks/useAuth';
import { toast } from 'react-toastify';

const RemoveBtn = ({ id, removePet }) => {
  const [status, setStatus] = useState('pending');

  const { token } = useAuth();

  const handleClickRemove = async id => {
    try {
      setStatus('pending');

      await removeUserPets(token, id);
      setStatus('fulfilled');
    } catch {
      setStatus('rejected');
    }
  };

  useEffect(() => {
    if (status === 'rejected') {
      toast.error('Failed to delete pet.', {
        theme: 'colored',
      });
    }
    if (status === 'fulfilled') {
      toast.success('Pet deleted successfully.');
      removePet(id);
    }
  }, [status, id, removePet]);

  return (
    <ItemPetsRemoveBtn onClick={() => handleClickRemove(id)}>
      <RemoveImg className="item-pets__remove-btn" />
    </ItemPetsRemoveBtn>
  );
};

export default RemoveBtn;
