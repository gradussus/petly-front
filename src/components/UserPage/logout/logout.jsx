import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../../redux/auth/operations';

import { ReactComponent as LogoutSvg } from './image/logout.svg';

import { LogoutBody } from './logout.styled';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogOut());
  };

  return (
    <LogoutBody>
      <LogoutSvg />
      <span onClick={() => handleLogout()}>Log Out</span>
    </LogoutBody>
  );
};

export default Logout;
