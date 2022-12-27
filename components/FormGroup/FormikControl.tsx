import React from "react";
import Checkbox from "./Checkbox";
import FileUpload from "./FileUpload";
import Input from "./Input";
import Radio from "./Radio";
import Textarea from "./Textarea";
import UploadComponent from "./UploadComponent";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "file":
      return <FileUpload {...rest} />;
    case "drag":
      return <UploadComponent {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
