import React from 'react';

import { UserDataBody, UserDataContent, UserDataHead } from './userData.styled';

import UserImage from './userImage/userImage';
import UserForm from '../userForm/userForm';

const UserData = () => {
  return (
    <UserDataBody>
      <UserDataHead>My information:</UserDataHead>
      <UserDataContent>
        <UserImage />
        <UserForm />
      </UserDataContent>
    </UserDataBody>
  );
};

export default UserData;
