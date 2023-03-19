import { useEffect, useState } from 'react';
import { getFriends } from './getFriends';
import { OurFriends } from '../../components/OurFriendsPage/OurFriends';

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);

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
    <>
      <h1>Our Friends</h1>
      <OurFriends friends={friends} />
    </>
  );
};

export default OurFriendsPage;
