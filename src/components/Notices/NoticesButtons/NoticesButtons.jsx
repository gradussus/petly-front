import React from 'react';
import {
  NoticesButtonsBody,
  NoticesButtonsItem,
} from './NoticesButtons.styled';
import { useAuth } from '../../../hooks/useAuth';
import { Navigate, useParams } from 'react-router-dom';

const NoticesButtons = () => {
  const { isLoggedIn } = useAuth();

  const location = useParams();

  if (!location?.type) {
    return <Navigate to={'/sell'} />;
  }

  const buttonsItems = [
    { title: 'sell', href: 'sell', private: false },
    { title: 'lost/found', href: 'lost-found', private: false },
    { title: 'in good hands', href: 'for-free', private: false },
    { title: 'favorite ads', href: 'favorite', private: true },
    { title: 'my ads', href: 'own', private: true },
  ];

  const visibleItems = isLoggedIn
    ? buttonsItems
    : buttonsItems.filter(item => item.private !== true);

  return (
    <NoticesButtonsBody>
      {visibleItems.map(({ title, href }) => (
        <NoticesButtonsItem to={href} key={href}>
          {title}
        </NoticesButtonsItem>
      ))}
    </NoticesButtonsBody>
  );
};

export default NoticesButtons;
