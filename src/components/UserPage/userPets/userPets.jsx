import React, { useEffect, useState } from 'react';

import { createUserPets, getUserPets } from '../../../utils/api/getUserData';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-toastify';

import { NoUserPets, UserPetsBody, UserPetsHead } from './userPets.styled';
import { UserLoader } from '../userData/userData.styled';

import ItemPets from './itemPets/itemPets';
import AddPet from '../addPet/addPet';
import Loader from '../../loader/loader';

const UserPets = () => {
  const [data, setData] = useState([]);

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

  const handleAddPet = async (credentials, image) => {
    console.log(credentials);
    try {
      setStatus('pendingPet');

      const dataPet = await createUserPets(token, credentials, image);
      setStatus('fulfilledPet');
      setData(prev => [...prev, dataPet]);
    } catch {
      setStatus('rejectedPet');
    }
  };

  useEffect(() => {
    if (status === 'rejected') {
      toast.error('Unfortunately, we were unable to obtain user data.', {
        theme: 'colored',
      });
    }
    if (status === 'rejectedPet') {
      toast.error(
        'Unfortunately, we could not add a pet, please try again or repeat the request later.',
        {
          theme: 'colored',
        }
      );
    }
    if (status === 'fulfilledPet') {
      toast.success('Pet successfully added.');
    }
  }, [status]);

  const removePet = id => {
    setData(data.filter(item => item._id !== id));
  };

  return (
    <UserPetsBody>
      <UserPetsHead>
        <div>My pets:</div>
        <AddPet handleAddPet={handleAddPet} />
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
