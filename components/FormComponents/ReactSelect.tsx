import { ReactNode } from "react";
import Select from "react-select";
import {
  ActionMeta,
  FormatOptionLabelMeta,
  OnChangeValue,
  StylesConfig,
} from "react-select/dist/declarations/src";

export type SelectTypes = {
  options: any[];
  styles?: StylesConfig;
  isMulti?: boolean;
  isClearable?: boolean;
  loadingMessage?: string;
  placeHolder?: string;
  hasError?: boolean;
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
  value: any;
  onChange: (
    value?: OnChangeValue<any, true>,
    action?: ActionMeta<any>
  ) => void;
};

const selectStyles: StylesConfig = {
  container: (styles) => ({ ...styles }),
  control: (styles, { isDisabled }) => ({
    ...styles,
    backgroundColor: isDisabled ? "#EBEBE4" : "white",
    borderRadius: 0,
    borderColor: isDisabled ? "#688fa8" : "#266590",
    padding: "0.5rem",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return { ...styles };
  },
  valueContainer: (styles) => ({ ...styles, margin: 0, padding: 0 }),
  input: (styles) => ({ ...styles, margin: 0, padding: 0 }),
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
    hasError,
    touched,
    isDisabled,
    isLoading,
    isSearchable,
    loadingMessage,
    formatOptionLabel,
    id,
    name,
    value,
    ...rest
  } = props;
  const customStyles = { ...selectStyles, ...styles };
  return (
    <Select
      value={value}
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
