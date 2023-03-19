import { UserPageBody } from './userPage.styled';

import UserData from '../../components/UserPage/userData/userData';
import UserPets from '../../components/UserPage/userPets/userPets';

const UserPage = () => {
  return (
    <UserPageBody>
      <UserData />
      <UserPets />
    </UserPageBody>
  );
};
export default UserPage;