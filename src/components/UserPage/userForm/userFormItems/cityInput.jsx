import React, { useState, useRef, useEffect } from 'react';

import {
  UserFormInput,
  UserFormItem,
  UserFormLabel,
} from './userFormItem.styled';
import UserFormEdit from '../userFormBtn/userFormEdit';
import UserFormSuccess from '../userFormBtn/UserFormSuccess';

const CityInput = ({ value, focus, handleData, handleFocus }) => {
  const city = useRef(null);
  const [input, setInput] = useState(value);

  useEffect(() => {
    if (focus === 'city') {
      city.current.focus();
    }
  }, [focus]);

  return (
    <UserFormItem>
      <UserFormLabel>City:</UserFormLabel>
      <UserFormInput
        type="text"
        disabled={focus !== 'city'}
        value={input}
        ref={city}
        onChange={event => setInput(event.currentTarget.value)}
      />
      {focus !== 'city' && (
        <UserFormEdit target="city" handleFocus={handleFocus} focus={focus} />
      )}
      {focus === 'city' && (
        <UserFormSuccess
          handleFocus={handleFocus}
          handleData={handleData}
          target="city"
          editResult={input}
        />
      )}
    </UserFormItem>
  );
};

export default CityInput;
