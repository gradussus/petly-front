import React, { useEffect, useState, useCallback } from 'react';

import { updateAvatar } from '../../../../utils/api/getUserData';
import { useAuth } from '../../../../hooks/useAuth';
import { toast } from 'react-toastify';

import {
  UserImg,
  UserImgInput,
  UserImgInputBody,
  UserImgLabel,
} from './userImage.styled';

import { ReactComponent as InputSvg } from './image/imgInputSvg.svg';

const UserImage = ({ image }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [status, setStatus] = useState('fulfilled');
  const [imageUrl, setImageUrl] = useState('');

  const { token } = useAuth();

  const handleUpdateAvatar = useCallback(async () => {
    try {
      setStatus('pending');

      const data = await updateAvatar(token, selectedFile);
      setImageUrl(data);
      setSelectedFile(null);
      setStatus('fulfilled');
    } catch {
      setStatus('rejected');
    }
  }, [selectedFile, token]);

  const handleFileInputChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    if (status === 'rejected') {
      toast.error('Failed to update avatar.', {
        theme: 'colored',
      });
    }
  }, [status]);

  useEffect(() => {
    image?.includes('https:')
      ? setImageUrl(image)
      : setImageUrl('https:' + image);
  }, [image]);

  useEffect(() => {
    if (selectedFile) handleUpdateAvatar();
  }, [selectedFile, handleUpdateAvatar]);

  return (
    <UserImg>
      <img src={imageUrl} alt="User Avatar" />
      <UserImgInputBody>
        <UserImgInput
          type="file"
          accept="image/png, image/jpeg"
          id="input-img"
          onChange={handleFileInputChange}
        />
        <UserImgLabel htmlFor="input-img">
          <InputSvg /> Edit photo
        </UserImgLabel>
      </UserImgInputBody>
    </UserImg>
  );
};

export default UserImage;
