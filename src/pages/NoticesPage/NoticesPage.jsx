import { useState } from 'react';

import NoticeFound from 'components/NoticesPage/FoundPage';
import NoticesCategoriesNav from 'components/NoticesPage/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesPage/NoticesCategoriesList/NoticesCategoriesList';

import { Title } from '../../components/NoticesPage/NoticesPage.Style';

import elements from './NoticesPage.styled';
import { useParams } from 'react-router-dom';

const { Section, Container } = elements;

const NoticesPage = () => {
  const [type, setType] = useState('');
  function handleTypeChange(newType) {
    setType(newType);
  }

  const test = useParams();

  return (
    <Section>
      <Title>Find your favorite pet</Title>
      <NoticeFound />
      <Container>
        <NoticesCategoriesNav onTypeChanged={handleTypeChange} />
      </Container>
      <NoticesCategoriesList type={type} />
    </Section>
  );
};

export default NoticesPage;
