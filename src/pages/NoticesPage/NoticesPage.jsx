
import { 
  useState } from "react";

import NoticeFound from "components/NoticesPage/FoundPage";
import { Title } from "../../components/NoticesPage/NoticesPage.Style";
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import elements from './NoticesPage.styled';
import { Helmet } from 'react-helmet';

const { Section, Container } = elements;

const NoticesPage = () => { 
  
const [type, setType] = useState('');
 function handleTypeChange(newType) {
   setType(newType);
 }
  return (
    
      <Section>
        <Helmet>
          <title>Notices</title>
        </Helmet>
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
