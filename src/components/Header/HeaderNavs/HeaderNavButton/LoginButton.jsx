import React from 'react';
import { Login, LoginButtons, Registration } from './HeaderNavButton.styled';

const LoginButton = ({ handleMenu }) => {
  return (
    <LoginButtons>
      <Login to="/login" onClick={() => handleMenu(false)}>
        Login
      </Login>
      <Registration to="/register" onClick={() => handleMenu(false)}>
        Registration
      </Registration>
    </LoginButtons>
  );
};

export default LoginButton;
