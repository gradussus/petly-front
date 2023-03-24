import  found  from "components/ItemPetModal/image/found.svg";
import { Formik, ErrorMessage } from 'formik';
import  * as Yup from 'yup';
import {   FoundImg, Label  } from "./NoticesPage.Style";
import { BtnSubmit, Input, Forma } from "./FoundPage.Style";
// import { useState } from "react";

const schema = Yup.object().shape({
  namePets: Yup.string().min(3, 'Too Short!').max(10, 'Too Long!').required('Required'),  
});

const NoticeFound = ({handleFoundPets}) => {
 
//  const [kindPets, setKindPets] = useState('')

const initialValues = {
  namePets: ''
}
const handelSubmit = (values, {resetForm
}) =>{
  
  const kindPets = values
  // setKindPets(kindPets)
  handleFoundPets(kindPets)
// console.log('actions', actions)
resetForm()


console.log('kindPets',  kindPets)
}
    return (
      <Formik initialValues={initialValues}
      onSubmit={handelSubmit} validationSchema={schema} >
        <Forma>
          <Label>
          <Input placeholder="Search" type="text" name="namePets" /> 
          <ErrorMessage name="namePets" />
          <BtnSubmit type="submit"><FoundImg src={found} alt="found" /></BtnSubmit>          
          </Label>              
      </Forma>
      </Formik>
        
    )
};
export default NoticeFound;