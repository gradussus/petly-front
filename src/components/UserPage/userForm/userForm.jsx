import React, { useState } from 'react';

import { UserFormBody } from './userForm.styled';

import CityInput from './userFormItems/cityInput';
import NameInput from './userFormItems/nameInput';
import EmailInput from './userFormItems/emailInput';
import BirthdayInput from './userFormItems/birthdayInput';
import PhoneInput from './userFormItems/phoneInput';
import Logout from '../logout/logout';

const fakeData = {
  name: 'Anna',
  email: 'anna00@gmail.com',
  birthday: null,
  phone: '+380000000000',
  city: 'Kiev',
};

const UserForm = () => {
  const [data, setData] = useState(fakeData);
  const [focus, setFocus] = useState('');

  const handleData = field => {
    setData({ ...data, ...field });
  };

  const handleFocus = focus => {
    setFocus(focus);
  };

  return (
    <UserFormBody>
      <NameInput
        value={data?.name}
        handleData={handleData}
        focus={focus}
        handleFocus={handleFocus}
      />
      <EmailInput
        value={data?.email}
        handleData={handleData}
        focus={focus}
        handleFocus={handleFocus}
      />
      <BirthdayInput
        value={data?.birthday}
        handleData={handleData}
        focus={focus}
        handleFocus={handleFocus}
      />
      <PhoneInput
        value={data?.phone}
        handleData={handleData}
        focus={focus}
        handleFocus={handleFocus}
      />
      <CityInput
        value={data?.city}
        handleData={handleData}
        focus={focus}
        handleFocus={handleFocus}
      />
      <Logout />
    </UserFormBody>
  );
};

export default UserForm;
