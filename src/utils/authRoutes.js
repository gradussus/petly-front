import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const AuthRoutes = ({ component: Component, redirectTo }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
