import elements from './NoticesCategoriesNav.styled';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import noticesOperations from '../../redux/notices/noticesOperations';
import NoticesCategoriesList from "../NoticesCategoriesList/NoticesCategoriesList";

const { fetchNoticesByCategory } = noticesOperations;
const { NoticesCategoriesNavLink, Container } = elements;

const NoticesCategoriesNav = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [type, setType] = useState('notice')

  useEffect(() => {
    console.log('type', type)
  }, [type])

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
        // to="sell"
        onClick={() => setType( 'sell' )}
      >
        sell
      </NoticesCategoriesNavLink>
      <NoticesCategoriesNavLink
        // to="lost-found"
        onClick={() => setType('lostfound' )}
      >
        lost/found
      </NoticesCategoriesNavLink>
      <NoticesCategoriesNavLink
        // to="for-free"
        onClick={() => setType('forfree')}
      >
        in good hands
      </NoticesCategoriesNavLink>
      <NoticesCategoriesList type={type}/>
    </Container>

    // <Container>
    //   <NoticesCategoriesNavLink
    //     to="sell"
    //     onClick={() => handleCategoryFetch({ category: 'sell' })}
    //   >
    //     sell
    //   </NoticesCategoriesNavLink>
    //   <NoticesCategoriesNavLink
    //     to="lost-found"
    //     onClick={() => handleCategoryFetch({ category: 'lostfound' })}
    //   >
    //     lost/found
    //   </NoticesCategoriesNavLink>
    //   <NoticesCategoriesNavLink
    //     to="for-free"
    //     onClick={() => handleCategoryFetch({ category: 'forfree' })}
    //   >
    //     in good hands
    //   </NoticesCategoriesNavLink>
    //   <NoticesCategoriesList handleCategoryFetch={() => handleCategoryFetch}/>
    // </Container>
  );
};

export default NoticesCategoriesNav;
