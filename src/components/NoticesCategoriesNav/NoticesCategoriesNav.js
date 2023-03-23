import elements from './NoticesCategoriesNav.styled';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import AddNoticeButton from 'components/NoticesPage/AddNoticeButton';
// import { ContainerBtn } from 'components/ItemPetModal/ItemPetModal.Style';

const { NoticesCategoriesNavLink, Container } = elements;

function NoticesCategoriesNav({ onTypeChanged, }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes('sell')) {
      onTypeChanged('sell');
    } else if (pathname.includes('lost-found')) {
      onTypeChanged('lost-found');
    } else if (pathname.includes('for-free')) {
      onTypeChanged('for-free');
    } else if (pathname.includes('own')) {
      onTypeChanged('own');
    } else if (pathname.includes('favorite')) {
      onTypeChanged('favorite');
    }
  });

  return (
    <>
      <Container>
       
        <NoticesCategoriesNavLink
          to="sell"
          onClick={() => onTypeChanged('sell')}
        >
          sell
        </NoticesCategoriesNavLink>
        <NoticesCategoriesNavLink
          to="lost-found"
          onClick={() => onTypeChanged('lost-found')}
        >
          lost/found
        </NoticesCategoriesNavLink>
        <NoticesCategoriesNavLink
          to="for-free"
          onClick={() => onTypeChanged('for-free')}
        >
          in good hands
        </NoticesCategoriesNavLink>
        <NoticesCategoriesNavLink 
        // to="own" 
        onClick={() => onTypeChanged('own')}>
          own
        </NoticesCategoriesNavLink>
        <NoticesCategoriesNavLink
          // to="favorite"
          onClick={() => onTypeChanged('favorite')}
        >
          favorite
        </NoticesCategoriesNavLink>
       
        
        
      </Container>
      <AddNoticeButton  />
    </>
  );
}

export default NoticesCategoriesNav;
