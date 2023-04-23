import { CgArrowLongRight, useForm, yupResolver } from "../Imports/imports";
import TextArea from "../../components/FormComponents/TextArea";
import TextInput from "../../components/FormComponents/TextInput";
import { ContactInputs, ContactValidationSchema } from "./schema";
import apiRequest from "../../components/Axios/api-request";
import { useBoolean } from "usehooks-ts";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactInputs>({
    resolver: yupResolver(ContactValidationSchema),
  });
  const onSubmit = (data: ContactInputs) => handleFormSubmission(data);
  const { value: isLoading, toggle: toggleLoading } = useBoolean(false);
  const handleFormSubmission = async (data: ContactInputs) => {
    const requestData = {
      ...data,
    };
    toggleLoading();
    const response = await apiRequest("forms/contact/", {
      method: "POST",
      requestBody: requestData,
    });
    if (response) {
      toggleLoading();
      reset();
      toast.success("Your message was submitted successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toggleLoading();
      toast.error("Error Submitting form", {
        position: toast.POSITION.TOP_CENTER,
      });
      reset();
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="text"
          name="name"
          label="Name"
          register={register}
          placeHolder="Enter Full Name"
          error={errors.name?.message}
        />
        <TextInput
          type="email"
          name="email"
          label="Email"
          register={register}
          placeHolder="Enter Email Address"
          error={errors.email?.message}
        />
        <TextInput
          type="text"
          name="subject"
          label="Subject"
          register={register}
          placeHolder="Enter Subject"
          error={errors.subject?.message}
        />

        <TextArea
          name="message"
          label="Any Message?"
          register={register}
          placeHolder="Enter Message"
        />
        <Button
          onClick={handleSubmit(onSubmit)}
          action="User Sent an Email"
          actionCategory="Engagement"
          actionlabel="User Sent an Email"
          hasArrow
          label="Send Message"
          disabled={isLoading}
          type="submit"
          className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
        />
      </form>
    </div>
  );
};

export default ContactForm;
