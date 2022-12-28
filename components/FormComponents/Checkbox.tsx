import { RegisterOptions, UseFormRegister } from "react-hook-form";

type CheckboxTypes = {
  options: any[];
  name: string;
  rules?: RegisterOptions;
  error?: string;
  register?: UseFormRegister<any>;
};

const Checkbox = (props: CheckboxTypes) => {
  const { name, options, register, rules, error, ...rest } = props;
  return (
    <div>
      <div>
        {options &&
          options.map((option) => (
            <div>
              <input
                type="checkbox"
                id={option?.id}
                name={name}
                value={option.value}
                {...(register && register(name, rules))}
              />
              <label htmlFor={option?.id}>{option.label}</label>
              {error && <p>{error}</p>}
            </div>
          ))}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Checkbox;
