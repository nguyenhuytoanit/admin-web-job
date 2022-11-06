import { DatePickerField } from "app/common/forms/DatePickerField";
import { Input } from "app/common/forms/Input";
import { Field } from "formik";
import React from "react";
import SelectQuestion from "./components/SelectQuestion";

function Date({ field, idxQuestion, remove }) {
  return (
    <div>
      <div className="card mb-3 col-lg-11">
        <div className="row m-2 align-items-center">
          <div className="col-lg-8">
            <Field
              name={`${field}.label`}
              component={Input}
              placeholder={"Nhập nội dung đoạn văn"}
              customFeedbackLabel
              withFeedbackLabel
            />
          </div>
          <div className="col-lg-3">
            <SelectQuestion field={field} />
          </div>
          <div className="col-lg-1">
            <i
              className="fa-solid fa-trash p-3 cursor-pointer text-danger"
              onClick={() => remove(idxQuestion)}
            ></i>
          </div>
        </div>
        <div className="p-3 col-lg-8">
          <DatePickerField
            name={`${field}.date`}
            dateFormat="dd-MM-yyyy"
            style={{ innerWidth: "100%" }}
            label={"Chọn ngày"}
          />
        </div>
      </div>
    </div>
  );
}

export default Date;
