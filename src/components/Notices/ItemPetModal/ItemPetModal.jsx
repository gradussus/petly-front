import {
  Title,
  Image,
  Container,
  ContainerBtn,
  Text,
  BtnContact,
  Box,
  BtnAdd,
  Item,
  ContainerItem,
  Status,
  ContainerImg,
} from './ItemPetModal.Style';
import Vector from '../ItemPetModal/image/Vector.svg';

export const ItemPetModal = ({ modalCard }) => {
  const {
    name,
    birthDate,
    breed,
    location,
    sex,
    imageURL,
    comments,
    price,
    category,    
    owner,
  } = modalCard;
  
  return (
    <Container>
      <ContainerImg>
        <Image src={imageURL} />
         <Status> {category} </Status>      
      </ContainerImg>
      <Title>Сute dog looking for a home</Title>
      <Box>
        <div>Name:</div>
        <div>{name}</div>
        <div>Birthday:</div>
        <div>{birthDate}</div>
        <div>Breed:</div>
        <div>{breed}</div>
        <div>Location:</div>
        <div>{location}</div>
        <div>The sex:</div>
        <div>{sex}</div>
      </Box>
      <ContainerItem>
        <div>Email:</div>
        <Item href="">{owner?.email}</Item>
        <div>Phone:</div>
        <Item href="">{owner?.phone}</Item>
        {price > 0 && ( 
          <div>
             <div>Price:</div>             
          </div>         
              
        )}
    {price > 0 && ( 
          <div>
            {price}$  
          </div>         
              
        )}
       
      </ContainerItem>
      <Text>Comments: {comments}</Text>
      <ContainerBtn>
        <BtnContact type="button">Contact</BtnContact>
        <BtnAdd type="button">
          Add to{' '}
          <span>
            <img src={Vector} className="Vector" alt="Vector" />
          </span>
        </BtnAdd>
      </ContainerBtn>
    </Container>
  );
};
