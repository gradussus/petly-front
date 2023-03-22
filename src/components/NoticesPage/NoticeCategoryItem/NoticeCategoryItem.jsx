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
  DetailsWrapper,
  DeleteIcons
} from './NoticeCategoryItem.styled';

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

const categorySelector = category => {
  switch (category) {
    case 'for-free':
      return 'in good hands';
    case 'lost-found':
      return 'lost/found';
    default:
      return 'sell';
  }
};

const NoticeCategoryItem = ({
  noticeData,
  handleAddToFavorites,
  onChangeModal,
  handleChange,
}) => {
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
  const noticeIsFavorite = true;
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
      <DetailsWrapper>
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
            onClick={() => {
              onChangeModal();
              handleChange(id);
            }}
          >
            Learn more
          </LearnMoreButton>
          {noticeIsFavorite && (
            <DeleteButton
              type="button"
              onClick={() => handleAddToFavorites(id)}
            >
              Delete
              <DeleteIcons />
            </DeleteButton>
          )}
        </BtnOverlay>
      </DetailsWrapper>
    </CardWrapper>
  );
};

export default NoticeCategoryItem;
