import React from 'react';

import { NavItem } from './HeaderNavMenu.styled';

const HeaderNavMenuItem = ({ href, title, handleMenu }) => {
  return (
    <NavItem to={href} onClick={() => handleMenu(false)}>
      {title}
    </NavItem>
  );
};

export default HeaderNavMenuItem;
