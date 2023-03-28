import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from 'components/SharedLayout';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { UserRoutes } from '../utils/userRoutes';
import { AuthRoutes } from '../utils/authRoutes';

const HomePage = lazy(() => import('pages/HomePage/'));
const NoticesItems = lazy(() =>
  import('../components/Notices/NoticesItems/NoticesItems')
);
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const NoticePage = lazy(() => import('pages/Notices/NoticePage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
const UserPage = lazy(() => import('pages/UserPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}/>
          <Route
            path="register"
            element={<AuthRoutes component={RegisterPage} redirectTo="/user" />}
          />
          <Route
            path="login"
            element={<AuthRoutes component={LoginPage} redirectTo="/user" />}
          />
          <Route path="news" element={<NewsPage />} />
          <Route path="notices" element={<NoticePage />}>
            <Route path=":type" element={<NoticesItems />} />
          </Route>
          <Route path="friends" element={<OurFriendsPage />} />
          <Route path="user" element={<UserRoutes component={UserPage} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
