import { object, string, ref } from "yup";

const nameRegexp = /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/;
const emailRegexp =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegexp = /^[a-zA-Z0-9а-яА-Я]+$/;
const phoneRegexp = /^\+380\d{9}$/;
const cityRegexp = /^[а-яёіїєА-ЯЁІЇЄA-Za-z]+,?\s[а-яёіїєА-ЯЁІЇЄA-Za-z]+$/;


export const FisrtStepShema = object().shape({
  email: string()
    .required("Please Enter your email")
    .email()
    .matches(
      emailRegexp,
      "Enter your email <example@mail.com>"
    ),
  password:
  string()
  .required('Please Enter your password')
  .min(7)
  .max(32)
  .matches(
    passwordRegexp,
    "Password's length min 7, max 32, without spaces"
  ),
  confirmPassword: string()
  .required("Please confirm your password")
  .oneOf([ref("password")], "Passwords do not match"),

});

export const SecondStepShema = object().shape({
      name: string().required("Name is Required").matches(
          nameRegexp,
          "Please enter valid name"
        ),
      phone:string()
      .required('Phone is required')
      .matches(
        phoneRegexp,
        'Enter in format "+380XXXXXXXXX'
      ),
      city: string()
      .required('City is required')
      .matches(
        cityRegexp,
        'Enter your city, region'
      )

});

