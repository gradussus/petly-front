import React from 'react';

import { AccountBtn } from './HeaderNavButton.styled';
import { ReactComponent as AccountSvg } from './img/userIcon.svg';

const AccountButton = ({ handleMenu }) => {
  return (
    <AccountBtn to={'/user'} onClick={() => handleMenu(false)}>
      <AccountSvg /> Account
    </AccountBtn>
  );
};

export default AccountButton;
