import React, { useEffect, useRef, useState } from 'react';

import {
  UserFormInput,
  UserFormItem,
  UserFormLabel,
} from './userFormItem.styled';

import UserFormEdit from '../userFormBtn/userFormEdit';
import UserFormSuccess from '../userFormBtn/UserFormSuccess';

const PhoneInput = ({ value, focus, handleData, handleFocus }) => {
  const [input, setInput] = useState(value);
  const phone = useRef(null);

  useEffect(() => {
    if (focus === 'phone') {
      phone.current.focus();
    }
  }, [focus]);

  return (
    <UserFormItem>
      <UserFormLabel>Phone:</UserFormLabel>
      <UserFormInput
        type="tel"
        disabled={focus !== 'phone'}
        value={input}
        ref={phone}
        onChange={event => setInput(event.currentTarget.value)}
      />
      {focus !== 'phone' && (
        <UserFormEdit target="phone" handleFocus={handleFocus} focus={focus} />
      )}
      {focus === 'phone' && (
        <UserFormSuccess
          handleFocus={handleFocus}
          handleData={handleData}
          target="phone"
          editResult={input}
        />
      )}
    </UserFormItem>
  );
};

export default PhoneInput;
