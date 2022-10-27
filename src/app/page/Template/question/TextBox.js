import { Checkbox } from "app/common/forms/Checkbox";
import { Input } from "app/common/forms/Input";
import { Select } from "app/common/forms/Select";
import { Field } from "formik";
import React from "react";
import { QUESTION_TYPE } from "./contants";

function TextBox({ field, idxContent, remove, content }) {
  return (
    <div>
      <div className="card mb-3 col-lg-11">
        <div className="row m-2 align-items-center">
          <div className="col-lg-8">
            <Field
              name={`${field}.question`}
              component={Input}
              placeholder={"Nhập nội dung đoạn văn"}
              customFeedbackLabel
              withFeedbackLabel
            />
          </div>
          <div className="col-lg-3">
            <Select name={`${field}.type`} customFeedbackLabel withFeedbackLabel>
              <option value={QUESTION_TYPE.MULTIPLE_CHOICE}>Multiple choice</option>
              <option value={QUESTION_TYPE.TEXT_BOX}>Textbox</option>
              <option value={QUESTION_TYPE.ATTACHMENT}>Attachment</option>
              <option value={QUESTION_TYPE.PARAGRAPH}>Paragraph</option>
              <option value={QUESTION_TYPE.DATE}>Date</option>
              <option value={QUESTION_TYPE.TIME}>Time</option>
              <option value={QUESTION_TYPE.SELECT_USER}>Select user</option>
            </Select>
          </div>
          <div className="col-lg-1">
            <i
              className="fa-solid fa-trash p-3 cursor-pointer text-danger"
              onClick={() => remove(idxContent)}
            ></i>
          </div>
        </div>
        <div className="p-3 col-lg-8">
          <div className="bg-light border h-50px mr-10 p-2">Câu trả lời</div>
          <div className="d-flex mt-3">
            <div className="w-200px">
              <Field
                name={`${field}.showAnswer`}
                component={Checkbox}
                label={"Điền sẵn đáp án"}
                customFeedbackLabel
                withFeedbackLabel
                className="w-20px h-20px mb-0"
              />
            </div>
            {content.showAnswer && (
              <div className="w-100">
                <Field
                  name={`${field}.contentAnswerTextBox`}
                  component={Input}
                  placeholder={"Nhập nội dung đáp án"}
                  customFeedbackLabel
                  withFeedbackLabel
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextBox;
