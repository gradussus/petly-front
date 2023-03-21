import { object, string, ref } from "yup";

export const RegisterValidation = object().shape({
    email: string()
      .required("Valid email required")
      .email("Please set the correct email"),
    password: string().min(6, "must be 6 characters long").max(16, "must be less than 16 characters").required("Required"),
    confirmPassword: string()
      .required("Please confirm your password")
      .oneOf([ref("password")], "Passwords do not match"),
    name: string().required("Name is Required"),
    phone:string()
    .required('Phone is required')
    .matches(/^\+380\d{9}$/, 'Must start +380 and have 12 characters'),
    city: string().required('City is required'),

  });