import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CgArrowLongRight } from "react-icons/cg";
import { toast } from "react-toastify";
import { useBoolean } from "usehooks-ts";
import apiRequest from "../../components/Axios/api-request";
import Checkbox from "../../components/FormComponents/Checkbox";
import TextArea from "../../components/FormComponents/TextArea";
import TextInput from "../../components/FormComponents/TextInput";
import OffCanvasComponent from "../../components/OffCanvasComponent/OffCanvasComponent";
import { OverlayContext } from "../../context/OverlayContext";
import { CampaignGetStartedInputs, CampaignValidationSchema } from "./schema";
import Button from "../../components/Button/Button";
export interface ServicesSimple {
  id: number;
  name: string;
}

export interface OptionType {
  label: string;
  value: number;
}

const CampaignGetStartedForm = () => {
  const { showCampaignForm, toggleCampaignForm, campaign } =
    useContext(OverlayContext);
  const [allServices, setAllServices] = useState<OptionType[]>([]);
  const { value: isLoading, toggle: toggleLoading } = useBoolean(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<CampaignGetStartedInputs>({
    resolver: yupResolver(CampaignValidationSchema),
  });

  useEffect(() => {
    reset({
      campaign: campaign?.campaignId,
      campaignName: campaign?.campaignName,
    });
  }, [campaign, reset, showCampaignForm]);

  useEffect(() => {
    const getServices = async () => {
      const servicesResponse = await apiRequest<ServicesSimple[]>(
        `servicessimple/`
      );
      if (Array.isArray(servicesResponse)) {
        setAllServices(
          servicesResponse?.map((service) => {
            return {
              label: service.name,
              value: service.id,
            };
          })
        );
      }
    };
    getServices();
  }, []);

  const onSubmit = (data: CampaignGetStartedInputs) =>
    handleFormSubmission(data);

  const handleFormSubmission = async (data: CampaignGetStartedInputs) => {
    const requestData = {
      ...data,
    };
    toggleLoading();
    const response = await apiRequest("forms/campaign/", {
      method: "POST",
      requestBody: requestData,
    });

    if (response) {
      toggleLoading();
      reset();
      toast.success("Your request was submitted successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      toggleCampaignForm();
    } else {
      toggleLoading();
      toast.error("Error Submitting form", {
        position: toast.POSITION.TOP_CENTER,
      });
      reset();
    }
  };

  return (
    <OffCanvasComponent
      title={"Campaign Get Started"}
      show={showCampaignForm}
      handleClose={toggleCampaignForm}
    >
      <div className=" h-100">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <TextInput
            type="text"
            name="campaignName"
            label="Campaign Name"
            register={register}
            placeHolder="Enter Campaign Name"
            disabled
            error={errors.campaign?.message}
          />
          <TextInput
            type="text"
            name="businessName"
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
            name="phoneNo"
            label="Contact Number"
            register={register}
            placeHolder="Enter Contact Number"
            error={errors.phoneNo?.message}
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
            name="whyGripas"
            options={allServices}
            control={control}
            label="Why do You Choose Social Media Marketing?"
            register={register}
            error={errors.whyGripas?.message}
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
            name="website"
            label="Website"
            register={register}
            placeHolder="Enter Website Link"
            error={errors.website?.message}
          />
          <TextInput
            type="text"
            name="services"
            label="Your Services"
            register={register}
            placeHolder="Your Services"
            error={errors.services?.message}
          />
          <Checkbox
            name="servicesRequired"
            options={allServices}
            label="What Service Do You expect From us?"
            register={register}
            control={control}
            error={errors.servicesRequired?.message}
          />
          <TextArea
            name="info"
            label="Any Info?"
            register={register}
            placeHolder="Enter Info"
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            action="Get Started with Campaign"
            actionCategory="Engagement"
            actionlabel={`Get Started with ${campaign?.campaignName} campaign`}
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

export default CampaignGetStartedForm;
