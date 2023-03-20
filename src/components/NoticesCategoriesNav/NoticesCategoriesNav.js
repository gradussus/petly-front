import elements from './NoticesCategoriesNav.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import noticesOperations from '../../redux/notices/noticesOperations';

const { fetchNoticesByCategory } = noticesOperations;
const { NoticesCategoriesNavLink, Container } = elements;

const NoticesCategoriesNav = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname.includes('sell')) {
      dispatch(fetchNoticesByCategory({ category: 'sell' }));
    } else if (pathname.includes('lost-found')) {
      dispatch(fetchNoticesByCategory({ category: 'lostfound' }));
    } else if (pathname.includes('for-free')) {
      dispatch(fetchNoticesByCategory({ category: 'forfree' }));
    }
  });

  const handleCategoryFetch = filter => {
    dispatch(fetchNoticesByCategory(filter));
  };

  return (
    <Container>
      <NoticesCategoriesNavLink
        to="sell"
        onClick={() => handleCategoryFetch({ category: 'sell' })}
      >
        sell
      </NoticesCategoriesNavLink>
      <NoticesCategoriesNavLink
        to="lost-found"
        onClick={() => handleCategoryFetch({ category: 'lostfound' })}
      >
        lost/found
      </NoticesCategoriesNavLink>
      <NoticesCategoriesNavLink
        to="for-free"
        onClick={() => handleCategoryFetch({ category: 'forfree' })}
      >
        in good hands
      </NoticesCategoriesNavLink>
    </Container>
  );
};

export default NoticesCategoriesNav;
