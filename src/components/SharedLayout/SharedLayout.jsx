import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Suspense } from 'react';

import { Wrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
