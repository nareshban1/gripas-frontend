import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { CgArrowLongRight } from "react-icons/cg";
import { useBoolean } from "usehooks-ts";
import apiRequest from "../../components/Axios/api-request";
import Checkbox from "../../components/FormComponents/Checkbox";
import FormSelect from "../../components/FormComponents/FormSelect";
import TextArea from "../../components/FormComponents/TextArea";
import TextInput from "../../components/FormComponents/TextInput";
import OffCanvasComponent from "../../components/OffCanvasComponent/OffCanvasComponent";
import { OverlayContext } from "../../context/OverlayContext";
import { PackageDetail } from "../Packages/Packages";
import { BuyPackageInputs, BuyPackageValidationSchema } from "./schema";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";
export interface ServicesSimple {
  id: number;
  name: string;
}

export interface OptionType {
  label: string;
  value: number;
}

const BuyPackageForm = () => {
  const { showPackageBuyForm, togglePackageBuyForm, packageId, setPackage } =
    useContext(OverlayContext);
  const [allPackages, setAllPackages] = useState<PackageDetail[]>([]);
  const [allServices, setAllServices] = useState<OptionType[]>([]);
  const { value: isLoading, toggle: toggleLoading } = useBoolean(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    getValues,
    reset,
  } = useForm<BuyPackageInputs>({
    resolver: yupResolver(BuyPackageValidationSchema),
  });

  useEffect(() => {
    reset({ package: packageId });
  }, [packageId, reset, showPackageBuyForm]);

  useEffect(() => {
    const getPackages = async () => {
      const packagesResponse = await apiRequest<PackageDetail[]>(`packages/`);
      setAllPackages(packagesResponse ?? []);
    };
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
    getPackages();
    getServices();
  }, []);

  const onSubmit = (data: BuyPackageInputs) => handleFormSubmission(data);

  const packageOptions = useMemo(
    () =>
      Array.isArray(allPackages)
        ? allPackages.map((packageDetail) => {
            return {
              label: packageDetail.packageName,
              value: packageDetail.id,
            };
          })
        : [],
    [allPackages]
  );

  const handleFormSubmission = async (data: BuyPackageInputs) => {
    const requestData = {
      ...data,
    };
    toggleLoading();
    const response = await apiRequest("forms/buy-package/", {
      method: "POST",
      requestBody: requestData,
    });

    if (response) {
      toggleLoading();
      reset();
      toast.success("Your request was submitted successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      togglePackageBuyForm();
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
      title={"Buy Package"}
      show={showPackageBuyForm}
      handleClose={togglePackageBuyForm}
    >
      <div className=" h-100">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <FormSelect
            options={packageOptions}
            control={control}
            name="package"
            label="Package"
            value={packageOptions.find(
              (c: any) => c.value === getValues("package")
            )}
            onChange={(val: any) => {
              setValue("package", val?.values);
            }}
            error={errors.package?.message}
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
            actionlabel={`Buy ${
              packageOptions.find((c: any) => c.value === getValues("package"))
                ?.label
            } package`}
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

export default BuyPackageForm;
