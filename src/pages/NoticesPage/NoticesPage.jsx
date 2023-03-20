import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Title, Input, Found,
  BtnLost, BtnGood, BtnFavorite, BtnSell,
  BtnMy, BtnAdd, Btn, ContainerAdd,
  ContainerBtn, Img, Ul, ImgCart, Li, P, TabletBtnAdd
} from "./NoticesPage.Style";
import  cross  from "components/ItemPetModal/image/cross2.svg";
import  found  from "components/ItemPetModal/image/found.svg";
 const NAME_URL = 'https://petly-vxdt.onrender.com/notices'

const NoticesPage = () => {
  const [state, setState] = useState([]) 
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  useEffect(() => {
    window.onresize = () => {setWindowWidth(window.screen.width)};
  
    return () => {window.onresize = false};
}, [windowWidth]);
console.log("windowWidth", window.onresize)
const screen = windowWidth
console.log("screen", screen) 

  useEffect(() => {
    if(!state ) {
      return
    }
    const fetchNotice = async () => {        
      try {
        const {data} = await axios.get(`${NAME_URL}`)        
        setState(data)   
        console.log("data", state)    
      } catch (error) {
      }
    }
    fetchNotice()
  }, [])
 

  const pets = state
console.log("first", pets)
  return (
    <Container>
      <Title>Find your favorite pet</Title>
      <Found>
        <Input placeholder="Search"/> 
        <img src={found} alt="found" />       
      </Found>
      <ContainerBtn>
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

        </ContainerBtn>
        <Ul>
          { pets?.map(pet => 
            <Li key={pet.id}>              
              <ImgCart src={pet.imageURL} alt={pet.title}/>
              <div>
              <p>{pet.breed}</p>
              <p>{pet.location}</p>
              <p>{pet.birthDate}</p>
              </div>
              
             
            </Li>
          )}
        </Ul>
    </Container>
  )


};

export default NoticesPage;
