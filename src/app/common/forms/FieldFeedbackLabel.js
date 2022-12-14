import React from "react";

const inputLabel = ({ label, touched, error, customFeedbackLabel }) => {
  if (touched && error) {
    return (
      <div className="validated">
        <div className="invalid-feedback d-block">{error}</div>
      </div>
    );
  }

  return (
    <div className="feedback">
      {customFeedbackLabel && <>{customFeedbackLabel}</>}
      {!customFeedbackLabel && (
        <>
          Please enter <b>{label}</b>
        </>
      )}
    </div>
  );
};

const selectLabel = ({ label, touched, error, customFeedbackLabel }) => {
  if (touched && error) {
    return (
      <div className="validated">
        <div className="invalid-feedback d-block">{error}</div>
      </div>
    );
  }

  return (
    <div className="feedback">
      {customFeedbackLabel && <>{customFeedbackLabel}</>}
      {!customFeedbackLabel && label && (
        <>
          Please select <b>{label}</b>
        </>
      )}
    </div>
  );
};

export function FieldFeedbackLabel({ label, touched, error, type, customFeedbackLabel }) {
  switch (type) {
    case "text":
      return inputLabel({ label, touched, error, customFeedbackLabel });
    case "email":
      return inputLabel({ label, touched, error, customFeedbackLabel });
    case "password":
      return inputLabel({ label, touched, error, customFeedbackLabel });
    default:
      return selectLabel({ label, touched, error, customFeedbackLabel });
  }
}
