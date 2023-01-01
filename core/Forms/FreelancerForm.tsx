import { useContext } from "react";
import OffCanvasComponent from "../../components/OffCanvasComponent/OffCanvasComponent";
import TextArea from "../../components/FormComponents/TextArea";
import TextInput from "../../components/FormComponents/TextInput";
import { OverlayContext } from "../../context/OverlayContext";
import { FreelancerInputs, FreelancerValidationSchema } from "./schema";
import { CgArrowLongRight, useForm, yupResolver } from "../Imports/imports";

const FreelancerForm = () => {
  const { showfreelanceForm, toggleFreelanceForm } = useContext(OverlayContext);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FreelancerInputs>({
    resolver: yupResolver(FreelancerValidationSchema),
  });
  const onSubmit = (data: FreelancerInputs) => console.log(data);
  return (
    <OffCanvasComponent
      title={"Freelancer ?"}
      show={showfreelanceForm}
      handleClose={toggleFreelanceForm}
    >
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
            name="contactNo"
            label="Contact Number"
            register={register}
            placeHolder="Enter Contact Number"
            error={errors.contactNo?.message}
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
            Lets Go <CgArrowLongRight className="ms-2 long-arrow" />
          </button>
        </form>
      </div>
    </OffCanvasComponent>
  );
};

export default FreelancerForm;
