import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../../../hooks/useAuth';
import { addFavorite, removeFavorite } from '../../../utils/api/getNotices';
import { ReactComponent as FavoriteSvg } from './image/favorite-icon.svg';

import {
  Title,
  Image,
  Container,
  ContainerBtn,
  Text,
  BtnContact,
  Box,
  BtnAdd,
  Item,
  Status,
  ContainerImg,
} from './ItemPetModal.Style';

export const ItemPetModal = ({
  modalCard,
  favoriteData,
  setFavoriteData,
  noticeId,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('pending');

  const { token } = useAuth();

  const {
    title,
    name,
    birthDate,
    breed,
    location,
    sex,
    imageURL,
    comments,
    price,
    category,
    owner,
  } = modalCard;

  useEffect(() => {
    setIsFavorite(favoriteData.some(item => item._id === noticeId));
  }, [favoriteData, noticeId]);

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

          const data = await addFavorite(token, noticeId);
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

        const data = await removeFavorite(token, noticeId);
        setData(data);
        setStatus('fulfilled');
      } catch {
        setStatus('rejected');
      }
    })();
  };

  return (
    <Container>
      <ContainerImg>
        <Image src={imageURL} />
        <Status> {category} </Status>
      </ContainerImg>
      <Title>{title}</Title>
      <Box>
        <div>Name:</div>
        <div>{name}</div>
        <div>Birthday:</div>
        <div>{birthDate}</div>
        <div>Breed:</div>
        <div>{breed}</div>
        <div>Location:</div>
        <div>{location}</div>
        <div>The sex:</div>
        <div>{sex}</div>
        <div>Email:</div>
        <Item href={`mailto:${owner?.email}`}>{owner?.email}</Item>
        <div>Phone:</div>
        <Item href={`tel:${owner?.phone}`}>{owner?.phone}</Item>
        {price > 0 && (
          <div>
            <div>Price:</div>
          </div>
        )}
        {price > 0 && <div>{price}$</div>}
      </Box>
      <Text>Comments: {comments}</Text>
      <ContainerBtn>

        <BtnContact href={`tel:${owner?.phone}`}>Contact</BtnContact>

        {isFavorite ? (
          <BtnAdd type="button" onClick={() => handleRemoveFavorite()}>
            Add to <FavoriteSvg fill={'#F59256'} />
          </BtnAdd>
        ) : (
          <BtnAdd type="button" onClick={() => handleAddFavorite()}>
            Add to <FavoriteSvg />
          </BtnAdd>
        )}
      </ContainerBtn>
    </Container>
  );
};
