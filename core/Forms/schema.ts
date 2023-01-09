import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export interface FreelancerInputs {
  fullName: string;
  email: string;
  contactNo: string;
  goodAt: string;
  level: string;
  time: string;
  address: string;
  experience: string;
  other: string;
}

export const FreelancerValidationSchema = Yup.object({
  fullName: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  contactNo: Yup.string()
    .matches(phoneRegExp, "Please enter your valid phone number")
    .required("Please enter your contact number"),
  address: Yup.string().required("Please enter your address"),
  level: Yup.string()
    .required("Please select your skill level")
    .typeError("Please select your skill level"),
  experience: Yup.string()
    .required("Please select your experience")
    .typeError("Please select your experience"),
  goodAt: Yup.string().required("Please enter your primary skills"),
  time: Yup.string().required("Please enter your preferred work time"),
  other: Yup.string()
    .when("level", {
      is: "other",
      then: Yup.string().required("Please provide your skill level"),
    })
    .required("Please enter your level"),
}).required();

export interface ContactInputs {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactValidationSchema = Yup.object({
  fullName: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  subject: Yup.string().required("Please enter your subject of message"),
}).required();

export interface GetStartedInputs {
  email: string;
  businessName: string;
  contactNo: string;
  address: string;
  panNumber: string;
  whyContactUs: string;
  brandColor: string;
  socialMediaLink: string;
  websiteLink: string;
  yourServices: string;
  servicesRequired: string;
  otherInfo: string;
}

export const GetStartedValidationSchema = Yup.object({
  businessName: Yup.string().required("Please enter your business name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  contactNo: Yup.string()
    .matches(phoneRegExp, "Please enter your valid phone number")
    .required("Please enter your contact number"),
  address: Yup.string().required("Please enter your address"),
  panNumber: Yup.string().required("Please enter your pan number"),
  whyContactUs: Yup.string().required("Please enter why you chose us"),
  brandColor: Yup.string().required("Please provide your brand color"),
  socialMediaLink: Yup.string().required("Please enter your social media link"),
  yourServices: Yup.string().required(
    "Please provide the services you provide"
  ),
  servicesRequired: Yup.string().required(
    "Please mention what services you require"
  ),
}).required();
