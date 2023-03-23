import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../../redux/auth/operations';

import { ReactComponent as LogoutSvg } from './image/logout.svg';

import { LogoutBody } from './logout.styled';
import { useAuth } from '../../../hooks/useAuth';

const Logout = () => {
  const dispatch = useDispatch();

  const { token } = useAuth();

  const handleLogout = () => {
    dispatch(userLogOut(token));
  };

  return (
    <LogoutBody>
      <LogoutSvg />
      <span onClick={() => handleLogout()}>Log Out</span>
    </LogoutBody>
  );
};

export default Logout;
