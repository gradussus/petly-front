import React from 'react';

import { AccountBtn } from './HeaderNavButton.styled';
import { ReactComponent as AccountSvg } from './img/userIcon.svg';

const AccountButton = () => {
  return (
    <AccountBtn to={'/user'}>
      <AccountSvg /> Account
    </AccountBtn>
  );
};

export default AccountButton;
