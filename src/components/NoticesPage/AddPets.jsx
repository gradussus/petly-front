import { Formik, ErrorMessage } from 'formik';
import { BtnSubmit, Input, Forma, Label, BtnNext } from "./AddPets/AddPets";

const AddPets = () => {
    const initialValues = {
        name: '',
        data: '',
        breed: ''

      }
      
    const handelSubmit = (values, ) =>{
    //   const kindPets = values
    //   handleFoundPets(kindPets)
    // console.log('actions', actions)
    // resetForm()
    console.log('values', values)
    }
    const handleChange = ({resetForm
    }) => (
        resetForm()
    )

    return (
        <Formik  onSubmit={handelSubmit} initialValues={initialValues}>
            <Forma>
                <Label>
                    Name pet
                </Label>
                <Input placeholder="Search" type="text" name="namePet" />
                <ErrorMessage name="namePet" />
                <Label>
                    Date of birth
                </Label>
                <Input placeholder="Search" type="text" name="date" />
                <ErrorMessage name="date" />
                <Label>
                    Breed
                </Label>
                <Input placeholder="Search" type="text" name="breed" />
                <ErrorMessage name="breed" />
                <BtnNext type="submit">Next</BtnNext>
                <BtnSubmit type="button" onClick={handleChange}>close</BtnSubmit>
            </Forma>
        </Formik>
    )
};


export default AddPets;