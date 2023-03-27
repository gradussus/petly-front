import React, { useState, useEffect } from 'react';


import { BurgerMenu, HeaderBody } from './Header.styled';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';

import HeaderNavMenu from './HeaderNavs/HeaderNavMenu/HeaderNavMenu';

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = open => {
    setMenuOpen(open);
  };
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('active');
    }
    if (!menuOpen) {
      document.body.classList.remove('active');
    }
  }, [menuOpen]);
  return (
    <HeaderBody>
      <HeaderLogo handleMenu={handleMenu} />
      <HeaderNavMenu handleMenu={handleMenu} menuOpen={menuOpen} />
      <BurgerMenu
        onClick={() => handleMenu(!menuOpen)}
        className={menuOpen ? 'active' : ''}
      >
        <span></span>
      </BurgerMenu>
    </HeaderBody>

  );
};
