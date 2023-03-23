import React from 'react';

import {
  UserImg,
  UserImgInput,
  UserImgInputBody,
  UserImgLabel,
} from './userImage.styled';
import { ReactComponent as InputSvg } from './image/imgInputSvg.svg';

const UserImage = ({ image }) => {
  return (
    <UserImg>
      <img src={`https:${image}`} alt="User Avatar" />
      <UserImgInputBody>
        <UserImgInput
          type="file"
          accept="image/png, image/jpeg"
          id="input-img"
        />
        <UserImgLabel htmlFor="input-img">
          <InputSvg /> Edit photo
        </UserImgLabel>
      </UserImgInputBody>
    </UserImg>
  );
};

export default UserImage;
