import React, { useState, useEffect } from 'react';

import { ReactComponent as FavoriteSvg } from './image/favoriteSvg.svg';

import {
  NoticesFavoriteBody,
  NoticesFavoriteBtn,
  NoticesFavoriteBtnBody,
  NoticesFavoriteTitle,
} from './NoticesFavorite.styled';
import { addFavorite, removeFavorite } from '../../../utils/api/getNotices';
import getFormattedCategory from 'utils/getFormattedCategory';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-toastify';

const NoticesFavorite = ({ id, favoriteData, setFavoriteData, category }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('pending');

  const { token } = useAuth();

  useEffect(() => {
    setIsFavorite(favoriteData.some(item => item._id === id));
  }, [favoriteData, id]);

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
      setFavoriteData(data);
    }
  }, [status, setFavoriteData, data]);

  const handleAddFavorite = () => {
    if (token) {
      (async () => {
        try {
          setStatus('pending');

          const data = await addFavorite(token, id);
          setData(data);
          setStatus('fulfilled');
        } catch {
          setStatus('rejected');
        }
      })();
    } else {
      toast.error('This feature is only available to an authorized user', {
        theme: 'colored',
      });
    }
  };

  const handleRemoveFavorite = () => {
    (async () => {
      try {
        setStatus('pending');

        const data = await removeFavorite(token, id);
        setData(data);
        setStatus('fulfilled');
      } catch {
        setStatus('rejected');
      }
    })();
  };

  return (
    <NoticesFavoriteBody>
      <NoticesFavoriteTitle>
        {getFormattedCategory(category)}
      </NoticesFavoriteTitle>
      <NoticesFavoriteBtnBody>
        <NoticesFavoriteBtn>
          {isFavorite ? (
            <FavoriteSvg
              fill={'#F59256'}
              onClick={() => handleRemoveFavorite()}
            />
          ) : (
            <FavoriteSvg onClick={() => handleAddFavorite()} />
          )}
        </NoticesFavoriteBtn>
      </NoticesFavoriteBtnBody>
    </NoticesFavoriteBody>
  );
};

export default NoticesFavorite;
