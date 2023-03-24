import React, { useEffect, useState } from 'react';

import { getUserPets } from '../../../utils/api/getUserData';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-toastify';

import { NoUserPets, UserPetsBody, UserPetsHead } from './userPets.styled';
import { UserLoader } from '../userData/userData.styled';

import ItemPets from './itemPets/itemPets';
import AddPet from '../addPet/addPet';
import Loader from '../../loader/loader';

const UserPets = () => {
  const [data, setData] = useState(null);

  const [status, setStatus] = useState('pending');

  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        setStatus('pending');

        const data = await getUserPets(token);
        setStatus('fulfilled');
        setData(data);
      } catch {
        setStatus('rejected');
      }
    })();
  }, [token]);

  useEffect(() => {
    if (status === 'rejected') {
      toast.error('Unfortunately, we were unable to obtain user data.', {
        theme: 'colored',
      });
    }
  }, [status]);

  const removePet = id => {
    setData(data.filter(item => item._id !== id));
  };

  return (
    <UserPetsBody>
      <UserPetsHead>
        <div>My pets:</div>
        <AddPet />
      </UserPetsHead>
      {status === 'pending' ? (
        <UserLoader>
          <Loader />
        </UserLoader>
      ) : data?.length > 0 ? (
        <>
          {data?.map(
            ({ petName, _id, birthDate, imageURL, comments, breed }) => (
              <ItemPets
                key={_id}
                id={_id}
                image={imageURL}
                birth={birthDate}
                name={petName}
                breed={breed}
                comments={comments}
                removePet={removePet}
              />
            )
          )}
        </>
      ) : (
        <NoUserPets>
          You haven't added a pet yet, you have the option to add your furry
          friend!
        </NoUserPets>
      )}
    </UserPetsBody>
  );
};

export default UserPets;
