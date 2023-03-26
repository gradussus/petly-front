import { FriendsList } from './OurFriends.styled';
import { Card } from './Card/Card';

export const OurFriends = ({ friends }) => {
  if (!Array.isArray(friends)) {
    return null;
  }

  // console.log(friends);

  return (
    <FriendsList>
      <Card friends={friends} />
    </FriendsList>
  );
};