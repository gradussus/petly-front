import { useState } from 'react';

import NoticeFound from 'components/NoticesPage/FoundPage';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { Title } from '../../components/NoticesPage/NoticesPage.Style';

import elements from './NoticesPage.styled';

const { Section, Container } = elements;

const NoticesPage = () => {
  // const [state, setState] = useState([])
  // const [windowWidth, setWindowWidth] = useState(window.screen.width);

  //   useEffect(() => {
  //     window.onresize = () => {setWindowWidth(window.screen.width)};

  //     return () => {window.onresize = false};
  // }, [windowWidth]);
  // console.log("windowWidth", window.onresize)
  // const screen = windowWidth
  // console.log("screen", screen)

  //   useEffect(() => {
  //     if(!state ) {
  //       return
  //     }
  //     const fetchNotice = async () => {
  //       try {
  //         const {data} = await axios.get(`${NAME_URL}`)
  //         setState(data)
  //         console.log("data", state)
  //       } catch (error) {
  //       }
  //     }
  //     fetchNotice()
  //   }, [])

  const [type, setType] = useState('');
  function handleTypeChange(newType) {
    setType(newType);
  }

  return (
    <Section>
      <Title>Find your favorite pet</Title>
      <NoticeFound />
      <Container>
        <NoticesCategoriesNav onTypeChanged={handleTypeChange} />
      </Container>
      <NoticesCategoriesList type={type} />
    </Section>

    // {/* <NoticesCategoriesList /> */}

    /*{ <ContainerBtn>

          <Btn>
            <BtnLost type="button">lost/found</BtnLost>
            <BtnGood type="button">in good hands</BtnGood>
            <BtnSell type="button">sell</BtnSell>
            <BtnFavorite type="button">favorite ads</BtnFavorite>
            <BtnMy type="button">my ads</BtnMy>
          </Btn>
          {(windowWidth < 768) ? (<BtnAdd type="button"><Img src={cross} alt="Cross" />
          <br/>Add pet</BtnAdd>):
          (<ContainerAdd><P>Add pet</P> <TabletBtnAdd type="button"><Img src={cross} alt="Cross" />
          <br/></TabletBtnAdd></ContainerAdd>
          )}


        </ContainerBtn> }*/
    // </>
  );
};

export default NoticesPage;
