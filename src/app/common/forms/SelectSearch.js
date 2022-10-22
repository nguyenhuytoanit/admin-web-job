import React from "react";
import { useField, useFormikContext } from "formik";
import "./SelectSearch.css";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { FieldFeedbackLabel } from "..";

const getFieldCSSClasses = (touched, errors) => {
  const classes = ["select-search", "form-control", "form-control-solid"];
  if (touched && errors) {
    classes.push("is-invalid-select");
  }

  if (touched && !errors) {
    classes.push("is-valid-select");
  }

  return classes.join(" ");
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "0.42rem",
    minHeight: "calc(1.5em + 1.3rem + 2px)",
    border: "1px solid #E4E6EF",
  }),
  /*
  valueContainer: (provided, state) => ({
    ...provided,
    height: '40px',
    padding: '0 6px'
  }),

  input: (provided, state) => ({
    ...provided,
    padding: '0.65rem',
    height: '40px',
  }),
  indicatorSeparator: state => ({
    display: 'none',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
  }),
  */
};

export function AsyncSelectSearch({
  label,
  loadOptions,
  notifyChange,
  defaultOptions,
  withFeedbackLabel = false,
  customFeedbackLabel,
  ...props
}) {
  const [field, meta] = useField(props);

  const { setFieldValue, errors, touched } = useFormikContext();

  return (
    <>
      {label && <label>{label}</label>}
      <AsyncSelect
        cacheOptions
        classNamePrefix="select"
        loadOptions={loadOptions}
        defaultOptions={defaultOptions}
        {...field}
        styles={customStyles}
        onChange={(val) => {
          notifyChange && notifyChange(val);
          setFieldValue(field.name, val);
        }}
        {...props}
      />
      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={errors[field.name]}
          touched={touched[field.name]}
          label={label}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}

export function SelectSearch({
  label,
  options,
  notifyChange,
  withFeedbackLabel = false,
  customFeedbackLabel,
  ...props
}) {
  const [field, meta] = useField(props);

  const { setFieldValue, errors, touched } = useFormikContext();
  return (
    <>
      {label && <label>{label}</label>}
      <Select
        cacheOptions
        classNamePrefix="select"
        options={options}
        {...field}
        {...props}
        styles={customStyles}
        onChange={(val) => {
          notifyChange && notifyChange(val);
          setFieldValue(field.name, val);
        }}
      />
      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={errors[field.name]}
          touched={touched[field.name]}
          label={label}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}

export function CreateSelect({
  label,
  notifyChange,
  withFeedbackLabel = false,
  customFeedbackLabel,
  ...props
}) {
  return (
    <>
      {label && <label>{label}</label>}
      <CreatableSelect
        isMulti
        isClearable
        classNamePrefix="select"
        styles={customStyles}
        {...props}
      />
    </>
  );
}
