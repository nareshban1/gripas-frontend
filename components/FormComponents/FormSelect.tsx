import { Controller } from "react-hook-form";
import ReactSelect, { SelectTypes } from "./ReactSelect";

type FormSelectTypes = {
  name: string;
  options: any;
  control: any;
  error?: string;
  className?: string;
  label?: string;
  value?: any;
  onChange: any;
};

const FormSelect = (props: FormSelectTypes & SelectTypes) => {
  const { name, options, control, error, className, label, ...rest } = props;
  return (
    <div className={className ?? "mb-3"}>
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ReactSelect options={options} {...field} {...rest} />
        )}
      />
      {error && <p className="form-text text-danger">{error}</p>}
    </div>
  );
};

export default FormSelect;
