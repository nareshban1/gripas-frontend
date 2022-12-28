import { ReactNode } from "react";
import Select from "react-select";
import {
  ActionMeta,
  FormatOptionLabelMeta,
  OnChangeValue,
  StylesConfig,
} from "react-select/dist/declarations/src";

type SelectTypes = {
  options: any[];
  styles?: StylesConfig;
  isMulti?: boolean;
  isClearable?: boolean;
  loadingMessage?: string;
  placeHolder?: string;
  error?: boolean;
  touched?: boolean;
  isSearchable?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  formatOptionLabel?: (
    data: any,
    formatOptionLabelMeta: FormatOptionLabelMeta<any>
  ) => ReactNode;
  id?: string;
  name?: string;
  onChange: (
    value?: OnChangeValue<any, true>,
    action?: ActionMeta<any>
  ) => void;
};

const selectStyles: StylesConfig = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return { ...styles };
  },
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles, { data }) => ({ ...styles }),
};

const ReactSelect = (props: SelectTypes) => {
  const {
    options,
    styles,
    isMulti,
    isClearable,
    onChange,
    placeHolder,
    error,
    touched,
    isDisabled,
    isLoading,
    isSearchable,
    loadingMessage,
    formatOptionLabel,
    id,
    name,
    ...rest
  } = props;
  const customStyles = { ...selectStyles, ...styles };
  return (
    <Select
      options={options}
      isMulti={isMulti}
      styles={customStyles}
      isClearable={isClearable}
      onChange={onChange}
      placeholder={placeHolder}
      isSearchable={isSearchable}
      isLoading={isLoading}
      isDisabled={isDisabled}
      loadingMessage={() =>
        loadingMessage ? loadingMessage : "Fetching Data..."
      }
      formatOptionLabel={formatOptionLabel}
      id={id}
      name={name}
      {...rest}
    />
  );
};

export default ReactSelect;
