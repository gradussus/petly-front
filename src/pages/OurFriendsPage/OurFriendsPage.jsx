import { useEffect, useState } from 'react';
import { getFriends } from './getFriends';
import { OurFriends } from '../../components/OurFriends/OurFriends';
import { FriendsPageBody, FriendsTitle } from './OurFriendsPage.styled';

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);

  // console.log(friends)

  useEffect(() => {
    async function fetch() {
      try {
        const response = await getFriends();
        setFriends(response);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetch();
  }, []);

  return (
    <FriendsPageBody>
      <FriendsTitle>Our Friends</FriendsTitle>
      <OurFriends friends={friends} />
    </FriendsPageBody>
  );
};

export default OurFriendsPage;
