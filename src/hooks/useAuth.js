import { useSelector } from 'react-redux';

import { getToken, getError, getIsLoggedIn } from '../redux/auth/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(getIsLoggedIn),
    error: useSelector(getError),
    token: useSelector(getToken),
  };
};
