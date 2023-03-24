import { useEffect, useState } from 'react';
import { getFriends } from '../../utils/api/getUserData';
import { OurFriends } from '../../components/OurFriends/OurFriends';
import { FriendsPageBody, FriendsTitle } from './OurFriendsPage.styled';

import Loader from '../../components/loader/loader'

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

  // console.log(friends)

  useEffect(() => {
    async function fetch() {
      try {
        setIsLoading(true);
        const response = await getFriends();
        setFriends(response);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetch();
  }, []);

  return (
    <FriendsPageBody>
      <FriendsTitle>Our Friends</FriendsTitle>
      {/* <OurFriends friends={friends} /> */}
      {isLoading ? <Loader /> : <OurFriends friends={friends} />}
    </FriendsPageBody>
  );
};

export default OurFriendsPage;
