import {
  RegisterOptions,
  UseFormRegister,
  useController,
} from "react-hook-form";
import { Control } from "react-hook-form/dist/types";

type CheckboxTypes = {
  options: any[];
  control?: Control<any>;
  name: string;
  rules?: RegisterOptions;
  error?: string;
  register?: UseFormRegister<any>;
  label?: string;
};

const Checkbox = (props: CheckboxTypes) => {
  const { name, label, options, register, rules, error, control, ...rest } =
    props;

  const { field } = useController({
    control,
    name: name,
  });
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
                type={"checkbox"}
                id={option?.id}
                name={name}
                value={option.value}
                onClick={(e: any) => {
                  if (
                    field?.value &&
                    Array.isArray(field?.value) &&
                    field.value?.includes(e.target.value)
                  ) {
                    const newValue = [...field.value];
                    field.onChange(
                      newValue.filter((value) => value !== e.target.value)
                    );
                  } else if (field?.value && Array.isArray(field?.value)) {
                    const newValue = [...field.value, e.target.value];
                    field.onChange(newValue);
                  } else {
                    const newValue = [e.target.value];
                    field.onChange(newValue);
                  }
                }}
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
