import * as NavButton from './HeaderUserButtons.styled';
import { ReactComponent as UserIcon } from '../img/userIcon.svg';
export const LoginUserButton = () => {
  return (
    <NavButton.Button to="/user"><UserIcon/> User </NavButton.Button>
  );
};