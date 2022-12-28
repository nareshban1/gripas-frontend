import { Controller } from "react-hook-form";
import ReactSelect from "./ReactSelect";

type FormSelectTypes = {
  name: string;
  options: any;
  control: any;
  error?: string;
  onChange: () => void;
};

const FormSelect = (props: FormSelectTypes) => {
  const { name, options, control, error, ...rest } = props;
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ReactSelect options={options} {...field} {...rest} />
        )}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default FormSelect;
