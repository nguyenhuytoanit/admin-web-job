import { Select } from "app/common/forms/Select";
import React from "react";
import { QUESTION_TYPE } from "../contants";

export default function SelectQuestion({ field }) {
  return (
    <Select name={`${field}.type`} customFeedbackLabel withFeedbackLabel>
      <option value={QUESTION_TYPE.MULTIPLE_CHOICE}>Multiple choice</option>
      <option value={QUESTION_TYPE.TEXT_BOX}>Textbox</option>
      {/* <option value={QUESTION_TYPE.ATTACHMENT}>Attachment</option> */}
      <option value={QUESTION_TYPE.PARAGRAPH}>Paragraph</option>
      <option value={QUESTION_TYPE.DATE}>Date</option>
      <option value={QUESTION_TYPE.TIME}>Time</option>
      <option value={QUESTION_TYPE.SELECT_USER}>Select user</option>
    </Select>
  );
}
