import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from 'components/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage/'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
const UserPage = lazy(() => import('pages/UserPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="news" element={<NewsPage />}></Route>
          <Route path="notices/:categoryName" element={<NoticesPage />}></Route>
          <Route path="friends" element={<OurFriendsPage />}></Route>
          <Route path="user" element={<UserPage />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
   
    </>
  );
};
