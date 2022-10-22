import React, { useEffect, useRef, useState } from "react";
import { FieldFeedbackLabel } from "./FieldFeedbackLabel";
import "./InputPassword.css";

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

export function InputPassword({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = false,
  customFeedbackLabel,
  focus = false,
  ...props
}) {
  const inputRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    focus && inputRef.current.focus();
  }, [focus]);

  return (
    <>
      {label && <label>{label}</label>}
      <div className="box-input w-100">
        <input
          ref={inputRef}
          type={showPassword ? "text" : "password"}
          autoComplete={props.autoComplete || "off"}
          className={getFieldCSSClasses(touched[field.name], errors[field.name])}
          {...field}
          {...props}
        />
        {/* Icon  */}
        <div className="toggle-password">
          <p className="mb-0 cursor-pointer font-size-sm text-dark-50" onClick={togglePassword}>
            {showPassword ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-sharp fa-solid fa-eye-slash"></i>
            )}
          </p>
        </div>
      </div>
      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={errors[field.name]}
          touched={touched[field.name]}
          label={label}
          type={"password"}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}
