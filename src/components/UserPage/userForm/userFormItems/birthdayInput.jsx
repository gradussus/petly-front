import React, { useEffect, useRef, useState } from 'react';

import { format } from 'date-fns';

import {
  UserFormInput,
  UserFormItem,
  UserFormLabel,
} from './userFormItem.styled';

import UserFormEdit from '../userFormBtn/userFormEdit';
import UserFormSuccess from '../userFormBtn/UserFormSuccess';

const BirthdayInput = ({ value, focus, handleData, handleFocus }) => {
  const [input, setInput] = useState(value);
  const birthday = useRef(null);

  useEffect(() => {
    if (focus === 'birthday') {
      birthday.current.focus();
    }
  }, [focus]);

  return (
    <UserFormItem>
      <UserFormLabel>Birthday:</UserFormLabel>
      <UserFormInput
        type="date"
        min="1940-01-01"
        max={format(new Date(), 'yyyy-MM-dd')}
        disabled={focus !== 'birthday'}
        value={input ? input : ''}
        ref={birthday}
        onChange={event => setInput(event.currentTarget.value)}
      />
      {focus !== 'birthday' && (
        <UserFormEdit
          target="birthday"
          handleFocus={handleFocus}
          focus={focus}
        />
      )}
      {focus === 'birthday' && (
        <UserFormSuccess
          handleFocus={handleFocus}
          handleData={handleData}
          target="birthday"
          editResult={input}
        />
      )}
    </UserFormItem>
  );
};

export default BirthdayInput;
