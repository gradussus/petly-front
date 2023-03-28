import React, { useEffect, useState } from 'react';

import NoticesItem from './NoticesItem';
import Loader from '../../loader/loader';

import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ItemPetModal } from '../ItemPetModal/ItemPetModal';
import { ModalSample } from '../../Modal/Modal';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-toastify';

import {
  fetchNoticesData,
  fetchNoticesUser,
  fetchPersonalNoticesUser,
  fetchUserFavorite,
  fetchModal,
  fetchSearchNotices,
} from '../../../utils/api/getNotices';

import { NoticesPreview } from '../Notices.styled';
import { NoticesItemsBody, NoticesLoader } from './NoticesItems.styles';

const NoticesItems = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const { token } = useAuth();

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? null;

  const [data, setData] = useState(null);
  const [favoriteData, setFavoriteData] = useState([]);
  const [noticesUser, setNoticesUser] = useState([]);
  const [status, setStatus] = useState('pending');
  const [showModal, setShowModal] = useState(false);
  const [noticeId, setNoticeId] = useState('');
  const [modalCard, setModalCard] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
    document.body.style.overflow = '';
  };

  const onChangeModal = () => toggleModal();
  const handleChange = id => setNoticeId(id);

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          setStatus('pending');

          const data = await fetchUserFavorite(token);
          setStatus('fulfilled');
          setFavoriteData(data);
        } catch {
          setStatus('rejected');
        }
      })();
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          setStatus('pending');
          const data = await fetchPersonalNoticesUser(token);

          setStatus('fulfilled');
          setNoticesUser(data);
        } catch {
          setStatus('rejected');
        }
      })();
    }
  }, [token]);

  useEffect(() => {
    if (noticeId) {
      (async () => {
        try {
          setStatus('pending');
          const data = await fetchModal(noticeId);
          setStatus('fulfilled');
          setModalCard(data);
        } catch {
          setStatus('rejected');
        }
      })();
    }
  }, [noticeId]);

  useEffect(() => {
    if (query?.length > 0) {
      (async () => {
        try {
          setStatus('pending');

          const data = await fetchSearchNotices(type, query);
          setStatus('fulfilled');
          setData(data);
        } catch {
          setStatus('rejected');
        }
      })();
      return;
    }

    if ((type === 'own' && !token) || (type === 'favorite' && !token)) {
      return navigate('/login');
    }

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
  }, [noticesUser, type, token, navigate, query]);

  useEffect(() => {
    if (type === 'favorite') {
      setData(favoriteData);
    }
  }, [favoriteData, type]);

  useEffect(() => {
    if (status === 'rejected') {
      toast.error(
        'Failed to fetch data, please reload the page or try again later',
        {
          theme: 'colored',
        }
      );
    }
  }, [status]);

  return (
    <>
      <NoticesItemsBody>
        {data?.map(item => (
          <NoticesItem
            key={item._id}
            id={item._id}
            title={item.title}
            category={item.category}
            name={item.name}
            birthDate={item.birthDate}
            imageURL={item.imageURL}
            breed={item.breed}
            location={item.location}
            price={item.price}
            comments={item.comments}
            favoriteData={favoriteData}
            setFavoriteData={setFavoriteData}
            onChangeModal={onChangeModal}
            handleChange={handleChange}
            noticesUser={noticesUser}
            setNoticesUser={setNoticesUser}
          />
        ))}
      </NoticesItemsBody>
      {status === 'pending' && (
        <NoticesLoader>
          <Loader />
        </NoticesLoader>
      )}

      {data?.length === 0 && status !== 'pending' && (
        <NoticesPreview>
          There are no pets in this section yet, add them soon!
        </NoticesPreview>
      )}
      {showModal && (
        <ModalSample toggleModal={toggleModal}>
          <ItemPetModal
            modalCard={modalCard}
            favoriteData={favoriteData}
            setFavoriteData={setFavoriteData}
            noticeId={noticeId}
            
          />
        </ModalSample>
      )}
    </>
  );
};

export default NoticesItems;
