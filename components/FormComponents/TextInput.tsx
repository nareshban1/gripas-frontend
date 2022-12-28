import { RegisterOptions, UseFormRegister } from "react-hook-form";

type TextInputTypes = {
  type: string;
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

const TextInput = (props: TextInputTypes) => {
  const {
    type,
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
      <input
        type={type}
        name={name}
        disabled={disabled}
        placeholder={placeHolder}
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

export default TextInput;
