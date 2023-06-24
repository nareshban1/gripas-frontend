import { useContext } from "react";
import { toast } from "react-toastify";
import { useBoolean } from "usehooks-ts";
import apiRequest from "../../components/Axios/api-request";
import Checkbox from "../../components/FormComponents/Checkbox";
import Radio from "../../components/FormComponents/Radio";
import TextInput from "../../components/FormComponents/TextInput";
import OffCanvasComponent from "../../components/OffCanvasComponent/OffCanvasComponent";
import { OverlayContext } from "../../context/OverlayContext";
import { CgArrowLongRight, useForm, yupResolver } from "../Imports/imports";
import { FreelancerInputs, FreelancerValidationSchema } from "./schema";
import Button from "../../components/Button/Button";

const FreelancerForm = () => {
  const { showfreelanceForm, toggleFreelanceForm } = useContext(OverlayContext);
  const { value: isLoading, toggle: toggleLoading } = useBoolean(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
  } = useForm<FreelancerInputs>({
    resolver: yupResolver(FreelancerValidationSchema),
  });
  const onSubmit = (data: FreelancerInputs) => handleFormSubmission(data);
  const handleFormSubmission = async (data: FreelancerInputs) => {
    const requestData = {
      ...data,
      skillLevel: data?.other ? data?.other : data?.skillLevel,
    };
    toggleLoading();
    const response = await apiRequest("forms/freelancer/", {
      method: "POST",
      requestBody: requestData,
    });
    if (response) {
      toggleLoading();
      reset();
      toggleFreelanceForm();
      toast.success("Your application was submitted successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toggleLoading();
      toggleFreelanceForm();
      toast.error("Error Submitting form", {
        position: toast.POSITION.TOP_CENTER,
      });
      reset();
    }
  };

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
            name="techStack"
            label="What are you good at?"
            register={register}
            placeHolder="Good At?"
            error={errors.techStack?.message}
          />
          <TextInput
            type="text"
            name="workTime"
            label="Preferred Freelancing Time?"
            register={register}
            placeHolder="Preferred Time?"
            error={errors.workTime?.message}
          />
          <Radio
            name="skillLevel"
            options={[
              { label: "Beginner", value: "beginner" },
              { label: "Intermediate", value: "intermediate" },
              { label: "Professional", value: "professional" },
              { label: "Other", value: "other" },
            ]}
            label="Level of your Work?"
            register={register}
            error={errors.skillLevel?.message}
          />
          {watch("skillLevel") === "other" && (
            <TextInput
              type="text"
              name="other"
              register={register}
              placeHolder="Specify your level"
              error={errors.other?.message}
            />
          )}

          <Radio
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
          <Button
            onClick={handleSubmit(onSubmit)}
            action="Freelancer Application Submitted"
            actionCategory="Engagement"
            actionlabel="Freelancer Application Submitted"
            hasArrow
            label="Lets Go"
            disabled={isLoading}
            type="submit"
            className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
          />
        </form>
      </div>
    </OffCanvasComponent>
  );
};

export default FreelancerForm;
