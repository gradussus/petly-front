import { object, string, number } from "yup";

const nameRegexp = /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/;
const birthDate = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;
const breed = /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/;
const locationRegexp = /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?:[-\s]?[a-zA-Zа-яА-ЯіІїЇґҐ]+),\s[a-zA-Zа-яА-ЯіІїЇ'’\s-]+$/;

export const AddPetValidation = object().shape({
    category: string()
      .required("Category may be only sell, lost-found, for-free"),
    title: string()
    .required("Title is required")
    .min(2)
    .max(48),

    name: string().required("Name is Required").matches(
        nameRegexp,
        "Please enter valid name"
      ),
    birthDate:string()
    .required('Phone is required')
    .matches(
      birthDate,
      'Please enter a date as 20.12.2021'
    ),
    breed: string()
    .required('Breed is required')
    .matches(
      breed,
      'Only letters can be accepted'
    ),
    sex: string()
    .required('Sex is required'),
    location: string()
    .required('Location is required')
    .matches(locationRegexp, "Should be at least two words separated by string"),
    price: number().min(0),
    comments: string()
    .required("Comment is required")
    .min(8)
    .max(120),


  });
