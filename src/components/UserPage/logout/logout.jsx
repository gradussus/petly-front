import React from 'react';

import { ReactComponent as LogoutSvg } from './image/logout.svg';

import { LogoutBody } from './logout.styled';

const Logout = () => {
  return (
    <LogoutBody>
      <LogoutSvg />
      <span>Log Out</span>
    </LogoutBody>
  );
};

export default Logout;
