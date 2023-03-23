import {
    Title, Image, Container,
    ContainerBtn, Text, BtnContact, Box,
    BtnAdd, Item, ContainerItem, Status, ContainerImg
} from "./ItemPetModal.Style"
import Vector from "components/ItemPetModal/image/Vector.svg";

export const ItemPetModal = ({ modalCard }) => {
    console.log("modalCard", modalCard)
    const { name, birthDate, breed, location, sex, imageURL,
        comments, price, sell, owner, title } = modalCard
// console.log('owner', owner)
// console.log('phone', phone)
    return (
        <Container>
            <ContainerImg>
                <Image src={imageURL} />
                {{ sell } && <Status> sell </Status>}
                {!{ sell } && <Status> in-good-hands </Status>}
            </ContainerImg>
            <Title>{title}</Title>
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
                {price && <div>Price:</div>
                }
                {price &&
                    <div>{price}</div>}
            </ContainerItem>
            <Text>Comments: {comments}</Text>
            <ContainerBtn>
                <BtnContact type="button" >Contact</BtnContact>
                <BtnAdd type="button">Add to <span ><img src={Vector}
                    className="Vector" alt="Vector" /></span></BtnAdd>
            </ContainerBtn>
        </Container>
    )
}