import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../../hooks/useAuth';

import {
  fetchPersonalNoticesUser,
  removePersonalNotice,
} from '../../../utils/api/getNotices';

import { DeleteButton, DeleteIcons } from './NoticesDelete.styled';

const NoticesDelete = ({ id, noticesUser, setNoticesUser }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('pending');

  const { token } = useAuth();

  useEffect(() => {
    setIsDeleting(noticesUser.some(item => item._id === id));
  }, [noticesUser, id]);

  useEffect(() => {
    if (status === 'rejected') {
      toast.error(
        'Something went wrong, please try again or reload the page.',
        {
          theme: 'colored',
        }
      );
    }
    if (status === 'fulfilled') {
      setNoticesUser(data);
    }
  }, [status, setNoticesUser, data]);

  const handleRemoveNotice = () => {
    (async () => {
      try {
        setStatus('pending');

        await removePersonalNotice(token, id);
        const data = await fetchPersonalNoticesUser(token, id);

        setData(data);
        setStatus('fulfilled');
      } catch {
        setStatus('rejected');
      }
    })();
  };

  return (
    <>
      {isDeleting ? (
        <DeleteButton onClick={() => handleRemoveNotice(id)}>
          Delete
          <DeleteIcons />
        </DeleteButton>
      ) : null}
    </>
  );
};

export default NoticesDelete;
