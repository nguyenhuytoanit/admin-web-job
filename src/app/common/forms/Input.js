import React, { useEffect, useRef } from "react";
import { FieldFeedbackLabel } from "./FieldFeedbackLabel";

const getFieldCSSClasses = (touched, errors) => {
  const classes = ["form-control"];
  if (touched && errors) {
    classes.push("is-invalid");
  }
  /*
  if (touched && !errors) {
    classes.push("is-valid");
  }
  */
  return classes.join(" ");
};

export function Input({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = false,
  customFeedbackLabel,
  type = "text",
  focus = false,
  className,
  ...props
}) {
  const inputRef = useRef();

  useEffect(() => {
    focus && inputRef.current.focus();
  }, [focus]);

  return (
    <>
      {label && <label>{label}</label>}
      <div className="box-input w-100">
        <input
          ref={inputRef}
          type={type}
          autoComplete={props.autoComplete || "off"}
          className={`${className || ""} ${getFieldCSSClasses(
            touched[field.name],
            errors[field.name]
          )}`}
          {...field}
          {...props}
        />
      </div>
      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={errors[field.name]}
          touched={touched[field.name]}
          label={label}
          type={type}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}
