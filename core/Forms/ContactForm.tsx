import { CgArrowLongRight, useForm, yupResolver } from "../Imports/imports";
import TextArea from "../../components/FormComponents/TextArea";
import TextInput from "../../components/FormComponents/TextInput";
import { ContactInputs, ContactValidationSchema } from "./schema";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactInputs>({
    resolver: yupResolver(ContactValidationSchema),
  });
  const onSubmit = (data: ContactInputs) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="text"
          name="fullName"
          label="Name"
          register={register}
          placeHolder="Enter First Name"
          error={errors.fullName?.message}
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
        <button
          type="submit"
          className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
        >
          Send Message
          <CgArrowLongRight className="ms-2 long-arrow" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
