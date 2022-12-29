import React from "react";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import OffCanvasComponent from "../../components/OffCanvasComponent/OffCanvasComponent";

import { OverlayContext } from "../../context/OverlayContext";
import { GetStartedInputs, GetStartedValidationSchema } from "./schema";
import TextInput from "../../components/FormComponents/TextInput";
import { useForm } from "react-hook-form";
import { CgArrowLongRight } from "react-icons/cg";
import TextArea from "../../components/FormComponents/TextArea";

const GetStarted = () => {
  const { showStartedForm, toggleStartedForm } = useContext(OverlayContext);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<GetStartedInputs>({
    resolver: yupResolver(GetStartedValidationSchema),
  });
  const onSubmit = (data: GetStartedInputs) => console.log(data);
  return (
    <OffCanvasComponent
      title={"Get Started"}
      show={showStartedForm}
      handleClose={toggleStartedForm}
    >
      <div className=" h-100">
        <form onSubmit={handleSubmit(onSubmit)} className="">
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

export default GetStarted;
