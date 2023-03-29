import { useEffect, useState } from 'react';
import { getFriends } from '../../utils/api/getUserData';
import { OurFriends } from '../../components/OurFriends/OurFriends';
import { FriendsPageBody, FriendsTitle } from './OurFriendsPage.styled';

import Loader from '../../components/loader/loader';
import { LoaderContainer } from './OurFriendsPage.styled';

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    async function fetch() {
      try {
        setIsLoading(true);
        const response = await getFriends();
        setFriends(response);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    fetch();
  }, []);

  return (
    <FriendsPageBody>
      <FriendsTitle>Our Friends</FriendsTitle>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <OurFriends friends={friends} />
      )}
    </FriendsPageBody>
  );
};

export default OurFriendsPage;
