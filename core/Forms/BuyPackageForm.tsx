import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { CgArrowLongRight } from "react-icons/cg";
import Checkbox from "../../components/FormComponents/Checkbox";
import FormSelect from "../../components/FormComponents/FormSelect";
import TextArea from "../../components/FormComponents/TextArea";
import TextInput from "../../components/FormComponents/TextInput";
import OffCanvasComponent from "../../components/OffCanvasComponent/OffCanvasComponent";
import { OverlayContext } from "../../context/OverlayContext";
import { PackageDetail } from "../Packages/Packages";
import { BuyPackageInputs, BuyPackageValidationSchema } from "./schema";

const BuyPackageForm = () => {
  const { showPackageBuyForm, togglePackageBuyForm, packageId, setPackage } =
    useContext(OverlayContext);
  const [allPackages, setAllPackages] = useState<PackageDetail[]>([]);
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
    reset({ packageId: packageId });
  }, [packageId, reset]);

  useEffect(() => {
    const getPackages = async () => {
      const packagesResponse = await axios.get(`packages/`);
      setAllPackages(packagesResponse.data);
    };
    getPackages();
  }, []);

  const onSubmit = (data: BuyPackageInputs) => console.log(data);

  const packageOptions = useMemo(
    () =>
      Array.isArray(allPackages)
        ? allPackages.map((packageDetail) => {
            return {
              label: packageDetail.packagename,
              value: packageDetail.id,
            };
          })
        : [],
    [allPackages]
  );

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
            name="packageId"
            label="Package"
            value={packageOptions.find(
              (c: any) => c.value === getValues("packageId")
            )}
            onChange={(val: any) => {
              setValue("packageId", val?.values);
            }}
            error={errors.packageId?.message}
            isDisabled
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
            name="whyContactUs"
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
            name="servicesRequired"
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

export default BuyPackageForm;
