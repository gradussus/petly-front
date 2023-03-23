import React, { useEffect, useState } from 'react';

import { fetchUserData } from '../../../utils/api/getUserData';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-toastify';

import {
  UserDataBody,
  UserDataContent,
  UserDataHead,
  UserLoader,
} from './userData.styled';

import UserImage from './userImage/userImage';
import UserForm from '../userForm/userForm';
import Loader from '../../loader/loader';

const UserData = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('pending');

  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        setStatus('pending');

        const data = await fetchUserData(token);
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

  return (
    <UserDataBody>
      <UserDataHead>My information:</UserDataHead>
      <UserDataContent>
        <UserImage image={data?.avatarURL} />
        {status === 'fulfilled' ? (
          <UserForm
            userBirthDate={data?.birthDate}
            userCity={data?.city}
            userEmail={data?.email}
            userName={data?.name}
            userPhone={data?.phone}
          />
        ) : (
          <UserLoader>
            <Loader />
          </UserLoader>
        )}
      </UserDataContent>
    </UserDataBody>
  );
};

export default UserData;
