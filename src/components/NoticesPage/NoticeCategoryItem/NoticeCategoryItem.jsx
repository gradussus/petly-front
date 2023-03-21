import { ReactComponent as FavoriteIcon } from './tmp/icons-heart-default.svg';
import { ReactComponent as InFavoriteIcon } from './tmp/icons-heart-variant1.svg';

import {
  CardWrapper,
  CategoryOverlay,
  Img,
  Category,
  HeartButton,
  Title,
  NoticeList,
  NoticeItem,
  NoticeItemName,
  BtnOverlay,
  LearnMoreButton,
  DeleteButton,
} from './NoticeCategoryItem.styled';

//Форматирует дату рождения пета
const getPetAge = dateString => {
  const today = new Date();
  const [day, month, year] = dateString.split('.');
  const inputDate = new Date(`${year}-${month}-${day}`);

  const diffTime = Math.abs(today - inputDate);
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365);
  const diffMonths = diffYears * 12;

  if (diffYears >= 1) {
    return `${Math.floor(diffYears)} year${
      Math.floor(diffYears) > 1 ? 's' : ''
    }`;
  } else {
    return `${Math.floor(diffMonths)} month${
      Math.floor(diffMonths) > 1 ? 's' : ''
    }`;
  }
};

// Форматирует название категории
const categorySelector = category => {
  switch (category) {
    case 'in-good-hands':
      return 'in good hands';
    case 'lost-found':
      return 'lost/found';
    default:
      return 'sell';
  }
};

// ! Пример объекта для теста
// const noticeData = {
//   _id: '64170d5b224ab824d2bd485f',
//   category: 'in-good-hands',
//   title: 'Buldog',
//   name: 'Test e',
//   birthDate: '16.12.2020',
//   breed: 'Pomeranian',
//   sex: 'female',
//   location: 'Dublin, Scotland',
//   comments: 'The swettyiest dog ever',
//   price: 1,
//   owner: {
//     _id: '6415b1f36140bcbc04c3a518',
//     email: 'polly@ukr.net',
//     phone: '0979482826',
//   },
//   imageURL:
//     'https://images.pexels.com/photos/13240748/pexels-photo-13240748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   createdAt: '2023-03-19T13:25:47.743Z',
//   updatedAt: '2023-03-19T13:25:47.743Z',
// };

// Компонент должен принять в виде пропов: объекта и двух функций
const NoticeCategoryItem = ({ noticeData, handleAddToFavorites, handleLearnMore }) => {
  const {
    _id: id,
    category,
    title,
    birthDate,
    breed,
    location,
    price,
    imageURL,
  } = noticeData;
  const userIsLoggedIn = true;
  const noticeIsFavorite = false;
  const petAge = getPetAge(birthDate);
  const formattedCategory = categorySelector(category);

  const handleAddToFavoritesClick = () => {
    if (userIsLoggedIn) {
      handleAddToFavorites(id);
    } else {
      alert('You need to be logged in to use this feature.'); // TODO: Заменить на нотификацию библиотеки
    }
  };

  return (
    <CardWrapper>
      <Img src={imageURL} alt="pet" />
      <CategoryOverlay>
        <Category>{formattedCategory}</Category>
      </CategoryOverlay>
      <HeartButton type="button" onClick={handleAddToFavoritesClick}>
        {noticeIsFavorite ? <InFavoriteIcon /> : <FavoriteIcon />}
      </HeartButton>
      <Title>{title}</Title>
      <NoticeList>
        <NoticeItem>
          <NoticeItemName>Breed:</NoticeItemName>
          {breed}
        </NoticeItem>
        <NoticeItem>
          <NoticeItemName>Place:</NoticeItemName>
          {location}
        </NoticeItem>
        <NoticeItem>
          <NoticeItemName>Age:</NoticeItemName>
          {petAge}
        </NoticeItem>
        {price > 0 && (
          <NoticeItem>
            <NoticeItemName>Price:</NoticeItemName>
            {price}$
          </NoticeItem>
        )}
      </NoticeList>
      <BtnOverlay>
        <LearnMoreButton
          type="button"
          onClick={() => handleLearnMore(noticeData)}
        >
          Learn more
        </LearnMoreButton>
        {noticeIsFavorite && (
          <DeleteButton type="button" onClick={() => handleAddToFavorites(id)}>
            Delete
          </DeleteButton>
        )}
      </BtnOverlay>
    </CardWrapper>
  );
};

export default NoticeCategoryItem;
