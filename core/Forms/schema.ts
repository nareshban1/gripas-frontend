import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export interface FreelancerInputs {
  name: string;
  email: string;
  phoneNo: string;
  techStack: string;
  skillLevel: string;
  workTime: string;
  address: string;
  experience: string;
  other: string;
}

export const FreelancerValidationSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  phoneNo: Yup.string()
    .matches(phoneRegExp, "Please enter your valid phone number")
    .required("Please enter your contact number"),
  address: Yup.string().required("Please enter your address"),
  skillLevel: Yup.string()
    .required("Please select your skill level")
    .typeError("Please select your skill level"),
  experience: Yup.string()
    .required("Please select your experience")
    .typeError("Please select your experience"),
  techStack: Yup.string().required("Please enter your primary skills"),
  workTime: Yup.string().required("Please enter your preferred work time"),
  other: Yup.string().when("level", {
    is: "other",
    then: Yup.string().required("Please provide your skill level"),
    otherwise: Yup.string().notRequired(),
  }),
}).required();

export interface ContactInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactValidationSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  subject: Yup.string().required("Please enter your subject of message"),
}).required();

export interface GetStartedInputs {
  email: string;
  businessName: string;
  phoneNo: string;
  address: string;
  panNumber: string;
  whyGripas: Array<number>;
  brandColor: string;
  socialMediaLink: string;
  website: string;
  services: string;
  servicesRequired: Array<number>;
  info: string;
}

export const GetStartedValidationSchema = Yup.object({
  businessName: Yup.string().required("Please enter your business name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  phoneNo: Yup.string()
    .matches(phoneRegExp, "Please enter your valid phone number")
    .required("Please enter your contact number"),
  address: Yup.string().required("Please enter your address"),
  panNumber: Yup.string().required("Please enter your pan number"),
  whyGripas: Yup.array()
    .min(1, "Please mention what services you require")
    .required("Please mention what services you require"),
  brandColor: Yup.string().required("Please provide your brand color"),
  socialMediaLink: Yup.string()
    .url()
    .required("Please enter your social media link"),
  website: Yup.string().url("Please enter a valid link"),
  services: Yup.string().required("Please provide the services you provide"),
  servicesRequired: Yup.array()
    .min(1, "Please mention what services you require")
    .required("Please mention what services you require"),
});

export interface BuyPackageInputs {
  package: string;
  email: string;
  businessName: string;
  phoneNo: string;
  address: string;
  panNumber: string;
  whyGripas: Array<number>;
  brandColor: string;
  socialMediaLink: string;
  website: string;
  services: string;
  servicesRequired: Array<number>;
  info: string;
}

export const BuyPackageValidationSchema = Yup.object({
  package: Yup.string().required("Please select a package"),
  businessName: Yup.string().required("Please enter your business name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  phoneNo: Yup.string()
    .matches(phoneRegExp, "Please enter your valid phone number")
    .required("Please enter your contact number"),
  address: Yup.string().required("Please enter your address"),
  panNumber: Yup.string().required("Please enter your pan number"),
  whyGripas: Yup.array()
    .min(1, "Please mention what services you require")
    .required("Please mention what services you require"),
  brandColor: Yup.string().required("Please provide your brand color"),
  socialMediaLink: Yup.string()
    .url()
    .required("Please enter your social media link"),
  services: Yup.string().required("Please provide the services you provide"),
  website: Yup.string().url("Please enter a valid link"),
  servicesRequired: Yup.array()
    .min(1, "Please mention what services you require")
    .required("Please mention what services you require"),
});

export interface WebsiteFormInputs {
  name: string;
  email: string;
  phoneNo: string;
  details: string;
}

export const WebsiteFormValidationSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  phoneNo: Yup.string()
    .matches(phoneRegExp, "Please enter your valid phone number")
    .required("Please enter your contact number"),
  details: Yup.string().required("Please  provide website details"),
}).required();
