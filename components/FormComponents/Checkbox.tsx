import { RegisterOptions, UseFormRegister } from "react-hook-form";

type CheckboxTypes = {
  options: any[];
  name: string;
  rules?: RegisterOptions;
  error?: string;
  register?: UseFormRegister<any>;
  label?: string;
  type: "radio" | "checkbox";
};

const Checkbox = (props: CheckboxTypes) => {
  const { name, type, label, options, register, rules, error, ...rest } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <div>
        {options &&
          options.map((option) => (
            <div key={option.id} className="d-flex align-items-center my-1">
              <input
                type={type}
                id={option?.id}
                name={name}
                value={option.value}
                {...(register && register(name, rules))}
                className="text-primary bg-primary"
              />{" "}
              <label
                htmlFor={option?.id}
                className="fw-light"
                style={{ marginLeft: "0.5rem" }}
              >
                {option.label}
              </label>
            </div>
          ))}
      </div>
      {error && <p className="form-text text-danger">{error}</p>}
    </div>
  );
};

export default Checkbox;
