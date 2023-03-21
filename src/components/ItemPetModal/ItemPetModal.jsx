import {
    Title, Image, Container,
    ContainerBtn, Text, BtnContact, Box,
    BtnAdd, Item, ContainerItem, Status, ContainerImg
} from "./ItemPetModal.Style"
import Vector from "components/ItemPetModal/image/Vector.svg";

// const state = `{
//     "category": "in-good-hands",
//     "title": "cat for free",
//     "name": "cat",
//     "birthDate": "12.12.2015",
//     "breed": "persian",
//     "sex": "male",
//     "location": "peace, sun",
//     "comments": "best cat ever",
//     "owner": "6399a977c2931ae12be83fdd",
//     "imageURL": "https://kor.ill.in.ua/m/610x385/2722809.jpg",
//     "_id": "6414dac77300b8d34ce9480a",
//     "email": "adfsfdhg@gmail.com",
//     "Phone": "12-34-46-78",
//     "createdAt": "2023-03-17T21:25:27.424Z",
//     "updatedAt": "2023-03-17T21:25:27.424Z"
// }`

const state = `{
    "category": "sell",
    "title": "dog",
    "name": "Boss",
    "birthDate": "12.12.2022",
    "breed": "none",
    "sex": "female",
    "location": "peace, sun",
    "comments": "best dog ever",
    "price": 45,
    "owner": "6399a977c2931ae12be83fdd",
    "imageURL": "https://aussiedlerbote.de/wp-content/uploads/2022/04/mongrel.jpg",
    "email": "adfsfdhg@gmail.com",
    "Phone": "12-34-46-78",
    "_id": "6414dbe17300b8d34ce9480c",
    "createdAt": "2023-03-17T21:30:09.308Z",
    "updatedAt": "2023-03-17T21:30:09.308Z"
}`

export const ItemPetModal = () => {
    const data = JSON.parse(state)
    const { name, birthDate, breed, location, sex, email, Phone, imageURL,
        comments, price, sell } = data

    return (
        <Container>
            <ContainerImg>
                <Image src={imageURL} />
                {{ sell } && <Status> sell </Status>}
                {!{ sell } && <Status> in-good-hands </Status>}
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
                <Item href="">{email}</Item>
                <div>Phone:</div>
                <Item href=""> {Phone}</Item>
                {price && <div>Price:</div>
                }
                {price &&
                    <div>{price}</div>}
            </ContainerItem>
            <Text>Comments: {comments}</Text>
            <ContainerBtn>
                <BtnContact type="button" >Contact</BtnContact>
                <BtnAdd type="button">Add to <span ><img src={Vector} className="Vector" alt="Vector" /></span></BtnAdd>
            </ContainerBtn>
        </Container>
    )
}