import React, { useEffect, useRef, useState } from 'react';

import {
  UserFormInput,
  UserFormItem,
  UserFormLabel,
} from './userFormItem.styled';

import UserFormEdit from '../userFormBtn/userFormEdit';
import UserFormSuccess from '../userFormBtn/UserFormSuccess';

const EmailInput = ({ value, focus, handleData, handleFocus }) => {
  const [input, setInput] = useState(value);
  const email = useRef(null);

  useEffect(() => {
    if (focus === 'email') {
      email.current.focus();
    }
  }, [focus]);

  return (
    <UserFormItem>
      <UserFormLabel>Email:</UserFormLabel>
      <UserFormInput
        type="text"
        disabled={focus !== 'email'}
        value={input}
        ref={email}
        onChange={event => setInput(event.currentTarget.value)}
      />
      {focus !== 'email' && (
        <UserFormEdit target="email" handleFocus={handleFocus} focus={focus} />
      )}
      {focus === 'email' && (
        <UserFormSuccess
          handleFocus={handleFocus}
          handleData={handleData}
          target="email"
          editResult={input}
        />
      )}
    </UserFormItem>
  );
};

export default EmailInput;
