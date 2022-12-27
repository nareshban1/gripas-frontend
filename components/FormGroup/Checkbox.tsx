import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Checkbox = (props) => {
  const { label, name, options, identifier, ...rest } = props;

  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <div className="flexfield">
        <Field className="input-field" name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <div key={option.key}>
                  <input
                    type="checkbox"
                    className="input-radio"
                    id={option.value + identifier}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value + identifier} className="">
                    {option.key}
                  </label>
                </div>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Checkbox;
