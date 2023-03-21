import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const UserRoutes = ({ component: Component, redirectTo = '/login' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};
