
import { 
  useState } from "react";

import NoticeFound from "components/NoticesPage/FoundPage";
import { Title } from "../../components/NoticesPage/NoticesPage.Style";
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import elements from './NoticesPage.styled';

const { Section, Container } = elements;



const NoticesPage = () => { 
  const [foundPets, setFoundPet] = useState('')
  // const handleAddPetsChange = () => {

  // }
  
const [type, setType] = useState('');
 function handleTypeChange(newType) {
   setType(newType);
 }
 console.log('foundPets', foundPets)
 const handleFoundPets = (kindPets) => setFoundPet(kindPets)

  return (
    
      <Section>
       
        <Title>Find your favorite pet</Title>
        <NoticeFound handleFoundPets={handleFoundPets}/>
        <Container>
          <NoticesCategoriesNav onTypeChanged={handleTypeChange} />
        </Container>
        <NoticesCategoriesList type={type} foundPets={foundPets} />
      </Section>
     
   
  );

};

export default NoticesPage;
