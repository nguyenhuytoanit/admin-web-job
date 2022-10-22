import React, { useEffect } from "react";
import { useField, useFormikContext } from "formik";
import DatePicker, { registerLocale } from "react-datepicker";
import vi from "date-fns/locale/vi";
import { FieldFeedbackLabel } from "./FieldFeedbackLabel";

const getFieldCSSClasses = (touched, errors) => {
  const classes = ["form-control"];
  if (touched && errors) {
    classes.push("is-invalid");
  }

  return classes.join(" ");
};

export function DatePickerField({
  locale = "vi",
  label,
  withFeedbackLabel = false,
  customFeedbackLabel,
  timeCaption = "Time",
  type = "text",
  ...props
}) {
  const { setFieldValue, errors, touched } = useFormikContext();
  const [field] = useField(props);

  useEffect(() => {
    if (locale === "vi") {
      registerLocale(locale, vi);
    }
  }, [locale, registerLocale]);

  return (
    <>
      {label && <label>{label}</label>}
      <DatePicker
        className={getFieldCSSClasses(touched[field.name], errors[field.name])}
        style={{ width: "100%" }}
        autoComplete="off"
        selected={(field.value && new Date(field.value)) || null}
        {...field}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
        timeFormat="HH:mm"
        locale={locale}
        timeCaption={timeCaption}
        {...props}
      />
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
