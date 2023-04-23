import { CgArrowLongRight, useForm, yupResolver } from "../Imports/imports";
import TextArea from "../../components/FormComponents/TextArea";
import TextInput from "../../components/FormComponents/TextInput";
import { WebsiteFormInputs, WebsiteFormValidationSchema } from "./schema";
import apiRequest from "../../components/Axios/api-request";
import { useBoolean } from "usehooks-ts";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";

const WebsiteForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<WebsiteFormInputs>({
    resolver: yupResolver(WebsiteFormValidationSchema),
  });
  const onSubmit = (data: WebsiteFormInputs) => handleFormSubmission(data);
  const { value: isLoading, toggle: toggleLoading } = useBoolean(false);
  const handleFormSubmission = async (data: WebsiteFormInputs) => {
    const requestData = {
      ...data,
    };
    toggleLoading();
    const response = await apiRequest("forms/website-request/", {
      method: "POST",
      requestBody: requestData,
    });
    if (response) {
      toggleLoading();
      reset();
      toast.success("Your request was submitted successfully", {
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
        <div className="row">
          <div className="col">
            <TextInput
              type="text"
              name="name"
              label="Name"
              register={register}
              placeHolder="Enter Full Name"
              error={errors.name?.message}
            />
          </div>
          <div className="col">
            <TextInput
              type="text"
              name="phoneNo"
              label="Contact Number"
              register={register}
              placeHolder="Enter Contact Number"
              error={errors.phoneNo?.message}
            />
          </div>
        </div>
        <TextInput
          type="email"
          name="email"
          label="Email"
          register={register}
          placeHolder="Enter Email Address"
          error={errors.email?.message}
        />

        <TextArea
          name="details"
          label="Website Details"
          register={register}
          placeHolder="Enter Website Details"
        />
        <Button
          onClick={handleSubmit(onSubmit)}
          action="Request Website Quota"
          actionCategory="Engagement"
          actionlabel="Request Website Quota"
          hasArrow
          label="Request Quota"
          disabled={isLoading}
          type="submit"
          className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
        />
      </form>
    </div>
  );
};

export default WebsiteForm;
