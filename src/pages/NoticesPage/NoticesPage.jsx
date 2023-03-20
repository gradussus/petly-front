import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import elements from './NoticesPage.styled';
import { Helmet } from 'react-helmet';
const { Section, Container } = elements;

const NoticesPage = () => {
  return (
    <Section>
      <Helmet>
        <title>Notices</title>
      </Helmet>
      <Container>
        <NoticesCategoriesNav />
        <NoticesCategoriesList />
      </Container>
    </Section>
  );
};
export default NoticesPage;
