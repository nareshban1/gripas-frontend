import React from "react";
import { useContext } from "react";
import OffCanvasComponent from "../../components/OffCanvasComponent/OffCanvasComponent";
import { OverlayContext } from "../../context/OverlayContext";
import { GetStartedInputs, GetStartedValidationSchema } from "./schema";
import TextInput from "../../components/FormComponents/TextInput";
import { CgArrowLongRight, useForm, yupResolver } from "../Imports/imports";

import TextArea from "../../components/FormComponents/TextArea";
import Checkbox from "../../components/FormComponents/Checkbox";

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
  const onSubmit = (data: GetStartedInputs) => data;
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
            name="business"
            label="Business Name"
            register={register}
            placeHolder="Enter Business Name"
            error={errors.businessName?.message}
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
            name="panNumber"
            label="PAN?VAT Number"
            register={register}
            placeHolder="Enter PAN/VAT Number"
            error={errors.panNumber?.message}
          />
          <Checkbox
            type="checkbox"
            name="level"
            options={[
              { label: "Sales", value: "Sales" },
              {
                label: "Marketing and Branding",
                value: "Marketing and Branding",
              },
            ]}
            label="Why do You Choose Social Media Marketing?"
            register={register}
            error={errors.whyContactUs?.message}
          />
          <TextInput
            type="text"
            name="brandColor"
            label="Brand Color"
            register={register}
            placeHolder="Provide Color Code"
            error={errors.brandColor?.message}
          />
          <TextInput
            type="text"
            name="socialMediaLink"
            label="Social Media Link"
            register={register}
            placeHolder="Enter Social Media Link"
            error={errors.socialMediaLink?.message}
          />
          <TextInput
            type="text"
            name="websiteLink"
            label="Website"
            register={register}
            placeHolder="Enter Website Link"
            error={errors.websiteLink?.message}
          />
          <TextInput
            type="text"
            name="yourServices"
            label="Your Services"
            register={register}
            placeHolder="Your Services"
            error={errors.yourServices?.message}
          />
          <Checkbox
            type="checkbox"
            name="level"
            options={[
              {
                label: "Social Media Marketing",
                value: "Social Media Marketing",
              },
              { label: "Graphic Designing", value: "Graphic Designing" },
              { label: "Website", value: "Website" },
              { label: "Content Marketing", value: "Content Marketing" },
              { label: "Video Ads", value: "Video Ads" },
            ]}
            label="What Service Do You expect From us?"
            register={register}
            error={errors.servicesRequired?.message}
          />
          <TextArea
            name="other"
            label="Any Info?"
            register={register}
            placeHolder="Enter Info"
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
