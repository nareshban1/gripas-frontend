import { useContext } from "react";
import Checkbox from "../../components/FormComponents/Checkbox";
import TextInput from "../../components/FormComponents/TextInput";
import OffCanvasComponent from "../../components/OffCanvasComponent/OffCanvasComponent";
import { OverlayContext } from "../../context/OverlayContext";
import { CgArrowLongRight, useForm, yupResolver } from "../Imports/imports";
import { FreelancerInputs, FreelancerValidationSchema } from "./schema";

const FreelancerForm = () => {
  const { showfreelanceForm, toggleFreelanceForm } = useContext(OverlayContext);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
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
            name="address"
            label="Address"
            register={register}
            placeHolder="Enter Address"
            error={errors.address?.message}
          />
          <TextInput
            type="text"
            name="phoneNo"
            label="Contact Number"
            register={register}
            placeHolder="Enter Contact Number"
            error={errors.phoneNo?.message}
          />
          <TextInput
            type="text"
            name="goodAt"
            label="What are you good at?"
            register={register}
            placeHolder="Good At?"
            error={errors.goodAt?.message}
          />
          <TextInput
            type="text"
            name="time"
            label="Preferred Freelancing Time?"
            register={register}
            placeHolder="Preferred Time?"
            error={errors.time?.message}
          />
          <Checkbox
            type="radio"
            name="level"
            options={[
              { label: "Beginner", value: "beginner" },
              { label: "Intermediate", value: "intermediate" },
              { label: "Professional", value: "professional" },
              { label: "Other", value: "other" },
            ]}
            label="Level of your Work?"
            register={register}
            error={errors.level?.message}
          />
          {watch("level") === "other" && (
            <TextInput
              type="text"
              name="other"
              register={register}
              placeHolder="Specify your level"
              error={errors.other?.message}
            />
          )}

          <Checkbox
            type="radio"
            name="experience"
            options={[
              { label: "1-6 Months", value: "1-6 Months" },
              { label: "6 Months - 1 Year", value: "6 Months - 1 Year" },
              { label: "1 - 3 Years", value: "1 - 3 Years" },
              { label: "3 or Above", value: "3 or Above" },
            ]}
            label="Experience Freelancing"
            register={register}
            error={errors.experience?.message}
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
