import React from 'react';

import { NavsBody, NavMenu, NavButtons } from './HeaderNavMenu.styled';

import HeaderNavMenuItem from './HeaderNavMenuItem';
import LoginButton from '../HeaderNavButton/LoginButton';

import { useAuth } from '../../../../hooks/useAuth';
import AccountButton from '../HeaderNavButton/AccountButton';

const HeaderNavMenu = ({ handleMenu, menuOpen }) => {
  const navItems = [
    { href: '/news', title: 'News' },
    { href: '/notices/sell', title: 'Find pet' },
    { href: '/friends', title: 'Our friends' },
  ];

  const { isLoggedIn } = useAuth();

  return (
    <NavsBody className={menuOpen ? 'active' : ''}>
      <NavMenu className={menuOpen ? 'active' : ''}>
        {navItems.map(({ href, title }) => (
          <HeaderNavMenuItem
            key={href}
            href={href}
            title={title}
            handleMenu={handleMenu}
          />
        ))}
      </NavMenu>
      <NavButtons>
        {isLoggedIn ? (
          <AccountButton handleMenu={handleMenu} />
        ) : (
          <LoginButton handleMenu={handleMenu} />
        )}
      </NavButtons>
    </NavsBody>
  );
};

export default HeaderNavMenu;
