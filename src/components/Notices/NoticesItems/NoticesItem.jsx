import React from 'react';
import {
  NoticesItemBody,
  NoticesItemImg,
  NoticesItemTitle,
  NoticesItemText,
  NoticesItemContent,
  NoticesItemBtn,
} from './NoticesItems.styles';

const NoticesItem = ({
  imageURL,
  id,
  name,
  title,
  birthDate,
  location,
  breed,
}) => {
  return (
    <NoticesItemBody>
      <NoticesItemImg>
        <img src={imageURL} alt="pet avatar" />
      </NoticesItemImg>
      <NoticesItemContent>
        <NoticesItemTitle>Сute dog looking for a home</NoticesItemTitle>
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
      </NoticesItemContent>
      <NoticesItemBtn>Learn more</NoticesItemBtn>
    </NoticesItemBody>
  );
};

export default NoticesItem;
