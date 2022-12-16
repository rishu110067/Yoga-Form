import * as Yup from "yup";

export const userSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.string().min(10).max(10).required("Please enter your phone number"),
  age: Yup.number().min(18).max(65).required("Please enter your age"),
  month: Yup.string(),
  batch: Yup.string(),
});
