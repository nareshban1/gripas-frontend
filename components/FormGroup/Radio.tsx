import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";
const Radio = (props) => {
  const { label, name, options, identifier, ...rest } = props;

  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <div className="input-flexfield">
        <Field name={name} {...rest} className="input-field">
          {({ field }) => {
            return options.map((option) => {
              return (
                <input key={option.key} className="input-radio">
                  <input
                    type="radio"
                    id={option.value + identifier}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.value + identifier} className="">
                    {option.key}
                  </label>
                </input>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Radio;
