import { ErrorMessage, Field } from "formik";
import React from "react";

import TextError from "./TextError";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <Field
        className="input-field"
        id={name}
        name={name}
        {...rest}
        autoComplete="off"
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
