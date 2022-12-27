import { ErrorMessage } from "formik";
import React from "react";
import TextError from "./TextError";

const FileUpload = (props) => {
  const { label, name, ref, setFieldValue, ...rest } = props;
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        type-="file"
        aria-label="i"
        ref={ref}
        onChange={(event) => {
          setFieldValue(`${name}`, event?.currentTarget?.files?.[0]);
        }}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default FileUpload;
