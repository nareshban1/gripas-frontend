import { UseFormRegister } from "react-hook-form/dist/types/form";
import { RegisterOptions } from "react-hook-form/dist/types/validator";

type TextAreaTypes = {
  name: string;
  disabled?: boolean;
  placeHolder?: string;
  readOnly?: boolean;
  required?: boolean;
  value?: string;
  rules?: RegisterOptions;
  register?: UseFormRegister<any>;
  error?: string;
  label?: string;
};

const TextArea = (props: TextAreaTypes) => {
  const {
    name,
    disabled,
    placeHolder,
    readOnly,
    required,
    value,
    register,
    rules,
    error,
    label,
    ...rest
  } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <textarea
        name={name}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        value={value}
        {...rest}
        {...(register && register(name, rules))}
        className="form-control py-3 border-primary rounded-0"
      />
      {error && <p className="form-text text-danger">{error}</p>}
    </div>
  );
};

export default TextArea;
