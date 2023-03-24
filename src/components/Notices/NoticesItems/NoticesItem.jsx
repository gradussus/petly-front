import React from 'react';
import {
  NoticesItemBody,
  NoticesItemImg,
  NoticesItemTitle,
  NoticesItemText,
  NoticesItemContent,
  NoticesItemBtn,
} from './NoticesItems.styles';
import NoticesFavorite from '../NoticesFavorite/NoticesFavorite';

const NoticesItem = ({
  imageURL,
  id,
  name,
  title,
  price,
  birthDate,
  location,
  breed,
  comments,
  favoriteData,
  setFavoriteData,
}) => {
  return (
    <NoticesItemBody>
      <NoticesFavorite
        favoriteData={favoriteData}
        id={id}
        setFavoriteData={setFavoriteData}
      />
      <NoticesItemImg>
        <img src={imageURL} alt="pet avatar" />
      </NoticesItemImg>
      <NoticesItemContent>
        <NoticesItemTitle>{comments}</NoticesItemTitle>
        <NoticesItemText>
          <div>Breed:</div>
          {breed}
        </NoticesItemText>
        <NoticesItemText>
          <div>Place:</div>
          {location}
        </NoticesItemText>
        <NoticesItemText>
          <div>Age:</div>
          {birthDate}
        </NoticesItemText>
        {price > 0 && (
          <NoticesItemText>
            <div>Price:</div>
            {price}$
          </NoticesItemText>
        )}
        <NoticesItemBtn>Learn more</NoticesItemBtn>
      </NoticesItemContent>
    </NoticesItemBody>
  );
};

export default NoticesItem;
