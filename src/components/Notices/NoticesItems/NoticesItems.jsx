import React, { useEffect, useState } from 'react';

import NoticesItem from './NoticesItem';

import { useParams } from 'react-router-dom';
import { NoticesItemsBody, NoticesLoader } from './NoticesItems.styles';
import { toast } from 'react-toastify';
import {
  fetchNoticesData,
  fetchNoticesUser,
} from '../../../utils/api/getNotices';
import { useAuth } from '../../../hooks/useAuth';
import Loader from '../../loader/loader';

const NoticesItems = () => {
  const { type } = useParams();
  const { token } = useAuth();

  const [data, setData] = useState(null);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    if (type === 'sell' || type === 'lost-found' || type === 'for-free') {
      (async () => {
        try {
          setStatus('pending');

          const data = await fetchNoticesData(type);
          setStatus('fulfilled');
          setData(data);
        } catch {
          setStatus('rejected');
        }
      })();
    }

    if (type === 'own' || type === 'favorite') {
      (async () => {
        try {
          setStatus('pending');

          const data = await fetchNoticesUser(token, type);
          setStatus('fulfilled');
          setData(data);
        } catch {
          setStatus('rejected');
        }
      })();
    }
  }, [type, token]);

  useEffect(() => {
    if (status === 'rejected') {
      toast.error('Error', {
        theme: 'colored',
      });
    }
  }, [status]);

  return (
    <>
      <NoticesItemsBody>
        {status === 'fulfilled' &&
          data?.map(
            ({ _id, title, name, birthDate, imageURL, location, breed }) => (
              <NoticesItem
                key={_id}
                id={_id}
                title={title}
                name={name}
                birthDate={birthDate}
                imageURL={imageURL}
                breed={breed}
                location={location}
              />
            )
          )}
      </NoticesItemsBody>
      {status === 'pending' && (
        <NoticesLoader>
          <Loader />
        </NoticesLoader>
      )}
    </>
  );
};

export default NoticesItems;
