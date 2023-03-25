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
import getPetAge from '../../../utils/getPetAge';

const NoticesItem = ({
  imageURL,
  id,
  title,
  category,
  price,
  birthDate,
  location,
  breed,
  favoriteData,
  setFavoriteData,
  onChangeModal,
  handleChange
}) => {
  return (
    <NoticesItemBody>
      <NoticesFavorite
        favoriteData={favoriteData}
        id={id}
        category={category}
        setFavoriteData={setFavoriteData}
      />
      <NoticesItemImg>
        <img src={imageURL} alt="pet avatar" />
      </NoticesItemImg>
      <NoticesItemContent>
        <NoticesItemTitle>{title}</NoticesItemTitle>
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
          {getPetAge(birthDate)}
        </NoticesItemText>
        {price > 0 && (
          <NoticesItemText>
            <div>Price:</div>
            {price}$
          </NoticesItemText>
        )}
        <NoticesItemBtn
        onClick={() => {onChangeModal(); handleChange(id)}}>
          Learn more</NoticesItemBtn>
      </NoticesItemContent>
    </NoticesItemBody>
  );
};

export default NoticesItem;
