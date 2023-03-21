import { object, string } from "yup";

export const LoginValidation = object().shape({
    email: string()
      .required("Valid email required")
      .email("Please set the correct email"),
    password: string().min(6, "must be 6 characters long").max(16, "must be less than 16 characters").required("Required"),

  });