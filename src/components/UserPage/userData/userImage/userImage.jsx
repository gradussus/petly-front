import React from 'react';

import {
  UserImg,
  UserImgInput,
  UserImgInputBody,
  UserImgLabel,
} from './userImage.styled';
import { ReactComponent as InputSvg } from './image/imgInputSvg.svg';

const UserImage = () => {
  return (
    <UserImg>
      <img
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt=""
      />
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
