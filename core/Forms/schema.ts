import * as Yup from "yup";

export interface GetStartedInputs {
  fullName: string;
  email: string;
  contactNo: string;
  message: string;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const GetStartedValidationSchema = Yup.object({
  fullName: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  contactNo: Yup.string()
    .matches(phoneRegExp, "Please enter your valid phone number")
    .required("Please enter your contact number"),
}).required();

export interface FreelancerInputs {
  fullName: string;
  email: string;
  contactNo: string;
  message: string;
}

export const FreelancerValidationSchema = Yup.object({
  fullName: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  contactNo: Yup.string()
    .matches(phoneRegExp, "Please enter your valid phone number")
    .required("Please enter your contact number"),
}).required();
