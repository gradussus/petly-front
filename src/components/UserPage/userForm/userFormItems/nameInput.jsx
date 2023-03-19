import React, { useEffect, useRef, useState } from 'react';

import {
  UserFormInput,
  UserFormItem,
  UserFormLabel,
} from './userFormItem.styled';

import UserFormEdit from '../userFormBtn/userFormEdit';
import UserFormSuccess from '../userFormBtn/UserFormSuccess';

const NameInput = ({ value, focus, handleData, handleFocus }) => {
  const [input, setInput] = useState(value);
  const name = useRef(null);

  useEffect(() => {
    if (focus === 'name') {
      name.current.focus();
    }
  }, [focus]);

  return (
    <UserFormItem>
      <UserFormLabel>Name:</UserFormLabel>
      <UserFormInput
        type="text"
        disabled={focus !== 'name'}
        value={input}
        ref={name}
        onChange={event => setInput(event.currentTarget.value)}
      />
      {focus !== 'name' && (
        <UserFormEdit target="name" handleFocus={handleFocus} focus={focus} />
      )}
      {focus === 'name' && (
        <UserFormSuccess
          handleFocus={handleFocus}
          handleData={handleData}
          target="name"
          editResult={input}
        />
      )}
    </UserFormItem>
  );
};

export default NameInput;
